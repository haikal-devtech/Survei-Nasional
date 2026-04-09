/**
 * Survey Dashboard — Google Apps Script Backend
 * Deploy sebagai Web App: Execute as Me, Access: Anyone
 *
 * Ganti SHEET_NAME kalau nama sheet-nya bukan default Google Form.
 */

const SHEET_NAME = 'Form Responses 1';
const SAMPLE_SIZE = 100; // baris yang di-sample buat detect tipe kolom

// ─── Entry Point ────────────────────────────────────────────────────────────

function doGet(e) {
  const action = e.parameter.action || 'data';
  const startDate = e.parameter.startDate || null;
  const endDate = e.parameter.endDate || null;

  let result;

  try {
    switch (action) {
      case 'metadata': result = getMetadata(); break;
      case 'summary':  result = getSummary();  break;
      case 'data':     result = getData(startDate, endDate); break;
      default:         result = { error: 'Unknown action: ' + action };
    }
  } catch (err) {
    result = { error: err.message };
  }

  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
}

function getHeaders() {
  const sheet = getSheet();
  return sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
}

/**
 * Deteksi tipe kolom berdasarkan sample values.
 * Return: 'timestamp' | 'scale' | 'numeric' | 'categorical' | 'text'
 */
function detectColumnType(values) {
  const nonEmpty = values.filter(function(v) {
    return v !== '' && v !== null && v !== undefined;
  });
  if (nonEmpty.length === 0) return 'text';

  // Timestamp: Date object atau string yang bisa di-parse sebagai tanggal
  const first = nonEmpty[0];
  if (first instanceof Date) return 'timestamp';
  if (typeof first === 'string' && !isNaN(Date.parse(first)) && first.includes('-')) {
    return 'timestamp';
  }

  // Numeric check
  const allNumeric = nonEmpty.every(function(v) {
    return !isNaN(Number(v)) && v !== '';
  });

  if (allNumeric) {
    const nums = nonEmpty.map(Number);
    const min = Math.min.apply(null, nums);
    const max = Math.max.apply(null, nums);
    // Scale: angka 1–10 dengan range ≤ 9 (misal: 1-5 atau 1-10)
    if (min >= 1 && max <= 10) return 'scale';
    return 'numeric';
  }

  // Categorical: unique values sedikit
  const uniqueVals = {};
  nonEmpty.forEach(function(v) { uniqueVals[String(v)] = true; });
  if (Object.keys(uniqueVals).length <= 15) return 'categorical';

  return 'text';
}

// ─── Actions ─────────────────────────────────────────────────────────────────

/**
 * Return metadata: info tiap kolom (nama + tipe yang terdeteksi).
 */
function getMetadata() {
  const sheet = getSheet();
  const headers = getHeaders();
  const lastRow = sheet.getLastRow();
  const totalRows = Math.max(0, lastRow - 1);

  if (totalRows === 0) {
    return {
      columns: headers.map(function(h, i) { return { name: h, type: 'text', index: i }; }),
      totalRows: 0
    };
  }

  const sampleRows = Math.min(totalRows, SAMPLE_SIZE);
  const sampleData = sheet.getRange(2, 1, sampleRows, headers.length).getValues();

  const columns = headers.map(function(header, idx) {
    const colValues = sampleData.map(function(row) { return row[idx]; });
    return {
      name: header,
      type: detectColumnType(colValues),
      index: idx
    };
  });

  return {
    columns: columns,
    totalRows: totalRows,
    sheetName: sheet.getName()
  };
}

/**
 * Return semua rows sebagai array of objects, dengan optional date filter.
 * Asumsikan kolom pertama (index 0) adalah Timestamp dari Google Form.
 */
function getData(startDate, endDate) {
  const sheet = getSheet();
  const headers = getHeaders();
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) return { rows: [], headers: headers };

  const rawData = sheet.getRange(2, 1, lastRow - 1, headers.length).getValues();

  let rows = rawData.map(function(row) {
    const obj = {};
    headers.forEach(function(h, i) {
      const val = row[i];
      // Serialize Date objects ke ISO string
      obj[h] = val instanceof Date ? val.toISOString() : val;
    });
    return obj;
  });

  // Filter by date range menggunakan kolom pertama (Timestamp)
  if (startDate || endDate) {
    const tsKey = headers[0];
    const start = startDate ? new Date(startDate) : null;
    const end   = endDate   ? new Date(endDate + 'T23:59:59') : null;

    rows = rows.filter(function(row) {
      const d = new Date(row[tsKey]);
      if (isNaN(d.getTime())) return true; // baris tanpa timestamp, jangan difilter
      if (start && d < start) return false;
      if (end   && d > end)   return false;
      return true;
    });
  }

  return { rows: rows, headers: headers };
}

/**
 * Return aggregated stats: total responden, hari ini, kemarin, trend, dan
 * dailyCounts (responden per hari untuk 30 hari terakhir).
 */
function getSummary() {
  const sheet = getSheet();
  const headers = getHeaders();
  const lastRow = sheet.getLastRow();

  if (lastRow <= 1) {
    return { total: 0, today: 0, yesterday: 0, trend: null, dailyCounts: [] };
  }

  const rawData = sheet.getRange(2, 1, lastRow - 1, headers.length).getValues();

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);

  let todayCount = 0;
  let yesterdayCount = 0;
  const dailyCounts = {};

  rawData.forEach(function(row) {
    const rawTs = row[0];
    const ts = rawTs instanceof Date ? rawTs : new Date(rawTs);
    if (isNaN(ts.getTime())) return;

    const dayStart = new Date(ts.getFullYear(), ts.getMonth(), ts.getDate());

    if (dayStart.getTime() === todayStart.getTime())     todayCount++;
    if (dayStart.getTime() === yesterdayStart.getTime()) yesterdayCount++;

    const dayKey = ts.toISOString().split('T')[0];
    dailyCounts[dayKey] = (dailyCounts[dayKey] || 0) + 1;
  });

  const trend = yesterdayCount > 0
    ? Number(((todayCount - yesterdayCount) / yesterdayCount * 100).toFixed(1))
    : null;

  // Sort dailyCounts, ambil 30 hari terakhir
  const sortedDailyCounts = Object.keys(dailyCounts)
    .sort()
    .slice(-30)
    .map(function(date) { return { date: date, count: dailyCounts[date] }; });

  return {
    total: lastRow - 1,
    today: todayCount,
    yesterday: yesterdayCount,
    trend: trend,
    dailyCounts: sortedDailyCounts
  };
}

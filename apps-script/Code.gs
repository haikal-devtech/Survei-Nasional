/**
 * Backend Google Apps Script (Code.gs)
 * Untuk di-deploy sebagai Web App yang diakses oleh Next.js Proxy
 * Fitur: Mengambil data dan menghitung agregat Kinerja Surveyor
 */

const SPREADSHEET_ID = "ISI_DENGAN_ID_SPREADSHEET_ANDA"; 
const DATA_SHEET = "Form Responses 1";

function doGet(e) {
  const action = e.parameter.action || 'data';
  try {
    if (action === "metadata") {
      return jsonResponse(getMetadata());
    } else if (action === "data") {
      return jsonResponse(getData(e.parameter.startDate, e.parameter.endDate));
    } else if (action === "summary") {
      return jsonResponse(getSummary());
    } else if (action === "surveyor_performance") {
      return jsonResponse(getSurveyorMetrics());
    }
    return jsonResponse({ error: "Unknown action" }, 400);
  } catch (error) {
    return jsonResponse({ error: error.toString() }, 500);
  }
}

function jsonResponse(data, status = 200) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getSheetData() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = ss.getSheetByName(DATA_SHEET);
  if (!sheet) throw new Error("Sheet not found");
  const data = sheet.getDataRange().getValues();
  if (data.length === 0) throw new Error("Sheet is empty");
  
  const headers = data[0];
  const rows = [];
  for (let i = 1; i < data.length; i++) {
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = data[i][j];
    }
    rows.push(obj);
  }
  return { headers, rows };
}

function detectType(headerName, values) {
  const lowerHeader = headerName.toLowerCase();
  
  if (lowerHeader === 'timestamp' || lowerHeader.includes('tanggal')) return 'timestamp';
  
  let isNumeric = true;
  let uniqueValues = new Set();
  let nonEmptyCount = 0;
  
  for (const v of values) {
    if (v === '' || v === null || v === undefined) continue;
    nonEmptyCount++;
    uniqueValues.add(v);
    if (isNaN(Number(v))) isNumeric = false;
  }
  
  if (nonEmptyCount === 0) return 'text';
  
  const vArr = Array.from(uniqueValues);
  
  if (isNumeric && uniqueValues.size <= 10) {
    const min = Math.min(...vArr.map(Number));
    const max = Math.max(...vArr.map(Number));
    if ((min >= 0 && max <= 10) || (min >= 1 && max <= 5)) {
      return 'scale';
    }
  }
  
  if (uniqueValues.size < 15 && !isNumeric) return 'categorical';
  if (uniqueValues.size < 15 && isNumeric) return 'categorical'; 
  if (isNumeric) return 'numeric';
  
  return 'text'; 
}

function getMetadata() {
  const { headers, rows } = getSheetData();
  const columns = [];
  for (let i = 0; i < headers.length; i++) {
    const colValues = rows.map(r => r[headers[i]]).slice(0, 100);
    columns.push({
      name: headers[i],
      type: detectType(headers[i], colValues),
      index: i
    });
  }
  return { columns, totalRows: rows.length, sheetName: DATA_SHEET };
}

function getData(startDate, endDate) {
  let { rows } = getSheetData();
  
  if (startDate || endDate) {
    rows = rows.filter(r => {
      const tsCol = Object.keys(r).find(k => k.toLowerCase() === 'timestamp');
      const ts = tsCol ? r[tsCol] : null;

      if (!ts) return true;
      const d = new Date(ts);
      if (startDate && d < new Date(startDate)) return false;
      if (endDate) {
        const e = new Date(endDate);
        e.setDate(e.getDate() + 1);
        if (d >= e) return false;
      }
      return true;
    });
  }
  return { rows };
}

function getSummary() {
  const { rows } = getSheetData();
  const total = rows.length;
  
  const today = new Date();
  today.setHours(0,0,0,0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  let countToday = 0;
  let countYesterday = 0;
  const dailyCountsMap = {};
  
  for (const r of rows) {
    const tsCol = Object.keys(r).find(k => k.toLowerCase() === 'timestamp');
    const ts = tsCol ? r[tsCol] : null;

    if (!ts) continue;
    const d = new Date(ts);
    if(isNaN(d.getTime())) continue;
    
    // daily 
    const dateKey = d.toISOString().split('T')[0];
    dailyCountsMap[dateKey] = (dailyCountsMap[dateKey] || 0) + 1;
    
    // today / yesterday check
    const dDate = new Date(d);
    dDate.setHours(0,0,0,0);
    if (dDate.getTime() === today.getTime()) countToday++;
    if (dDate.getTime() === yesterday.getTime()) countYesterday++;
  }
  
  let trend = null;
  if (countYesterday > 0) {
    trend = ((countToday - countYesterday) / countYesterday) * 100;
  } else if (countToday > 0) {
    trend = 100; 
  } else {
    trend = 0;
  }
  
  const dailyCounts = Object.keys(dailyCountsMap).sort().map(k => ({
    date: k, count: dailyCountsMap[k]
  }));
  
  return {
    total, today: countToday, yesterday: countYesterday, trend, dailyCounts
  };
}

function getSurveyorMetrics() {
  const { headers, rows } = getSheetData();
  
  const timestampCol = headers.find(h => h.toString().toLowerCase().includes('timestamp'));
  const surveyorCol = headers.find(h => h.toString().toLowerCase().includes('nama surveyor') || h.toString().toLowerCase() === 'surveyor');

  if (!surveyorCol) {
    return { error: "Kolom Nama Surveyor tidak ditemukan di sheet. Pastikan kuesioner memiliki input nama surveyor." };
  }

  let surveyorMap = {}; 

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const surveyorName = row[surveyorCol]?.toString().trim() || "Anonim";
    const timestampVal = timestampCol ? row[timestampCol] : null;
    const timestamp = timestampVal ? new Date(timestampVal) : null;

    if (!surveyorMap[surveyorName]) {
      surveyorMap[surveyorName] = { 
        nama: surveyorName, 
        total: 1, 
        lastActive: timestamp 
      };
    } else {
      surveyorMap[surveyorName].total += 1;
      if (timestamp && surveyorMap[surveyorName].lastActive) {
        if (timestamp > surveyorMap[surveyorName].lastActive) {
          surveyorMap[surveyorName].lastActive = timestamp;
        }
      } else if (timestamp) {
        surveyorMap[surveyorName].lastActive = timestamp;
      }
    }
  }

  let results = Object.values(surveyorMap);
  results.sort((a, b) => b.total - a.total);
  
  // Format dates
  results = results.map(r => {
    if (r.lastActive) {
        const d = new Date(r.lastActive);
        if(!isNaN(d.getTime())) {
            const pad = (n) => n.toString().padStart(2, '0');
            r.lastActive = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
        } else {
            r.lastActive = "-";
        }
    } else {
        r.lastActive = "-";
    }
    r.status = "Active"; 
    return r;
  });

  return {
    success: true,
    total_surveyors: results.length,
    data: results
  };
}

export type ColumnType = 'scale' | 'categorical' | 'timestamp' | 'numeric' | 'text';

export interface ColumnMeta {
  name: string;
  type: ColumnType;
  index: number;
}

// Tentukan chart yang cocok untuk tiap tipe kolom
export function getChartType(colType: ColumnType): 'bar' | 'pie' | 'line' | 'card' | null {
  switch (colType) {
    case 'scale':       return 'bar';
    case 'categorical': return 'pie';
    case 'timestamp':   return 'line'; // bukan per-row, tapi dipakai buat timeseries respons/hari
    case 'numeric':     return 'card';
    case 'text':        return null;   // tidak divisualisasikan
    default:            return null;
  }
}

// Hitung distribusi untuk kolom categorical (pilihan ganda)
export function aggregateCategorical(
  rows: Record<string, unknown>[],
  columnName: string
): { name: string; value: number }[] {
  const counts: Record<string, number> = {};
  rows.forEach(row => {
    const val = String(row[columnName] ?? 'Tidak Diisi').trim() || 'Tidak Diisi';
    counts[val] = (counts[val] ?? 0) + 1;
  });
  return Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .map(([name, value]) => ({ name, value }));
}

// Hitung distribusi untuk kolom scale (misal: berapa yang milih 1, 2, 3, 4, 5)
export function aggregateScale(
  rows: Record<string, unknown>[],
  columnName: string
): { name: string; value: number }[] {
  const counts: Record<string, number> = {};
  rows.forEach(row => {
    const val = String(row[columnName] ?? '').trim();
    if (!val) return;
    counts[val] = (counts[val] ?? 0) + 1;
  });
  return Object.entries(counts)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([name, value]) => ({ name, value }));
}

// Hitung respons per hari dari kolom timestamp
export function aggregateTimeSeries(
  rows: Record<string, unknown>[],
  timestampColumn: string
): { date: string; count: number }[] {
  const counts: Record<string, number> = {};
  rows.forEach(row => {
    const ts = row[timestampColumn];
    if (!ts) return;
    const d = new Date(ts as string);
    if (isNaN(d.getTime())) return;
    const dayKey = d.toISOString().split('T')[0];
    counts[dayKey] = (counts[dayKey] ?? 0) + 1;
  });
  return Object.entries(counts)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, count]) => ({ date, count }));
}

// Hitung stats untuk kolom numerik bebas
export function calculateNumericStats(
  rows: Record<string, unknown>[],
  columnName: string
): { avg: string; min: number; max: number; count: number } {
  const values = rows
    .map(r => Number(r[columnName]))
    .filter(v => !isNaN(v));

  if (values.length === 0) return { avg: '0', min: 0, max: 0, count: 0 };

  const sum = values.reduce((a, b) => a + b, 0);
  return {
    avg: (sum / values.length).toFixed(2),
    min: Math.min(...values),
    max: Math.max(...values),
    count: values.length,
  };
}

// Format tanggal YYYY-MM-DD ke DD MMM (misal: 15 Apr)
export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
}

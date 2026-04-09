'use client';

import { useState, useCallback } from 'react';
import { useSurveyData } from '@/hooks/useSurveyData';
import {
  getChartType,
  aggregateCategorical,
  aggregateScale,
  aggregateTimeSeries,
  calculateNumericStats,
  ColumnMeta,
} from '@/lib/detectColumnType';

import Header       from '@/components/Header';
import FilterBar    from '@/components/FilterBar';
import SummaryCards from '@/components/SummaryCards';
import ChartWrapper from '@/components/charts/ChartWrapper';
import DynamicBarChart  from '@/components/charts/DynamicBarChart';
import DynamicPieChart  from '@/components/charts/DynamicPieChart';
import DynamicLineChart from '@/components/charts/DynamicLineChart';

// ─── Skeleton loader ────────────────────────────────────────────────────────

function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-[#1a1a1a] rounded-xl animate-pulse ${className}`} />
  );
}

// ─── Numeric card (untuk kolom tipe 'numeric') ───────────────────────────────

function NumericCard({ col, rows }: { col: ColumnMeta; rows: Record<string, unknown>[] }) {
  const stats = calculateNumericStats(rows, col.name);
  return (
    <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
      <h3 className="text-white text-sm font-medium mb-3 leading-tight">{col.name}</h3>
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Rata-rata', val: stats.avg },
          { label: 'Minimum',  val: stats.min },
          { label: 'Maksimum', val: stats.max },
        ].map(s => (
          <div key={s.label}>
            <p className="text-[#6b7280] text-xs mb-1">{s.label}</p>
            <p className="text-white text-lg font-semibold">{s.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Dashboard page ──────────────────────────────────────────────────────────

export default function DashboardPage() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate]     = useState('');
  const [hasFilter, setHasFilter] = useState(false);

  const { metadata, rows, summary, loading, error, lastUpdated, refetch } =
    useSurveyData(startDate || undefined, endDate || undefined);

  // ── Filter handlers ──
  const handleFilter = useCallback((s: string, e: string) => {
    setStartDate(s);
    setEndDate(e);
    setHasFilter(true);
  }, []);

  const handleReset = useCallback(() => {
    setStartDate('');
    setEndDate('');
    setHasFilter(false);
  }, []);

  // ── Export PDF ──
  async function exportPDF() {
    const html2canvas = (await import('html2canvas')).default;
    const { jsPDF } = await import('jspdf');

    const dashboard = document.getElementById('dashboard-content');
    if (!dashboard) return;

    const canvas = await html2canvas(dashboard, {
      backgroundColor: '#0a0a0a',
      scale: 1.5,
      useCORS: true,
    });

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'px', format: 'a4' });
    const pdfW = pdf.internal.pageSize.getWidth();
    const ratio = pdfW / canvas.width;
    const pdfH = canvas.height * ratio;

    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfW, pdfH);
    pdf.save('dashboard-survei.pdf');
  }

  // ── Export CSV ──
  function exportCSV() {
    if (!metadata || !rows.length) return;
    const headers = metadata.columns.map(c => c.name);
    const csvRows = [
      headers.join(','),
      ...rows.map(row =>
        headers
          .map(h => `"${String(row[h] ?? '').replace(/"/g, '""')}"`)
          .join(',')
      ),
    ];
    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'data-survei.csv';
    link.click();
  }

  // ── Pisahkan kolom timestamp dari kolom biasa ──
  const timestampCols = metadata?.columns.filter(c => c.type === 'timestamp') ?? [];
  const otherCols     = metadata?.columns.filter(c => c.type !== 'timestamp') ?? [];

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header
        lastUpdated={lastUpdated}
        loading={loading}
        onRefresh={refetch}
        onExportPDF={exportPDF}
        onExportCSV={exportCSV}
      />

      <main id="dashboard-content" className="max-w-screen-xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Filter */}
        <FilterBar
          onFilter={handleFilter}
          onReset={handleReset}
          hasActiveFilter={hasFilter}
        />

        {/* Error state */}
        {error && (
          <div className="bg-red-950/40 border border-red-900 rounded-xl px-4 py-3 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Summary cards */}
        {loading && !summary ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-[100px]" />)}
          </div>
        ) : summary ? (
          <SummaryCards
            total={summary.total}
            today={summary.today}
            yesterday={summary.yesterday}
            trend={summary.trend}
          />
        ) : null}

        {/* Line chart: respons per hari — selalu muncul kalau ada data summary */}
        {summary && summary.dailyCounts.length > 0 && (
          <ChartWrapper
            title="Respons Per Hari"
            subtitle={`${summary.dailyCounts.length} hari terakhir`}
          >
            <DynamicLineChart data={summary.dailyCounts} />
          </ChartWrapper>
        )}

        {/* Chart grid — kolom selain timestamp */}
        {loading && !metadata ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-[300px]" />)}
          </div>
        ) : metadata ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {otherCols.map(col => {
              const chartType = getChartType(col.type);

              // Kolom teks panjang → skip
              if (!chartType) return null;

              // Kolom numeric → kartu stats, bukan chart
              if (chartType === 'card') {
                return <NumericCard key={col.name} col={col} rows={rows} />;
              }

              // Bar chart (scale: 1-5, 1-10)
              if (chartType === 'bar') {
                const data = aggregateScale(rows, col.name);
                return (
                  <ChartWrapper key={col.name} title={col.name} subtitle="Distribusi jawaban">
                    <DynamicBarChart data={data} totalRows={rows.length} />
                  </ChartWrapper>
                );
              }

              // Pie chart (categorical: pilihan ganda)
              if (chartType === 'pie') {
                const data = aggregateCategorical(rows, col.name);
                return (
                  <ChartWrapper key={col.name} title={col.name} subtitle="Distribusi pilihan">
                    <DynamicPieChart data={data} totalRows={rows.length} />
                  </ChartWrapper>
                );
              }

              return null;
            })}
          </div>
        ) : null}

        {/* Empty state */}
        {!loading && metadata && rows.length === 0 && (
          <div className="text-center py-16 text-[#4b5563] text-sm">
            Belum ada respons yang masuk.
          </div>
        )}
      </main>
    </div>
  );
}

'use client';

import { useState, useEffect, useCallback } from 'react';
import { ColumnMeta } from '@/lib/detectColumnType';

interface SurveyData {
  metadata: { columns: ColumnMeta[]; totalRows: number; sheetName: string } | null;
  rows: Record<string, unknown>[];
  summary: {
    total: number;
    today: number;
    yesterday: number;
    trend: number | null;
    dailyCounts: { date: string; count: number }[];
  } | null;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
}

const REFRESH_INTERVAL = 60_000; // 60 detik

export function useSurveyData(startDate?: string, endDate?: string) {
  const [state, setState] = useState<SurveyData>({
    metadata: null,
    rows: [],
    summary: null,
    loading: true,
    error: null,
    lastUpdated: null,
  });

  const fetchAll = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      const params = new URLSearchParams({ action: 'data' });
      if (startDate) params.set('startDate', startDate);
      if (endDate)   params.set('endDate', endDate);

      // Fetch paralel — metadata tidak perlu difilter tanggal
      const [metaRes, dataRes, summaryRes] = await Promise.all([
        fetch('/api/survey?action=metadata'),
        fetch(`/api/survey?${params}`),
        fetch('/api/survey?action=summary'),
      ]);

      if (!metaRes.ok || !dataRes.ok || !summaryRes.ok) {
        throw new Error('Gagal fetch data dari server.');
      }

      const [metadata, dataPayload, summary] = await Promise.all([
        metaRes.json(),
        dataRes.json(),
        summaryRes.json(),
      ]);

      if (metadata.error) throw new Error(metadata.error);
      if (dataPayload.error) throw new Error(dataPayload.error);

      setState({
        metadata,
        rows: dataPayload.rows ?? [],
        summary,
        loading: false,
        error: null,
        lastUpdated: new Date(),
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: err instanceof Error ? err.message : 'Terjadi kesalahan.',
      }));
    }
  }, [startDate, endDate]);

  // Fetch saat pertama load dan setiap kali filter berubah
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  // Auto-refresh tiap 60 detik
  useEffect(() => {
    const interval = setInterval(fetchAll, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchAll]);

  return { ...state, refetch: fetchAll };
}

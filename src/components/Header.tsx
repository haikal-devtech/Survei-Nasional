'use client';

import { RefreshCw, Download, FileText, LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

interface HeaderProps {
  lastUpdated: Date | null;
  loading: boolean;
  onRefresh: () => void;
  onExportPDF: () => void;
  onExportCSV: () => void;
}

export default function Header({
  lastUpdated,
  loading,
  onRefresh,
  onExportPDF,
  onExportCSV,
}: HeaderProps) {
  const timeStr = lastUpdated
    ? lastUpdated.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    : null;

  return (
    <header className="border-b border-[#1f1f1f] bg-[#0a0a0a] sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 flex items-center justify-center rounded-lg bg-[#1a1a1a] border border-[#2a2a2a]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="1.5">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <span className="text-white text-sm font-medium">Dashboard Survei</span>
          {timeStr && (
            <span className="hidden sm:block text-[#4b5563] text-xs">
              Diperbarui {timeStr}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onRefresh}
            disabled={loading}
            title="Refresh data"
            className="
              w-8 h-8 flex items-center justify-center
              rounded-lg border border-[#2a2a2a] bg-[#111111]
              text-[#6b7280] hover:text-white hover:border-[#3a3a3a]
              transition-colors disabled:opacity-40
            "
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
          </button>

          <button
            onClick={onExportCSV}
            title="Download CSV"
            className="
              hidden sm:flex items-center gap-1.5 px-3 h-8
              rounded-lg border border-[#2a2a2a] bg-[#111111]
              text-[#6b7280] hover:text-white hover:border-[#3a3a3a]
              text-xs transition-colors
            "
          >
            <FileText size={12} />
            CSV
          </button>

          <button
            onClick={onExportPDF}
            title="Download PDF"
            className="
              hidden sm:flex items-center gap-1.5 px-3 h-8
              rounded-lg border border-[#2a2a2a] bg-[#111111]
              text-[#6b7280] hover:text-white hover:border-[#3a3a3a]
              text-xs transition-colors
            "
          >
            <Download size={12} />
            PDF
          </button>

          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            title="Keluar"
            className="
              w-8 h-8 flex items-center justify-center
              rounded-lg border border-[#2a2a2a] bg-[#111111]
              text-[#6b7280] hover:text-red-400 hover:border-red-900
              transition-colors
            "
          >
            <LogOut size={13} />
          </button>
        </div>
      </div>
    </header>
  );
}

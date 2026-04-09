import React from 'react';

// Example UI Dashboard Page
import SurveyorPanel from '@/components/dashboard/SurveyorPanel';

export default function DashboardPage() {
  return (
    <main className="min-h-screen pb-12 flex flex-col">
      {/* TOPBAR */}
      <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur-md border-b border-divider flex flex-col md:flex-row items-center px-5">
        <div className="flex items-center gap-3 py-3 pr-4 md:border-r border-divider mr-2">
          <div className="w-8 h-8 bg-red-1 rounded-md flex items-center justify-center font-serif text-white font-bold">
            PB
          </div>
          <div>
            <div className="text-xs font-bold tracking-wider leading-tight">Pusaka Bangsa</div>
            <div className="text-[9px] text-muted tracking-widest uppercase">Survei Nasional 2026</div>
          </div>
        </div>
        
        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-3">
          <button className="text-[10px] font-semibold text-txt uppercase tracking-wider border-b-2 border-red-1 pb-1">
            📊 Kinerja Surveyor
          </button>
          <button className="text-[10px] font-semibold text-muted hover:text-txt uppercase tracking-wider border-b-2 border-transparent pb-1 transition">
            📍 Sebaran
          </button>
          <button className="text-[10px] font-semibold text-muted hover:text-txt uppercase tracking-wider border-b-2 border-transparent pb-1 transition">
            🏛️ Pemerintah
          </button>
        </div>
        
        <div className="ml-auto p-3 text-xs flex gap-3">
            <span className="text-[9px] text-muted">Akses Terbatas Surveyor</span>
            <button className="px-3 py-1 text-[9px] uppercase tracking-wider border border-divider rounded-full hover:bg-divider/50 transition text-muted">Refresh</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="max-w-[1600px] mx-auto w-full px-5 mt-6 relative z-10 flex-col flex gap-6">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-2">
           <div className="w-2 h-2 rounded-full bg-red-1 shadow-[0_0_8px_rgba(176,30,30,0.8)]"></div>
           <h2 className="font-serif text-xl font-bold">Kinerja Surveyor & QC</h2>
           <span className="ml-auto text-[9px] font-bold px-3 py-1 rounded-full bg-sapph-1/20 border border-sapph-2/30 text-sapph-3 tracking-widest uppercase">
              LIVE DATA
           </span>
        </div>

        {/* The Surveyor Panel specifically requested by User */}
        <SurveyorPanel />
        
      </div>
    </main>
  );
}

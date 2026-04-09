'use client';

import { useRef } from 'react';
import { Download } from 'lucide-react';

interface ChartWrapperProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
}

export default function ChartWrapper({ title, children, subtitle }: ChartWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  async function downloadPNG() {
    if (!wrapperRef.current) return;

    // Dynamic import supaya jsPDF/html2canvas tidak masuk ke bundle utama
    const html2canvas = (await import('html2canvas')).default;
    const canvas = await html2canvas(wrapperRef.current, {
      backgroundColor: '#111111',
      scale: 2, // 2x untuk kualitas lebih baik
      useCORS: true,
    });

    const link = document.createElement('a');
    link.download = `${title.replace(/\s+/g, '_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }

  return (
    <div
      ref={wrapperRef}
      className="
        bg-[#111111] border border-[#1f1f1f] rounded-xl
        p-5 flex flex-col gap-4
        group
      "
    >
      {/* Header chart */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-white text-sm font-medium leading-tight">{title}</h3>
          {subtitle && (
            <p className="text-[#4b5563] text-xs mt-0.5">{subtitle}</p>
          )}
        </div>
        <button
          onClick={downloadPNG}
          title="Download PNG"
          className="
            w-7 h-7 flex items-center justify-center rounded-lg
            border border-[#2a2a2a] bg-[#0a0a0a]
            text-[#4b5563] hover:text-white hover:border-[#3a3a3a]
            transition-colors
            opacity-0 group-hover:opacity-100
          "
        >
          <Download size={12} />
        </button>
      </div>

      {/* Chart content */}
      <div className="min-h-[220px] flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

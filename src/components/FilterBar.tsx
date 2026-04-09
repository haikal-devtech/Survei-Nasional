'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FilterBarProps {
  onFilter: (startDate: string, endDate: string) => void;
  onReset: () => void;
  hasActiveFilter: boolean;
}

export default function FilterBar({ onFilter, onReset, hasActiveFilter }: FilterBarProps) {
  const [start, setStart] = useState('');
  const [end, setEnd]     = useState('');

  function handleApply() {
    if (start || end) onFilter(start, end);
  }

  function handleReset() {
    setStart('');
    setEnd('');
    onReset();
  }

  const inputClass = `
    bg-[#111111] border border-[#2a2a2a] rounded-lg
    px-3 py-1.5 text-white text-xs
    focus:outline-none focus:border-[#3b82f6]
    transition-colors
    [color-scheme:dark]
  `;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-1.5 text-[#6b7280]">
        <Filter size={13} />
        <span className="text-xs">Filter tanggal:</span>
      </div>

      <input
        type="date"
        value={start}
        onChange={e => setStart(e.target.value)}
        className={inputClass}
      />
      <span className="text-[#4b5563] text-xs">–</span>
      <input
        type="date"
        value={end}
        onChange={e => setEnd(e.target.value)}
        className={inputClass}
      />

      <button
        onClick={handleApply}
        disabled={!start && !end}
        className="
          px-3 py-1.5 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb]
          text-white text-xs font-medium transition-colors
          disabled:opacity-40 disabled:cursor-not-allowed
        "
      >
        Terapkan
      </button>

      {hasActiveFilter && (
        <button
          onClick={handleReset}
          className="
            flex items-center gap-1 px-3 py-1.5 rounded-lg
            border border-[#2a2a2a] text-[#6b7280] hover:text-white
            text-xs transition-colors
          "
        >
          <X size={11} />
          Reset
        </button>
      )}
    </div>
  );
}

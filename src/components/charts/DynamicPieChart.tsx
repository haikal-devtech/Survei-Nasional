'use client';

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface DynamicPieChartProps {
  data: { name: string; value: number }[];
  totalRows: number;
}

const COLORS = [
  '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b',
  '#ef4444', '#06b6d4', '#ec4899', '#84cc16',
  '#f97316', '#6366f1', '#14b8a6', '#a855f7',
];

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const item = payload[0];
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs shadow-xl">
      <p className="text-white font-medium mb-1">{item.name}</p>
      <p className="text-[#9ca3af]">
        <span className="text-white">{item.value}</span> responden &nbsp;
        <span className="text-[#6b7280]">({item.payload.percent}%)</span>
      </p>
    </div>
  );
}

function CustomLegend({ payload }: any) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1.5 justify-center mt-2">
      {payload?.map((entry: any, idx: number) => (
        <div key={idx} className="flex items-center gap-1.5 text-xs">
          <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: entry.color }} />
          <span className="text-[#9ca3af] truncate max-w-[120px]">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function DynamicPieChart({ data, totalRows }: DynamicPieChartProps) {
  if (!data.length) {
    return <p className="text-[#4b5563] text-xs">Tidak ada data.</p>;
  }

  // Tambah persentase ke tiap item untuk tooltip
  const enriched = data.map(d => ({
    ...d,
    percent: totalRows > 0 ? ((d.value / totalRows) * 100).toFixed(1) : '0',
  }));

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={enriched}
            cx="50%"
            cy="45%"
            innerRadius={55}
            outerRadius={90}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {enriched.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

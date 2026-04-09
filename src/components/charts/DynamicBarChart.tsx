'use client';

import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts';

interface DynamicBarChartProps {
  data: { name: string; value: number }[];
  totalRows: number;
}

const COLORS = ['#3b82f6', '#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ddd6fe', '#e0e7ff', '#eff6ff', '#bfdbfe', '#93c5fd'];

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs shadow-xl">
      <p className="text-white font-medium mb-1">Nilai: {label}</p>
      <p className="text-[#9ca3af]">
        <span className="text-white">{payload[0].value}</span> responden
      </p>
    </div>
  );
}

export default function DynamicBarChart({ data, totalRows }: DynamicBarChartProps) {
  if (!data.length) {
    return <p className="text-[#4b5563] text-xs">Tidak ada data.</p>;
  }

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <XAxis
            dataKey="name"
            tick={{ fill: '#6b7280', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#6b7280', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.04)' }} />
          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Legend: persentase per nilai */}
      <div className="flex flex-wrap gap-2 mt-3">
        {data.map((item, idx) => (
          <div key={item.name} className="flex items-center gap-1.5 text-xs">
            <span
              className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
              style={{ backgroundColor: COLORS[idx % COLORS.length] }}
            />
            <span className="text-[#9ca3af]">{item.name}</span>
            <span className="text-[#6b7280]">
              ({totalRows > 0 ? ((item.value / totalRows) * 100).toFixed(1) : 0}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

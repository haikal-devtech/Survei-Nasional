'use client';

import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid, Area, AreaChart,
} from 'recharts';
import { formatDate } from '@/lib/detectColumnType';

interface DynamicLineChartProps {
  data: { date: string; count: number }[];
}

function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-xs shadow-xl">
      <p className="text-[#9ca3af] mb-1">{label}</p>
      <p className="text-white font-medium">
        {payload[0].value} responden
      </p>
    </div>
  );
}

export default function DynamicLineChart({ data }: DynamicLineChartProps) {
  if (!data.length) {
    return <p className="text-[#4b5563] text-xs">Belum ada data time series.</p>;
  }

  // Format label tanggal untuk x-axis supaya tidak penuh
  const formatted = data.map(d => ({
    ...d,
    label: formatDate(d.date),
  }));

  // Kalau data > 14 hari, tampilkan 1 dari setiap 3 label saja
  const tickInterval = data.length > 14 ? Math.ceil(data.length / 10) - 1 : 0;

  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={formatted} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.15} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#1f1f1f" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fill: '#6b7280', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          interval={tickInterval}
        />
        <YAxis
          tick={{ fill: '#6b7280', fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#2a2a2a' }} />
        <Area
          type="monotone"
          dataKey="count"
          stroke="#3b82f6"
          strokeWidth={1.5}
          fill="url(#lineGradient)"
          dot={false}
          activeDot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

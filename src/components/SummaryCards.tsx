'use client';

import { TrendingUp, TrendingDown, Users, Calendar, Clock } from 'lucide-react';

interface SummaryCardsProps {
  total: number;
  today: number;
  yesterday: number;
  trend: number | null;
}

function Card({
  label,
  value,
  icon: Icon,
  sub,
  trendUp,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  sub?: React.ReactNode;
  trendUp?: boolean | null;
}) {
  return (
    <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[#6b7280] text-xs font-medium uppercase tracking-wider">{label}</span>
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1a1a1a]">
          <Icon size={15} className="text-[#6b7280]" />
        </div>
      </div>
      <p className="text-white text-2xl font-semibold tracking-tight">{value}</p>
      {sub && <div className="mt-1.5">{sub}</div>}
    </div>
  );
}

export default function SummaryCards({ total, today, yesterday, trend }: SummaryCardsProps) {
  const trendPositive = trend !== null ? trend >= 0 : null;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <Card
        label="Total Responden"
        value={total.toLocaleString('id-ID')}
        icon={Users}
      />
      <Card
        label="Hari Ini"
        value={today.toLocaleString('id-ID')}
        icon={Calendar}
        sub={
          trend !== null ? (
            <span className={`inline-flex items-center gap-1 text-xs font-medium ${trendPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {trendPositive
                ? <TrendingUp size={12} />
                : <TrendingDown size={12} />}
              {trendPositive ? '+' : ''}{trend}% vs kemarin
            </span>
          ) : (
            <span className="text-xs text-[#4b5563]">Belum ada data kemarin</span>
          )
        }
      />
      <Card
        label="Kemarin"
        value={yesterday.toLocaleString('id-ID')}
        icon={Clock}
      />
      <Card
        label="Rata-rata / Hari"
        value={total > 0 && yesterday > 0
          ? Math.round((today + yesterday) / 2).toLocaleString('id-ID')
          : today.toLocaleString('id-ID')
        }
        icon={TrendingUp}
        sub={<span className="text-xs text-[#4b5563]">2 hari terakhir</span>}
      />
    </div>
  );
}

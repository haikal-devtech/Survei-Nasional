"use client";

import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function SurveyorPanel() {
  const [surveyors, setSurveyors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch('/api/survey?action=surveyor_performance');
        if(!res.ok) throw new Error("Gagal mengambil data surveyor");
        const json = await res.json();
        if(json.error) throw new Error(json.error);
        if(json.data) {
          setSurveyors(json.data.map((d: any, i: number) => ({ ...d, id: i })));
        }
      } catch (e: any) {
        setError(e.message || "Terjadi kesalahan");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Sort by total descending for Chart
  const chartData = [...surveyors].sort((a, b) => b.total - a.total).slice(0, 5);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-[#111111] rounded-2xl h-[300px] animate-pulse"></div>
        <div className="bg-[#111111] rounded-2xl h-[300px] animate-pulse"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-950/40 border border-red-900 rounded-xl px-4 py-3 text-red-400 text-sm">
        Error Surveyor Panel: {error}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {/* Table Card */}
      <div className="bg-ink-3 bg-gradient-to-br from-ink-3 to-ink-2 border border-divider rounded-2xl p-5 relative overflow-hidden shadow-lg shadow-black/40">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-gold-2"></div>
          <h3 className="font-serif font-bold text-sm tracking-wide">Daftar Rekap Surveyor</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs whitespace-nowrap border-collapse">
            <thead>
              <tr className="text-muted border-b border-white/5">
                <th className="py-3 px-2 font-semibold uppercase tracking-widest text-[9px]">Nama Surveyor</th>
                <th className="py-3 px-2 font-semibold uppercase tracking-widest text-[9px] text-center">Total Isian</th>
                <th className="py-3 px-2 font-semibold uppercase tracking-widest text-[9px]">Aktivitas Terakhir</th>
                <th className="py-3 px-2 font-semibold uppercase tracking-widest text-[9px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {surveyors.map((s) => (
                <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="py-3 px-2 font-medium text-txt">{s.nama}</td>
                  <td className="py-3 px-2 font-bold text-gold-3 text-center text-sm">{s.total}</td>
                  <td className="py-3 px-2 text-muted">{s.lastActive}</td>
                  <td className="py-3 px-2">
                    <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${
                      s.status === 'Active' ? 'bg-jade-1/20 text-jade-3 border border-jade-2/30' : 'bg-dim/50 text-muted border border-white/10'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-ink-3 bg-gradient-to-br from-ink-3 to-ink-2 border border-divider rounded-2xl p-5 relative overflow-hidden shadow-lg shadow-black/40">
        <div className="absolute -top-1/2 -right-1/4 w-[200px] h-[200px] rounded-full bg-red-1/10 blur-[80px] pointer-events-none"></div>
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-sapph-3"></div>
          <h3 className="font-serif font-bold text-sm tracking-wide">Top Performa Surveyor</h3>
        </div>
        
        <div className="h-[250px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ top: 0, right: 30, left: 0, bottom: 0 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="nama" type="category" axisLine={false} tickLine={false} tick={{ fill: '#7080A0', fontSize: 11 }} width={90} />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.05)' }} 
                contentStyle={{ backgroundColor: '#0C1120', borderColor: 'rgba(140,21,21,0.3)', borderRadius: '12px' }}
                itemStyle={{ color: '#F5C84A', fontWeight: 'bold' }}
              />
              <Bar dataKey="total" radius={[0, 4, 4, 0]} barSize={20}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={'url(#redGradient)'} />
                ))}
              </Bar>
              <defs>
                <linearGradient id="redGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8C1515" />
                  <stop offset="100%" stopColor="#F04040" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

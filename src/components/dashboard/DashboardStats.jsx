import React from 'react';
import { Target, MessageCircle, Calendar } from 'lucide-react';

export const DashboardStats = () => {
  const stats = [
    { label: 'Match Strength', value: '98%', icon: Target, color: 'text-teal-600', bg: 'bg-teal-50' },
    { label: 'Unread Messages', value: '2', icon: MessageCircle, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Next Session', value: 'Oct 24', icon: Calendar, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
          <div className={`${s.bg} ${s.color} p-3 rounded-xl`}>
            <s.icon size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
            <p className="text-2xl font-black text-slate-900">{s.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
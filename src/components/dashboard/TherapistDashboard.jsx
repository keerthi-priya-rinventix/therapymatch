// File: src/components/dashboard/TherapistDashboard.jsx
import React from 'react';
import { MOCK_PROVIDER_DATA } from '../../data/therapist_mock';
import { Users, Star, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';

export const TherapistDashboard = ({ name }) => {
  const { stats, matchRequests, activePatients } = MOCK_PROVIDER_DATA;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-slate-900">Welcome back, {name}</h1>
        <p className="text-slate-500">Your practice is currently at 85% capacity.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active Caseload', val: stats.activePatients, icon: Users, color: 'text-blue-600' },
          { label: 'New Matches', val: stats.pendingRequests, icon: Star, color: 'text-teal-600' },
          { label: 'Match Rate', val: stats.matchRate, icon: CheckCircle, color: 'text-indigo-600' },
          { label: 'Patient Growth', val: stats.avgPatientMood, icon: ArrowUpRight, color: 'text-emerald-600' },
        ].map((s) => (
          <div key={s.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <s.icon size={20} className={`${s.color} mb-3`} />
            <div className="text-2xl font-bold">{s.val}</div>
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Match Requests Section */}
        <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
            <h3 className="font-bold text-slate-800">New Match Requests</h3>
            <span className="px-2 py-1 bg-teal-100 text-teal-700 text-[10px] font-black rounded uppercase">Action Required</span>
          </div>
          <div className="divide-y divide-slate-100">
            {matchRequests.map((req) => (
              <div key={req.id} className="p-6 hover:bg-slate-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-bold text-lg">{req.name}</div>
                  <div className="bg-teal-600 text-white px-2 py-0.5 rounded text-xs font-bold">{req.matchScore}% Match</div>
                </div>
                <div className="flex gap-2 mb-3">
                  {req.topConcerns.map(c => <span key={c} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full border border-slate-200">{c}</span>)}
                </div>
                <p className="text-sm text-slate-500 italic mb-4">"{req.compatibilityNote}"</p>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-teal-600 text-white rounded-lg text-sm font-bold shadow-md shadow-teal-600/10">Accept & Message</button>
                  <button className="flex-1 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-bold">Review Fit</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule/Active Section */}
        <section className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 font-bold text-slate-800">Today's Schedule</div>
          <div className="p-6">
             {/* Mocking a simple list of today's appointments */}
             <div className="space-y-4">
                {activePatients.map(p => (
                  <div key={p.id} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold">{p.name[0]}</div>
                      <div>
                        <div className="font-bold text-sm">{p.name}</div>
                        <div className="text-xs text-slate-500">{p.frequency} • {p.status}</div>
                      </div>
                    </div>
                    <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                      <Clock size={18} />
                    </button>
                  </div>
                ))}
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};
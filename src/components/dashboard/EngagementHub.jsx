import React from 'react';
import { FileText, Video, ShieldCheck, HelpCircle } from 'lucide-react';

export const EngagementHub = () => {
  const tools = [
    { name: 'Prep Guide', icon: FileText, desc: 'First session tips' },
    { name: 'Virtual Room', icon: Video, desc: 'Join your session' },
    { name: 'Privacy Center', icon: ShieldCheck, desc: 'Manage your data' },
    { name: 'Support', icon: HelpCircle, desc: 'Talk to a coordinator' },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 text-white h-full">
      <h3 className="font-bold mb-4">Care Tools</h3>
      <div className="space-y-4">
        {tools.map((t) => (
          <button key={t.name} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-colors text-left group">
            <div className="text-teal-400 group-hover:text-white transition-colors">
              <t.icon size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">{t.name}</p>
              <p className="text-[10px] text-slate-400">{t.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
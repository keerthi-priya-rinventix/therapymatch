import React from 'react';
import { Button, Card } from '../UI';
import { Star, ArrowRight } from 'lucide-react';

export const ActiveMatches = ({ matches }) => (
  <section className="space-y-4">
    <div className="flex justify-between items-center">
      <h3 className="font-bold text-slate-800">My Active Matches</h3>
      <button className="text-xs font-bold text-teal-600 hover:underline">View All</button>
    </div>
    <div className="grid gap-3">
      {matches.map((m) => (
        <Card key={m.id} className="p-4 hover:border-teal-200 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">
                {m.name[4]}
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">{m.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-[10px] bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full font-bold">
                     {m.match}% Match
                   </span>
                   <span className="text-xs text-slate-400 italic">{m.status}</span>
                </div>
              </div>
            </div>
            <Button variant="secondary" className="py-2 px-4 text-xs">
              Continue <ArrowRight size={14} className="ml-1" />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  </section>
);
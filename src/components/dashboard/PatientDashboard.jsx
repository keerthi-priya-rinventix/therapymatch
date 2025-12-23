import React from 'react';
import { DashboardStats } from './DashboardStats';
import { ActiveMatches } from './ActiveMatches';
import { EngagementHub } from './EngagementHub';
import { Button } from '../UI';
import { ClipboardList } from 'lucide-react';

export const PatientDashboard = ({ userName = "Sarah", onStartNewSearch }) => {
  const mockMatches = [
    { id: 1, name: "Dr. Aris Thorne", match: 98, status: "Awaiting your reply" },
    { id: 2, name: "Dr. Sarah Chen", match: 94, status: "Consultation booked" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 font-medium">Welcome back, {userName}. Here is your care progress.</p>
        </div>
        <Button onClick={onStartNewSearch} variant="secondary" className="text-xs">
          <ClipboardList size={16} className="mr-2" /> New Assessment
        </Button>
      </div>

      {/* Main Grid */}
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActiveMatches matches={mockMatches} />
          
          {/* Banner */}
          <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-xl shadow-teal-500/20 relative overflow-hidden">
             <div className="relative z-10 max-w-sm">
               <h2 className="text-2xl font-bold mb-2">Unsure who to choose?</h2>
               <p className="text-teal-100 text-sm mb-4">Our clinical coordinators can help you review your matches in a free 15-minute call.</p>
               <Button className="bg-white text-teal-700 hover:bg-teal-50">Book Clinical Review</Button>
             </div>
             <div className="absolute -right-8 -bottom-8 opacity-20 transform rotate-12">
               <ClipboardList size={200} />
             </div>
          </div>
        </div>

        <div>
          <EngagementHub />
        </div>
      </div>
    </div>
  );
};
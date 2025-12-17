// File: src/components/dashboard/EngagementHub.jsx
import React, { useState } from 'react';
import { Clock, MessageSquare, Bell, Calendar, Send, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../UI/Card';
import { Button } from '../UI/Button';

export const EngagementHub = () => {
  const [activeTab, setActiveTab] = useState('schedule'); // 'schedule' | 'message'

  return (
    <div className="space-y-6 mt-8">
      <Card className="border-blue-100 overflow-hidden">
        <CardHeader className="bg-slate-50 border-b flex flex-row items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">SC</div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Dr. Sarah Chen</h3>
              <p className="text-[10px] text-teal-600 font-bold uppercase tracking-tighter">Matched 94%</p>
            </div>
          </div>
          <div className="flex bg-slate-200 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`px-3 py-1 text-xs rounded-md transition-all ${activeTab === 'schedule' ? 'bg-white shadow-sm font-bold' : 'text-slate-500'}`}
            >
              Scheduling
            </button>
            <button 
              onClick={() => setActiveTab('message')}
              className={`px-3 py-1 text-xs rounded-md transition-all ${activeTab === 'message' ? 'bg-white shadow-sm font-bold' : 'text-slate-500'}`}
            >
              Message
            </button>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {activeTab === 'schedule' ? (
            <div className="p-6 animate-in fade-in duration-300">
              {/* 1. DIRECT SCHEDULING */}
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-slate-400" />
                <h4 className="text-sm font-bold text-slate-700">Available Slots</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {['Wed 2:00PM', 'Wed 4:30PM', 'Thu 10:00AM', 'Fri 3:00PM'].map((time) => (
                  <button key={time} className="py-2 text-xs border border-slate-200 rounded-md hover:border-teal-500 hover:bg-teal-50 transition-all font-medium text-slate-600">
                    {time}
                  </button>
                ))}
              </div>
              {/* 3. REMINDER SYSTEM */}
              <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg border border-amber-100">
                <Bell size={18} className="text-amber-600" />
                <p className="text-xs text-amber-800">
                  <strong>Reminder set:</strong> We'll notify you via SMS & Email 24 hours before your session.
                </p>
              </div>
              <Button className="w-full mt-6 bg-teal-600 hover:bg-teal-700">Confirm Consultation</Button>
            </div>
          ) : (
            <div className="p-6 animate-in fade-in duration-300">
              {/* 2. SECURE MESSAGING */}
              <div className="bg-slate-50 rounded-lg p-4 h-32 mb-4 overflow-y-auto border border-slate-100">
                <div className="bg-white p-2 rounded-lg text-xs text-slate-600 shadow-sm max-w-[80%] mb-2">
                  Hi Alex! I saw our match score. Do you have any specific questions about my CBT approach before we meet?
                </div>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input 
                    type="text" 
                    placeholder="Ask about fees, approach, or availability..." 
                    className="w-full p-2 pr-10 border rounded-lg text-sm focus:ring-1 focus:ring-teal-500 outline-none"
                  />
                  <ShieldCheck size={14} className="absolute right-3 top-3 text-teal-500" title="HIPAA Secure" />
                </div>
                <Button className="bg-teal-600 px-3"><Send size={16} /></Button>
              </div>
              <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                <ShieldCheck size={12} /> Messages are end-to-end encrypted and HIPAA compliant.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
// File: src/components/layout/HeaderNav.jsx
import React from 'react';
import { 
  LayoutDashboard, 
  Search, 
  MessageSquare, 
  UserCircle, 
  LogOut, 
  Settings,
  Shield
} from 'lucide-react';

export const HeaderNav = ({ userRole, currentAppState, onNavigate, onLogout }) => {
  // Define navigation items based on the user's role
  const navItems = userRole === 'therapist' 
    ? [
        { label: 'Practice Overview', icon: LayoutDashboard, target: 'THERAPIST_DASHBOARD' },
        { label: 'Patient Requests', icon: MessageSquare, target: 'THERAPIST_DASHBOARD' }, // Same for demo
        { label: 'My Clinical Profile', icon: Shield, target: 'THERAPIST_ONBOARDING' }
      ]
    : [
        { label: 'My Matches', icon: LayoutDashboard, target: 'DASHBOARD' },
        { label: 'Find Care', icon: Search, target: 'WIZARD' },
        { label: 'Saved', icon: UserCircle, target: 'SAVED_MATCHES' }
      ];

  return (
    <nav className="flex items-center gap-1 md:gap-4">
      {/* 1. Main Role-Based Links */}
      <div className="hidden md:flex items-center border-r border-slate-200 pr-4 mr-2 gap-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => onNavigate(item.target)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all
              ${currentAppState === item.target 
                ? 'bg-teal-50 text-teal-700' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      {/* 2. User Actions & Role Badge */}
      <div className="flex items-center gap-3">
        <div className="hidden lg:flex flex-col items-end mr-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-teal-600">
            {userRole === 'therapist' ? 'Provider Portal' : 'Patient Account'}
          </span>
          <span className="text-xs font-medium text-slate-400">Verified Access</span>
        </div>
        
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-full">
          <button 
            className="p-2 text-slate-500 hover:text-teal-600 hover:bg-white rounded-full transition-all"
            title="Account Settings"
          >
            <Settings size={20} />
          </button>
          <button 
            onClick={onLogout}
            className="p-2 text-slate-500 hover:text-rose-600 hover:bg-white rounded-full transition-all"
            title="Log Out"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
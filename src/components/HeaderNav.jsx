import React from 'react';
import { LayoutDashboard, Search, List, LogOut } from 'lucide-react';
import { APP_STATE } from '../constants';

const navItems = [
    { label: 'Dashboard', state: APP_STATE.DASHBOARD, icon: LayoutDashboard },
    { label: 'Start New Search', state: APP_STATE.WIZARD, icon: Search },
    { label: 'My Saved Matches', state: APP_STATE.SAVED_MATCHES, icon: List },
];

export const HeaderNav = ({ currentAppState, onNavigate, onLogout }) => {
    
    const displayItems = navItems.filter(item => item.state !== APP_STATE.WIZARD);
    
    return (
        <div className="flex items-center space-x-6">
            <nav className="hidden sm:flex space-x-6">
                {displayItems.map(item => (
                    <button
                        key={item.label}
                        onClick={() => onNavigate(item.state)}
                        className={`
                            flex items-center gap-1 text-sm font-medium transition-all
                            ${currentAppState === item.state 
                                ? 'text-teal-600 border-b-2 border-teal-600 pb-1' 
                                : 'text-slate-500 hover:text-teal-600'
                            }
                        `}
                    >
                        <item.icon size={16} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <button
                onClick={onLogout}
                className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-red-500 transition-all"
            >
                <LogOut size={16} /> Log Out
            </button>
        </div>
    );
};

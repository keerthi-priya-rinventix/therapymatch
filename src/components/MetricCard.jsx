// File: src/components/Dashboard/MetricCard.jsx

import React from 'react';
// Added new icons: Star, FileText
import { Users, Heart, CalendarCheck, Search, Star, FileText } from 'lucide-react';

const iconMap = {
    users: Users,
    heart: Heart,
    calendar: CalendarCheck,
    search: Search,
    star: Star,      // NEW
    'file-text': FileText // NEW
};

export const MetricCard = ({ title, value, iconType, color = 'teal' }) => {
    const IconComponent = iconMap[iconType] || Users;
    
    // Determine color classes for better visual appeal
    const bgColor = color === 'teal' ? 'bg-teal-50 text-teal-600' : 
                    color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    color === 'orange' ? 'bg-orange-50 text-orange-600' :
                    color === 'pink' ? 'bg-pink-50 text-pink-600' : // NEW
                    color === 'green' ? 'bg-green-50 text-green-600' : // NEW
                    'bg-slate-50 text-slate-600';

    return (
        <div className="flex-1 bg-white p-6 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${bgColor}`}>
                <IconComponent size={20} />
            </div>
            <p className="text-sm font-medium text-slate-500">{title}</p>
            <h3 className="text-3xl font-bold text-slate-900 mt-1">{value}</h3>
        </div>
    );
};
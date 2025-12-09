// File: src/components/Dashboard/UsageMetricsChart.jsx

import React from 'react';
import { USAGE_DATA } from '../data';
import { SectionTitle } from './UI';


// Note: This is a simplified chart visualization. For a production app, 
// you would replace the dummy SVG/CSS with a library like Recharts or Chart.js.

const dataPoints = USAGE_DATA.length;
const maxConsults = Math.max(...USAGE_DATA.map(d => d.consults));
const maxSignups = Math.max(...USAGE_DATA.map(d => d.signups));

// Normalize data for SVG height calculation
const normalize = (value, max) => (value / max) * 100;

export const UsageMetricsChart = () => {
    
    // --- Determine max Y-axis for scaling ---
    // Use the max signups value for the Y-axis scale base
    const Y_MAX = maxSignups;

    // --- Generate SVG points for the lines ---
    const generatePoints = (dataKey) => {
        return USAGE_DATA.map((d, i) => {
            const x = (i / (dataPoints - 1)) * 100;
            const y = 100 - normalize(d[dataKey], Y_MAX); // Invert Y-axis for SVG (0 is top)
            return `${x},${y}`;
        }).join(' ');
    };

    const signupPoints = generatePoints('signups');
    const consultPoints = generatePoints('consults');
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <SectionTitle
                title="Platform Growth & Activity" 
                subtitle="New users and key engagement metrics over time." 
            />
            
            <div className="relative w-full h-64 mt-8">
                {/* SVG Chart Area */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                    {/* Grid Lines (Placeholder for better visualization) */}
                    <line x1="0" y1="100" x2="100" y2="100" stroke="#E2E8F0" strokeWidth="0.5" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#E2E8F0" strokeWidth="0.5" strokeDasharray="1 1" />
                    <line x1="0" y1="0" x2="100" y2="0" stroke="#E2E8F0" strokeWidth="0.5" />

                    {/* Signups Line (Teal) */}
                    <polyline 
                        points={signupPoints} 
                        fill="none" 
                        stroke="#0D9488" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />

                    {/* Consults Line (Orange) */}
                    <polyline 
                        points={consultPoints} 
                        fill="none" 
                        stroke="#F97316" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>

                {/* X-Axis Labels (Months) */}
                <div className="flex justify-between text-xs text-slate-500 mt-2">
                    {USAGE_DATA.map(d => <span key={d.month} className="w-1/6 text-center">{d.month}</span>)}
                </div>
                
                {/* Y-Axis Legend (Manual positioning) */}
                <div className="absolute top-0 left-[-40px] text-xs text-slate-500 h-full flex flex-col justify-between py-1">
                    <span>{Y_MAX}</span>
                    <span>{Math.round(Y_MAX / 2)}</span>
                    <span>0</span>
                </div>

            </div>

            {/* Legend */}
            <div className="flex justify-center gap-8 mt-6 text-sm">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-teal-600 rounded-full"></span>
                    <span className="text-slate-700 font-medium">New Signups</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                    <span className="text-slate-700 font-medium">Consults Requested</span>
                </div>
            </div>
        </div>
    );
};
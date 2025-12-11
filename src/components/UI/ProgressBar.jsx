// src/components/UI/ProgressBar.jsx

import React from 'react';

export const ProgressBar = ({ current, total, className = '' }) => {
    const width = (current / total) * 100;

    return (
        <div className={`space-y-2 ${className}`}>
            <p className="text-sm font-semibold text-teal-600">
                Step {current} of {total}
            </p>
            <div className="w-full bg-slate-200 rounded-full h-2.5">
                <div 
                    className="bg-teal-600 h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${width}%` }}
                    role="progressbar"
                    aria-valuenow={current}
                    aria-valuemin="1"
                    aria-valuemax={total}
                ></div>
            </div>
        </div>
    );
};
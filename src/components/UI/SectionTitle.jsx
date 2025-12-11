// src/components/UI/SectionTitle.jsx

import React from 'react';

export const SectionTitle = ({ title, subtitle, className = '' }) => (
    <div className={`pb-6 border-b border-slate-200 ${className}`}>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        {subtitle && <p className="text-base text-slate-500 mt-1">{subtitle}</p>}
    </div>
);
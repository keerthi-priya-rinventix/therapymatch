// File: src/components/UI/SectionTitle.jsx
import React from 'react';

export const SectionTitle = ({ title, subtitle, centered = false }) => (
  <div className={`mb-8 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-slate-500 text-lg font-medium leading-relaxed max-w-xl mx-auto">
        {subtitle}
      </p>
    )}
    <div className={`mt-4 h-1 w-12 bg-teal-500 rounded-full ${centered ? 'mx-auto' : ''}`} />
  </div>
);
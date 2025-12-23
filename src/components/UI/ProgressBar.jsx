// File: src/components/UI/ProgressBar.jsx
import React from 'react';

export const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-[60]">
      <div 
        className="h-full bg-teal-500 transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div className="absolute top-4 left-6 px-3 py-1 bg-white border border-slate-200 rounded-full shadow-sm">
        <span className="text-[10px] font-black uppercase text-slate-400 tracking-tighter">
          Step {current} of {total}
        </span>
      </div>
    </div>
  );
};
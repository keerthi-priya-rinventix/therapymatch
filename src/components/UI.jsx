import React from 'react';
import { Check } from 'lucide-react';

// Card: Used for selectable options (Radio/Checkbox style visual)
export const SelectionCard = ({ selected, onClick, children, className = "", disabled = false }) => (
  <div 
    onClick={!disabled ? onClick : undefined}
    className={`
      relative p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      ${selected 
        ? 'border-teal-500 bg-teal-50 shadow-md ring-1 ring-teal-500/20' 
        : 'border-slate-200 bg-white hover:border-teal-200 hover:bg-slate-50'
      } ${className}
    `}
  >
    <div className="flex-1">{children}</div>
    {selected && (
      <div className="bg-teal-500 rounded-full p-1 ml-3 animate-in zoom-in duration-200">
        <Check size={14} className="text-white" />
      </div>
    )}
  </div>
);

// Button: Primary and Secondary actions
export const Button = ({ variant = 'primary', children, onClick, className = "", disabled, type = 'button' }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const styles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 disabled:bg-teal-300 shadow-sm hover:shadow-md",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 disabled:opacity-50",
    text: "text-slate-500 hover:text-teal-600 px-4"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled} 
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

// Section Header: Consistent typography
export const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8 text-center">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{title}</h2>
    {subtitle && <p className="text-slate-500 text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

// Likert Scale Component
export const LikertScale = ({ label, value, onChange }) => {
  const options = [
    { val: 1, label: 'Not Important' },
    { val: 2, label: 'Somewhat' },
    { val: 3, label: 'Important' },
    { val: 4, label: 'Very Important' },
  ];

  return (
    <div className="py-4 border-b border-slate-100 last:border-0">
      <p className="font-medium text-slate-800 mb-3">{label}</p>
      <div className="grid grid-cols-4 gap-2">
        {options.map((opt) => (
          <button
            key={opt.val}
            onClick={() => onChange(opt.val)}
            className={`
              py-2 px-1 text-sm rounded-md transition-colors border
              ${value === opt.val 
                ? 'bg-teal-600 text-white border-teal-600 font-medium shadow-sm' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-teal-300'
              }
            `}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

// Progress Bar
export const ProgressBar = ({ current, total }) => {
  const percentage = Math.min((current / total) * 100, 100);
  return (
    <div className="w-full bg-slate-100 h-2 fixed top-0 left-0 z-50">
      <div 
        className="bg-teal-500 h-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
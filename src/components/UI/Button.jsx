// File: src/components/UI/Button.jsx
import React from 'react';

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'link'
  className = '', 
  disabled = false,
  type = 'button'
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20",
    secondary: "bg-white border-2 border-slate-200 text-slate-700 hover:border-teal-600 hover:text-teal-600",
    ghost: "bg-slate-100 text-slate-600 hover:bg-slate-200",
    link: "bg-transparent text-teal-600 hover:underline p-0 h-auto"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
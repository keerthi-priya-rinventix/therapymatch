// File: src/components/UI/Card.jsx
import React from 'react';

export const Card = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-2xl border border-slate-200 shadow-sm transition-all ${className} ${onClick ? 'cursor-pointer hover:border-teal-400 hover:shadow-md' : ''}`}
  >
    {children}
  </div>
);
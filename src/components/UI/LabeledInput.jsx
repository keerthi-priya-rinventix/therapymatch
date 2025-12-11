// src/components/UI/LabeledInput.jsx

import React from 'react';

export const LabeledInput = ({ label, type, value, onChange, placeholder, options }) => {
    const commonClasses = "w-full p-2 border border-slate-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150 text-slate-900";

    const inputElement = () => {
        switch (type) {
            case 'textarea':
                return <textarea className={commonClasses} rows="4" value={value} onChange={onChange} placeholder={placeholder} />;
            case 'select':
                return (
                    <select className={commonClasses} value={value} onChange={onChange}>
                        <option value="" disabled>Select an option</option>
                        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                );
            case 'number':
                return <input type="number" className={commonClasses} value={value} onChange={onChange} placeholder={placeholder} min="0" />;
            default:
                return <input type={type} className={commonClasses} value={value} onChange={onChange} placeholder={placeholder} />;
        }
    };

    return (
        <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700 block">{label}</label>
            {inputElement()}
        </div>
    );
};
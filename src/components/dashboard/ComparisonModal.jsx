// src/components/dashboard/ComparisonModal.jsx
import React from 'react';
import { X, Check, HelpCircle } from 'lucide-react';

export const ComparisonModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b flex justify-between items-center bg-slate-50">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Compare Your Top Matches</h2>
            <p className="text-slate-500 text-sm">Evaluate fit, logistics, and style side-by-side.</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto p-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="py-4 px-4 text-slate-400 font-medium italic">Feature</th>
                <th className="py-4 px-4 font-bold text-teal-700">Dr. Sarah Chen</th>
                <th className="py-4 px-4 font-bold text-teal-700">Michael Ross, LCSW</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-50">
                <td className="py-4 px-4 font-semibold">Match Score</td>
                <td className="py-4 px-4 text-teal-600 font-bold text-lg">94%</td>
                <td className="py-4 px-4 text-teal-600 font-bold text-lg">89%</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-4 px-4 font-semibold">Primary Style</td>
                <td className="py-4 px-4 text-slate-600 italic">Direct & Structured</td>
                <td className="py-4 px-4 text-slate-600 italic">Warm & Reflective</td>
              </tr>
              <tr className="border-b border-slate-50">
                <td className="py-4 px-4 font-semibold">Session Fee</td>
                <td className="py-4 px-4 text-slate-600">$150 (In-Network)</td>
                <td className="py-4 px-4 text-slate-600">$130 (Out-of-Network)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Guided Questions Section */}
        <div className="m-6 p-4 bg-teal-50 rounded-xl border border-teal-100">
          <h4 className="flex items-center gap-2 font-bold text-teal-800 mb-2">
            <HelpCircle size={18} /> Guided Questions for Selection
          </h4>
          <ul className="text-sm text-teal-700 space-y-2">
            <li className="flex gap-2"><Check size={14} className="mt-1 shrink-0" /> Do I feel more comfortable with a direct approach or someone who lets me lead?</li>
            <li className="flex gap-2"><Check size={14} className="mt-1 shrink-0" /> Is the evening availability of Dr. Chen worth the slightly higher co-pay?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
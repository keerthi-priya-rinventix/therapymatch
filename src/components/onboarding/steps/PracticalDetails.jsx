// src/components/onboarding/steps/Step3PracticalDetails.jsx

import React from 'react';
import { SectionTitle } from '../../UI/SectionTitle';
import { LabeledInput } from '../../UI/LabeledInput';

export const PracticalDetails = ({ formData, setFormData }) => (
    <div className="space-y-6">
        <SectionTitle 
            title="Step 3: Practical & Logistics"
            subtitle="Set your operational and financial parameters for clients."
        />
        <LabeledInput 
            label="Fee Per Session (USD)" 
            type="number" 
            value={formData.fee}
            onChange={(e) => setFormData({ fee: parseFloat(e.target.value) || 0 })}
            placeholder="e.g., 150"
        />
        <LabeledInput 
            label="Accepted Insurance Networks" 
            type="text" 
            value={formData.insurance}
            onChange={(e) => setFormData({ insurance: e.target.value })}
            placeholder="e.g., Aetna, Cigna, Self-Pay"
        />
        <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">Session Format Offered</label>
            {['In-Person', 'Virtual (Video)', 'Phone'].map(f => (
                <label key={f} className="inline-flex items-center mr-4">
                    <input 
                        type="checkbox" 
                        checked={formData.formats.includes(f)}
                        onChange={() => {
                            const newFormats = formData.formats.includes(f)
                                ? formData.formats.filter(item => item !== f)
                                : [...formData.formats, f];
                            setFormData({ formats: newFormats });
                        }}
                        className="form-checkbox text-teal-600 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700">{f}</span>
                </label>
            ))}
        </div>
        <div className="border border-slate-200 p-4 rounded-lg bg-yellow-50">
            <p className="text-sm font-medium text-yellow-800">
                Action Required: Please integrate your calendar in the next step to set availability. (Placeholder for system setup)
            </p>
        </div>
    </div>
);
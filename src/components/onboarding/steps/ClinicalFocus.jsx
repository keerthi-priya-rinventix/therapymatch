// src/components/onboarding/steps/Step2ClinicalFocus.jsx

import React from 'react';
import { SectionTitle } from '../../UI/SectionTitle';
import { LabeledInput } from '../../UI/LabeledInput';

export const ClinicalFocus = ({ formData, setFormData }) => (
    <div className="space-y-6">
        <SectionTitle 
            title="Step 2: Clinical Focus"
            subtitle="Define your core expertise to ensure accurate client matching."
        />
        <LabeledInput 
            label="Years of Experience" 
            type="number" 
            value={formData.years}
            onChange={(e) => setFormData({ years: parseInt(e.target.value) || 0 })}
            placeholder="e.g., 10"
        />
        <div>
            <label className="text-sm font-medium text-slate-700 block mb-2">Primary Specialties (Select all that apply)</label>
            {['Anxiety', 'Trauma/PTSD', 'Depression', 'Couples Counseling', 'Grief', 'Addiction'].map(s => (
                <label key={s} className="inline-flex items-center mr-4 mb-2">
                    <input 
                        type="checkbox" 
                        checked={formData.specialties.includes(s)}
                        onChange={() => {
                            const newSpecialties = formData.specialties.includes(s)
                                ? formData.specialties.filter(item => item !== s)
                                : [...formData.specialties, s];
                            setFormData({ specialties: newSpecialties });
                        }}
                        className="form-checkbox text-teal-600 rounded"
                    />
                    <span className="ml-2 text-sm text-slate-700">{s}</span>
                </label>
            ))}
        </div>
        <LabeledInput 
            label="Main Therapeutic Approach" 
            type="select" 
            value={formData.approach}
            onChange={(e) => setFormData({ approach: e.target.value })}
            options={['Cognitive Behavioral Therapy (CBT)', 'Dialectical Behavior Therapy (DBT)', 'Psychodynamic', 'Person-Centered']}
        />
    </div>
);
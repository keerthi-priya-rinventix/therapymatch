// src/components/onboarding/steps/Step1Vetting.jsx

import React from 'react';
import { Upload } from 'lucide-react';
import { SectionTitle } from '../../UI/SectionTitle';
import { Button } from '../../UI/Button';
import { LabeledInput } from '../../UI/LabeledInput';

export const Vetting = ({ formData, setFormData }) => (
    <div className="space-y-6">
        <SectionTitle 
            title="Step 1: Licensing and Vetting"
            subtitle="Please provide your professional credentials to begin the verification process."
        />
        <LabeledInput 
            label="State/National License Number" 
            type="text" 
            value={formData.license}
            onChange={(e) => setFormData({ license: e.target.value })}
            placeholder="e.g., LMT-123456"
        />
        <LabeledInput 
            label="Practice Name" 
            type="text" 
            value={formData.practiceName}
            onChange={(e) => setFormData({ practiceName: e.target.value })}
            placeholder="e.g., The Wellness Center"
        />
        <div className="border border-slate-200 p-4 rounded-lg bg-slate-50">
            <label className="text-sm font-medium text-slate-700 block mb-2">Upload Professional Documents</label>
            <Button 
                variant="secondary" 
                className="flex items-center gap-2"
                onClick={() => setFormData({ filesUploaded: true })} // Simulation
            >
                <Upload size={16} /> Upload License & Insurance (PDF/JPG)
            </Button>
            <p className={`text-xs mt-2 ${formData.filesUploaded ? 'text-green-600' : 'text-slate-500'}`}>
                Files uploaded: {formData.filesUploaded ? 'Complete' : 'Pending'}
            </p>
        </div>
    </div>
);
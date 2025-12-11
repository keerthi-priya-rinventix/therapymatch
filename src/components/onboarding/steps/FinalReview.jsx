// src/components/onboarding/steps/FinalReview.jsx

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SectionTitle } from '../../UI/SectionTitle';
import { Button } from '../../UI/Button';

export const FinalReview = ({ formData, onPublish }) => (
    <div className="space-y-8 p-6 bg-white rounded-xl border border-teal-200">
        <SectionTitle 
            title="Final Review: Ready to Go Live!"
            subtitle="Please review your profile details before publishing to the TherapyMatch network."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-sm">
            <h4 className="col-span-2 text-lg font-semibold border-b pb-2 mb-2 text-teal-700">Practice Details</h4>
            <p><span className="font-medium text-slate-600">License:</span> {formData.license || 'N/A'}</p>
            <p><span className="font-medium text-slate-600">Practice Name:</span> {formData.practiceName || 'N/A'}</p>

            <h4 className="col-span-2 text-lg font-semibold border-b pb-2 mb-2 pt-4 text-teal-700">Clinical Expertise</h4>
            <p><span className="font-medium text-slate-600">Specialties:</span> {formData.specialties.join(', ') || 'N/A'}</p>
            <p><span className="font-medium text-slate-600">Approach:</span> {formData.approach || 'N/A'}</p>
            <p className="col-span-2"><span className="font-medium text-slate-600">Bio:</span> {formData.bio || 'N/A'}</p>

            <h4 className="col-span-2 text-lg font-semibold border-b pb-2 mb-2 pt-4 text-teal-700">Logistics</h4>
            <p><span className="font-medium text-slate-600">Fee:</span> ${formData.fee || '0'}/session</p>
            <p><span className="font-medium text-slate-600">Formats:</span> {formData.formats.join(', ') || 'N/A'}</p>
            <p><span className="font-medium text-slate-600">Insurance:</span> {formData.insurance || 'N/A'}</p>
        </div>
        
        <div className="pt-6 border-t border-slate-100">
            <Button onClick={onPublish} className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3 flex justify-center items-center gap-2">
                <CheckCircle size={20} /> Publish Profile and Go Live
            </Button>
            <p className="text-center text-xs text-slate-500 mt-2">Note: After publishing, your profile will be active in the matching algorithm.</p>
        </div>
    </div>
);
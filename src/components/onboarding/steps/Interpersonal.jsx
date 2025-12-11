// src/components/onboarding/steps/Step4Interpersonal.jsx

import React from 'react';
import { SectionTitle } from '../../UI/SectionTitle';
import { LabeledInput } from '../../UI/LabeledInput';

export const Interpersonal = ({ formData, setFormData }) => (
    <div className="space-y-6">
        <SectionTitle 
            title="Step 4: Interpersonal & Cultural Fit"
            subtitle="Help clients find the right personal connection."
        />
        <LabeledInput 
            label="Professional Bio (Max 500 chars)" 
            type="textarea" 
            value={formData.bio}
            onChange={(e) => setFormData({ bio: e.target.value.slice(0, 500) })}
            placeholder="Describe your philosophy and style of practice."
        />
        <LabeledInput 
            label="Cultural Competence Areas" 
            type="text" 
            value={formData.culture}
            onChange={(e) => setFormData({ culture: e.target.value })}
            placeholder="e.g., LGBTQ+ Affirmative, POC focus, military families"
        />
        <LabeledInput 
            label="Languages Spoken" 
            type="text" 
            value={formData.languages}
            onChange={(e) => setFormData({ languages: e.target.value })}
            placeholder="e.g., Spanish, French (besides English)"
        />
    </div>
);
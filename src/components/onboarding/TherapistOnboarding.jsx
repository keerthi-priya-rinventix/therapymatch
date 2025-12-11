// src/components/onboarding/TherapistOnboarding.jsx

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

// Import Shared UI Components
import { Button } from '../UI/Button';
import { ProgressBar } from '../UI/ProgressBar';
import { SectionTitle } from '../UI/SectionTitle';

// Import Step Components
import { Vetting } from './steps/Vetting';
import { ClinicalFocus } from './steps/ClinicalFocus';
import { PracticalDetails } from './steps/PracticalDetails';
import { Interpersonal } from './steps/Interpersonal';
import { FinalReview } from './steps/FinalReview';


// Initial Data Structure for the Therapist Profile
const initialFormData = {
    // Step 1: Vetting
    license: 'LCSW-87654',
    practiceName: 'Compassionate Care Therapy',
    filesUploaded: true, 

    // Step 2: Clinical Focus
    years: 5,
    specialties: ['Anxiety', 'Depression'], // Array of strings
    approach: 'Cognitive Behavioral Therapy (CBT)',

    // Step 3: Practical Details
    fee: 150,
    insurance: 'Aetna, Cigna',
    formats: ['Virtual (Video)'], // Array of strings
    
    // Step 4: Interpersonal
    bio: 'I specialize in helping young adults manage anxiety and depression...',
    culture: 'LGBTQ+ Affirmative',
    languages: 'English',
};


export const TherapistOnboarding = ({ onFinish = () => {} }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState(initialFormData);

    const updateFormData = (newData) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const steps = [
        <Vetting formData={formData} setFormData={updateFormData} key="step1" />,
        <ClinicalFocus formData={formData} setFormData={updateFormData} key="step2" />,
        <PracticalDetails formData={formData} setFormData={updateFormData} key="step3" />,
        <Interpersonal formData={formData} setFormData={updateFormData} key="step4" />,
    ];

    const totalSteps = steps.length;
    
    // Handlers
    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setCurrentStep(prev => prev + 1);
        } else if (currentStep === totalSteps - 1) {
            setCurrentStep(totalSteps); // Move to Final Review state
        }
    };
    
    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    const handlePublish = () => {
        // Simulated final API call
        alert("Success! Your Therapist Profile has been published and is now active in the TherapyMatch algorithm.");
        onFinish(); 
    };

    const isFinalReview = currentStep === totalSteps;

    return (
        <div className="max-w-2xl mx-auto py-12">
            <SectionTitle 
                title="Therapist Onboarding Wizard" 
                subtitle="Complete these steps to join the TherapyMatch network and start connecting with clients." 
            />
            
            {!isFinalReview && (
                <ProgressBar current={currentStep + 1} total={totalSteps} className="mb-8" />
            )}

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                {isFinalReview 
                    ? <FinalReview formData={formData} onPublish={handlePublish} />
                    : steps[currentStep]
                }
            </div>

            {/* Navigation Controls */}
            {!isFinalReview && (
                <div className="mt-8 flex justify-between gap-4">
                    <Button 
                        variant="secondary" 
                        onClick={handleBack} 
                        className="w-1/3"
                        disabled={currentStep === 0}
                    >
                        <ChevronLeft size={18} /> Back
                    </Button>
                    
                    <Button onClick={handleNext} className="w-2/3 bg-teal-600 hover:bg-teal-700 shadow-teal-200 shadow-lg">
                        {currentStep === totalSteps - 1 ? "Review & Publish" : "Next Step"}
                        <ChevronRight size={18} />
                    </Button>
                </div>
            )}
        </div>
    );
};
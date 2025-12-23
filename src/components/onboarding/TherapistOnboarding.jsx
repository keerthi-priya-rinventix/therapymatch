// File: src/components/onboarding/TherapistOnboarding.jsx
import React, { useState } from 'react';
import { 
  Stethoscope, 
  MapPin, 
  Globe, 
  Award, 
  CheckCircle2, 
  ChevronRight, 
  Camera 
} from 'lucide-react';
import { ProgressBar } from '../UI/ProgressBar';
import { Button } from '../UI/Button';
import { Card } from '../UI/Card';

export const TherapistOnboarding = ({ onFinish }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                  <Camera size={32} />
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-teal-600 text-white rounded-full shadow-lg">
                  <CheckCircle2 size={14} />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">Professional Title</label>
                <input type="text" placeholder="e.g. Licensed Clinical Psychologist" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500 uppercase">License Number</label>
                <input type="text" placeholder="State-Issued ID" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Clinical Bio</label>
              <textarea rows={4} placeholder="Describe your philosophy and approach..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
             <div className="space-y-4">
              <h4 className="font-bold text-slate-800">Primary Specialties</h4>
              <div className="grid grid-cols-2 gap-2">
                {['Anxiety', 'Depression', 'Trauma', 'LGBTQ+', 'Couples', 'Adolescents'].map(tag => (
                  <button key={tag} className="p-3 border border-slate-200 rounded-xl text-left text-sm hover:border-teal-500 hover:bg-teal-50 transition-all flex justify-between items-center">
                    {tag} <div className="w-4 h-4 border border-slate-300 rounded" />
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase">Insurance Providers</label>
              <input type="text" placeholder="Blue Cross, Aetna, Cigna..." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 text-center py-8 animate-in zoom-in-95 duration-500">
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Verification Pending</h3>
              <p className="text-slate-500 mt-2 max-w-sm mx-auto">
                Our clinical team will verify your credentials within 24 hours. You can now access your dashboard to set up your availability.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-4 text-left">
               <Stethoscope className="text-teal-600" size={24} />
               <div>
                 <p className="text-sm font-bold">HIPAA Compliance Training</p>
                 <p className="text-xs text-slate-500">Required before your first session</p>
               </div>
               <button className="ml-auto text-teal-600 font-bold text-xs uppercase">Start</button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <ProgressBar current={step} total={totalSteps} />
      
      <Card className="mt-8 overflow-hidden">
        <div className="p-8">
          <header className="mb-8">
            <span className="text-teal-600 font-bold text-xs uppercase tracking-widest">Step {step} of {totalSteps}</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {step === 1 && "Professional Profile"}
              {step === 2 && "Expertise & Billing"}
              {step === 3 && "Final Verification"}
            </h2>
          </header>

          {renderStep()}

          <footer className="mt-12 pt-6 border-t border-slate-100 flex justify-between items-center">
            <button 
              disabled={step === 1}
              onClick={() => setStep(s => s - 1)}
              className="text-slate-400 font-bold text-sm hover:text-slate-600 disabled:opacity-0"
            >
              Previous
            </button>
            <Button 
              onClick={() => {
                if (step < totalSteps) setStep(s => s + 1);
                else onFinish();
              }}
              className="bg-teal-600 hover:bg-teal-700 px-8"
            >
              {step === totalSteps ? 'Go to Dashboard' : 'Continue'}
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </footer>
        </div>
      </Card>
    </div>
  );
};
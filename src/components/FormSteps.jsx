import React from 'react';
import { Heart, Users, Brain, MapPin, DollarSign, Calendar } from 'lucide-react';
import { SelectionCard, SectionTitle, LikertScale, Button } from './UI';
import { OPTIONS } from '../data';

// --- Step 1: Welcome ---
export const WelcomeStep = ({ onStart, onSkipAuth }) => (
  <div className="text-center py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <Heart className="text-teal-600 w-10 h-10" />
    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
      Finding the right therapist shouldn't be stressful.
    </h1>
    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
      Our guided, 5-minute process connects you with professionals who truly understand your unique needs.
    </p>
    
    <div className="flex justify-center gap-4">
      <Button onClick={onStart} className="text-lg px-8 py-3">
        Start Assessment
      </Button>
      <Button variant="secondary" onClick={onSkipAuth} className="text-lg px-8 py-3">
        I already have an account
      </Button>
    </div>
    <p className="mt-6 text-sm text-slate-400">All information is confidential and protected.</p>
  </div>
);

// --- Step 2: Basic Info ---
export const BasicInfoStep = ({ formData, setFormData }) => (
  <div className="animate-in fade-in duration-500">
    <SectionTitle 
      title="Let's get started" 
      subtitle="First, we need to know who this therapy is for to ask the right questions."
    />
    
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Who is therapy for?</label>
        <div className="grid grid-cols-2 gap-4">
          {OPTIONS.therapyTypes.map((opt) => (
            <SelectionCard
              key={opt.id}
              selected={formData.therapyType === opt.id}
              onClick={() => setFormData({ ...formData, therapyType: opt.id })}
            >
              <span className="font-medium text-lg">{opt.label}</span>
            </SelectionCard>
          ))}
        </div>
      </div>

      {formData.therapyType && (
        <div className="animate-in slide-in-from-bottom-2 fade-in">
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Have you attended therapy before?</label>
          <div className="space-y-3">
            {OPTIONS.history.map((opt) => (
              <SelectionCard
                key={opt}
                selected={formData.history === opt}
                onClick={() => setFormData({ ...formData, history: opt })}
              >
                <span className="font-medium">{opt}</span>
              </SelectionCard>
            ))}
          </div>
        </div>
      )}
    </div>
  </div>
);

// --- Step 3: Specific Needs (Dynamic) ---
export const SpecificNeedsStep = ({ formData, setFormData }) => {
  const toggleSelection = (field, value) => {
    const current = formData[field] || [];
    const updated = current.includes(value)
      ? current.filter(item => item !== value)
      : [...current, value];
    setFormData({ ...formData, [field]: updated });
  };

  const isCouple = formData.therapyType === 'couple';
  const isChild = formData.therapyType === 'child';
  
  const activeConcerns = isCouple ? OPTIONS.coupleConcerns 
    : isChild ? OPTIONS.childConcerns 
    : OPTIONS.individualConcerns;

  const titleText = isCouple ? "Relationship Dynamics" : "Your Concerns";

  return (
    <div className="animate-in fade-in duration-500">
      <SectionTitle 
        title={titleText} 
        subtitle="Select all the areas where support is needed right now."
      />

      <div className="mb-8">
        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Primary Concerns</label>
        <div className="grid grid-cols-2 gap-3">
          {activeConcerns.map((concern) => (
            <SelectionCard
              key={concern}
              selected={formData.concerns?.includes(concern)}
              onClick={() => toggleSelection('concerns', concern)}
              className="py-3"
            >
              {concern}
            </SelectionCard>
          ))}
        </div>
      </div>

      {/* Individual/Family Approaches */}
      {!isCouple && (
        <div>
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Interest in Approaches</label>
          <div className="space-y-2">
            {OPTIONS.approaches.map((app) => (
              <SelectionCard
                key={app}
                selected={formData.approaches?.includes(app)}
                onClick={() => toggleSelection('approaches', app)}
              >
                {app}
              </SelectionCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- Step 4: Practical Preferences ---
export const PracticalStep = ({ formData, setFormData }) => {
  const updateField = (field, value) => setFormData({ ...formData, [field]: value });
  
  const toggleAvailability = (opt) => {
      const current = formData.availability || [];
      const updated = current.includes(opt) ? current.filter(x => x!==opt) : [...current, opt];
      updateField('availability', updated);
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SectionTitle 
        title="Logistics" 
        subtitle="Let's filter for therapists who fit your schedule and budget."
      />

      <div className="space-y-8">
        {/* Format */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
            <MapPin size={18} /> Format Preference
          </div>
          <div className="grid grid-cols-4 gap-3">
            {OPTIONS.formats.map(opt => (
              <SelectionCard
                key={opt}
                selected={formData.format === opt}
                onClick={() => updateField('format', opt)}
                className="text-center justify-center py-2"
              >
                {opt}
              </SelectionCard>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
            <DollarSign size={18} /> Budget (Per Session)
          </div>
          <div className="grid grid-cols-3 gap-3">
            {OPTIONS.budgets.map(opt => (
              <SelectionCard
                key={opt}
                selected={formData.budget === opt}
                onClick={() => updateField('budget', opt)}
                className="text-center justify-center py-2"
              >
                {opt}
              </SelectionCard>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
            <Calendar size={18} /> Availability
          </div>
          <div className="grid grid-cols-3 gap-3">
            {OPTIONS.availability.map(opt => (
              <SelectionCard
                key={opt}
                selected={formData.availability?.includes(opt)}
                onClick={() => toggleAvailability(opt)}
              >
                {opt}
              </SelectionCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Step 5: Cultural & Personal ---
export const CulturalStep = ({ formData, setFormData }) => {
  const toggleQuality = (quality) => {
    const current = formData.qualities || [];
    if (current.includes(quality)) {
      setFormData({ ...formData, qualities: current.filter(q => q !== quality) });
    } else if (current.length < 5) {
      setFormData({ ...formData, qualities: [...current, quality] });
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <SectionTitle 
        title="Personal Fit" 
        subtitle="Therapy is a relationship. Rate the importance of these factors."
      />

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
        <h3 className="font-bold text-lg text-slate-800 mb-4">How important is it that your therapist...</h3>
        <LikertScale 
          label="Shares my cultural background?" 
          value={formData.cultureImp} 
          onChange={(v) => setFormData(p => ({...p, cultureImp: v}))} 
        />
        <LikertScale 
          label="Is the same gender as me?" 
          value={formData.genderImp} 
          onChange={(v) => setFormData(p => ({...p, genderImp: v}))} 
        />
        <LikertScale 
          label="Is LGBTQ+ affirming?" 
          value={formData.lgbtImp} 
          onChange={(v) => setFormData(p => ({...p, lgbtImp: v}))} 
        />
      </div>

      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
            Therapist Qualities
          </label>
          <span className="text-sm text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded">
            Select up to 5
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {OPTIONS.qualities.map((q) => (
            <SelectionCard
              key={q}
              selected={formData.qualities?.includes(q)}
              onClick={() => toggleQuality(q)}
              disabled={formData.qualities?.length >= 5 && !formData.qualities?.includes(q)}
            >
              {q}
            </SelectionCard>
          ))}
        </div>
      </div>
    </div>
  );
};
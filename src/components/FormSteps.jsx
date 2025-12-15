import React from 'react';
import { 
    Heart, Brain, Users, MapPin, DollarSign, Calendar, Clock, 
    ShieldCheck, Save, ArrowRight, LogIn, Globe, BookOpen 
} from 'lucide-react';

// NOTE: Assuming OPTIONS is imported from a file named 'data.js' one level up
// In a real application, you would fill the CULTURAL_OPTIONS data 
// inside the CulturalStep from your main data source if necessary.
import { OPTIONS } from '../data'; 
// NOTE: Assuming UI components (SectionTitle, SelectionCard) are imported 
// from a file named 'UI.js' in the current folder
import { SectionTitle, SelectionCard } from './UI'; 


// --- Helper component to handle conditional rendering of an input field ---
const TextInput = ({ field, placeholder, formData, setFormData, className = "" }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            // Tailwind classes for styling
            className={`mt-3 w-full p-3 border border-slate-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-colors ${className}`}
            value={formData[field] || ''}
            onChange={(e) => setFormData(p => ({ ...p, [field]: e.target.value }))}
        />
    );
};

// --- Helper component for rendering Likert Scale rows ---
// Used specifically in the CulturalStep for ratings
const LikertScaleRow = ({ label, field, formData, setFormData, ratingOptions }) => {
    // Generates a unique key for the specific rating item to store in formData
    const fieldKey = `${field}_${label.replace(/[^a-zA-Z0-9]/g, '_')}`;

    return (
        <div className="flex items-center border-b border-slate-100 py-3 first:pt-0 last:pb-0 last:border-b-0">
            <span className="text-sm text-slate-700 w-1/2">{label}</span>
            <div className="flex justify-around w-1/2">
                {ratingOptions.map((rating, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, [fieldKey]: rating }))}
                        className={`w-1/4 h-8 flex items-center justify-center text-sm font-medium rounded-md transition-colors 
                            ${formData[fieldKey] === rating 
                                ? 'bg-teal-600 text-white shadow-md' 
                                : 'bg-slate-50 text-slate-500 border border-slate-200 hover:bg-teal-50 hover:border-teal-300'
                            }`}
                        aria-label={`Rate ${label} as ${rating}`}
                    >
                        {/* Render checkmark if selected for visual confirmation */}
                        {formData[fieldKey] === rating ? '✓' : ''}
                    </button>
                ))}
            </div>
        </div>
    );
};

// Component for the Therapy Logo 
const TherapyLogo = ({ size = 32, className = "" }) => (
    <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        {/* Left Piece (Patient) - Darker Teal */}
        <path 
            d="M16 8C16 5.79086 14.2091 4 12 4H6C4.89543 4 4 4.89543 4 6V12C4 14.2091 5.79086 16 8 16C10.2091 16 12 17.7909 12 20V26C12 27.1046 12.8954 28 14 28H16V8Z" 
            fill="#0d9488" 
        />
        {/* Right Piece (Therapist) - Lighter Teal */}
        <path 
            d="M16 8V28H18C19.1046 28 20 27.1046 20 26V20C20 17.7909 21.7909 16 24 16C26.2091 16 28 14.2091 28 12V6C28 4.89543 27.1046 4 26 4H20C17.7909 4 16 5.79086 16 8Z" 
            fill="#5eead4" 
        />
    </svg>
);


// --- Step 1: Welcome ---
export const WelcomeStep = ({ onStart, onSkipAuth }) => (
    <div className="flex flex-col items-center justify-center py-6 max-w-xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        <div className="space-y-4">
            <div className="flex justify-center mb-6">
                <div className="p-5 bg-teal-50 rounded-full shadow-sm">
                    <TherapyLogo size={64} />
                </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Welcome to TherapyMatch!
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
                Finding the right therapist shouldn't be stressful. Our guided process will help you 
                connect with professionals who truly understand your unique needs.
            </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 w-full shadow-sm text-left">
            <h3 className="font-semibold text-slate-900 mb-4 text-lg">Before we begin:</h3>
            <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>This process takes about <strong>5-7 minutes</strong></span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                    <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>All information is <strong>confidential and protected</strong></span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                    <Save className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>You can <strong>save your progress</strong> and return anytime</span>
                </li>
            </ul>
        </div>

        <div className="w-full pt-2 space-y-4">
            <div>
                <h3 className="text-lg font-medium text-slate-900 mb-4">
                    Ready to find your therapeutic match?
                </h3>
                <button 
                    onClick={onStart}
                    className="w-full bg-teal-700 hover:bg-teal-800 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                >
                    Let's get started <ArrowRight size={20} />
                </button>
            </div>

            {onSkipAuth && (
                <button 
                    onClick={onSkipAuth}
                    className="w-full text-slate-500 hover:text-teal-700 font-medium py-2 px-4 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                    I already have an account <LogIn size={16} />
                </button>
            )}
        </div>
    </div>
);

// --- Step 2: Basic Info ---
export const BasicInfoStep = ({ formData, setFormData }) => {
    // Check if the generic 'other' option is selected
    const isOtherSelected = formData.therapyType === 'other'; 

    return (
        <div className="animate-in fade-in duration-500">
            <SectionTitle 
                title="Let's get started" 
                subtitle="First, we need to know who this therapy is for to ask the right questions."
            />
            
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Who is therapy for?</label>
                    <div className="grid grid-cols-2 gap-4">
                        {OPTIONS.basic.therapyTypes.map((opt) => (
                            <SelectionCard
                                key={opt.id}
                                selected={formData.therapyType === opt.id}
                                onClick={() => setFormData({ ...formData, therapyType: opt.id })}
                            >
                                <span className="font-medium text-lg">{opt.label}</span>
                            </SelectionCard>
                        ))}
                    </div>
                    {isOtherSelected && (
                        <TextInput
                            field="therapyTypeOther"
                            placeholder="Please specify who therapy is for (e.g., friend, relative)"
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                </div>

                {formData.therapyType && (
                    <div className="animate-in slide-in-from-bottom-2 fade-in">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Have you attended therapy before?</label>
                        <div className="space-y-3">
                            {OPTIONS.basic.history.map((opt) => (
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
                
                {formData.history && (
                    <div className="animate-in slide-in-from-bottom-2 fade-in">
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">How urgent is your need for therapy?</label>
                        <div className="space-y-3">
                            {OPTIONS.basic.urgency.map((opt) => (
                                <SelectionCard
                                    key={opt}
                                    selected={formData.urgency === opt}
                                    onClick={() => setFormData({ ...formData, urgency: opt })}
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
};

// --- Step 3: Specific Needs ---
export const SpecificNeedsStep = ({ formData, setFormData }) => {
    
    // Helper function to handle multi-select and 'Other' input
    const toggleSelection = (field, option) => {
        const value = typeof option === 'string' ? option : option.label;
        const isOther = typeof option !== 'string' && option.hasInput;
        
        const current = formData[field] || [];
        
        // Handle multi-select toggle
        const updated = current.includes(value)
            ? current.filter(item => item !== value)
            : [...current, value];
        
        setFormData(prev => {
            const newState = { ...prev, [field]: updated };
            
            // Clear input if 'Other' is deselected
            if (isOther && !updated.includes(value)) {
                delete newState[`${field}Other`];
            }
            return newState;
        });
    };

    // Determine the type of therapy for dynamic question loading
    const typeObj = OPTIONS.basic.therapyTypes.find(t => t.id === formData.therapyType);
    const type = typeObj?.type || 'individual';

    // Dynamically select the correct options lists
    let activeConcerns = [];
    
    if (type === 'couple') {
        activeConcerns = OPTIONS.couple.concerns;
    } else if (type === 'child') {
        activeConcerns = OPTIONS.child.concerns;
    } else { // 'individual', 'family' or 'other'
        activeConcerns = OPTIONS.individual.concerns;
    }
    
    const titleText = type === 'couple' ? "Relationship Dynamics" : 
                      type === 'child' ? "Child's Needs" : 
                      "Your Concerns";

    // Helper to extract label and check for input
    const getOptionDetails = (opt) => ({
        label: typeof opt === 'string' ? opt : opt.label,
        value: typeof opt === 'string' ? opt : opt.label,
        hasInput: typeof opt !== 'string' && opt.hasInput,
    });

    // Find the 'Other' concern for conditional rendering of its TextInput
    const otherConcernOption = activeConcerns.find(opt => typeof opt !== 'string' && opt.hasInput);
    const otherConcernSelected = formData.concerns?.includes(otherConcernOption?.label);


    return (
        <div className="animate-in fade-in duration-500">
            <SectionTitle 
                title={titleText} 
                subtitle="Select all the areas where support is needed right now."
            />

            {/* Dynamic Concerns Question */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Primary Concerns</label>
                <div className="grid grid-cols-2 gap-3">
                    {activeConcerns.map((opt) => {
                        const { label, value } = getOptionDetails(opt);
                        const isSelected = formData.concerns?.includes(value);

                        return (
                            <SelectionCard
                                key={value}
                                selected={isSelected}
                                onClick={() => toggleSelection('concerns', opt)}
                                className="py-3"
                            >
                                {label}
                            </SelectionCard>
                        );
                    })}
                </div>
                {/* Conditional Text Input for "Other" concern */}
                {otherConcernSelected && (
                    <TextInput
                        field="concernsOther"
                        placeholder="Please specify your primary concern"
                        formData={formData}
                        setFormData={setFormData}
                    />
                )}
            </div>

            {/* --- COUPLE QUESTIONS --- */}
            {type === 'couple' && (
                <div className="space-y-6 mt-8 animate-in slide-in-from-bottom-2 fade-in">
                    {/* Relationship Stage (Q1) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">What stage is your relationship in?</label>
                        <div className="space-y-2">
                            {OPTIONS.couple.relationshipStages.map(stage => (
                                <SelectionCard
                                    key={stage}
                                    selected={formData.relationshipStage === stage}
                                    onClick={() => setFormData({ ...formData, relationshipStage: stage })}
                                >
                                    {stage}
                                </SelectionCard>
                            ))}
                        </div>
                    </div>
                    {/* Partner Commitment (Q3) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Are both partners equally interested in therapy?</label>
                        <div className="space-y-2">
                            {OPTIONS.couple.partnerCommitment.map(commit => (
                                <SelectionCard
                                    key={commit}
                                    selected={formData.partnerCommitment === commit}
                                    onClick={() => setFormData({ ...formData, partnerCommitment: commit })}
                                >
                                    {commit}
                                </SelectionCard>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* --- CHILD QUESTIONS --- */}
            {type === 'child' && (
                <div className="space-y-6 mt-8 animate-in slide-in-from-bottom-2 fade-in">
                    {/* Child Age (Q1) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">What is your child's age?</label>
                        <div className="grid grid-cols-2 gap-3">
                            {OPTIONS.child.ageGroups.map(age => (
                                <SelectionCard
                                    key={age}
                                    selected={formData.childAge === age}
                                    onClick={() => setFormData({ ...formData, childAge: age })}
                                >
                                    {age}
                                </SelectionCard>
                            ))}
                        </div>
                    </div>
                    {/* Diagnosis Status (Q3) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">Does your child have any diagnosed conditions or special needs?</label>
                        <div className="space-y-2">
                            {OPTIONS.child.diagnosisStatus.map((opt, index) => {
                                const { label, value, hasInput } = getOptionDetails(opt);
                                const isSelected = formData.childDiagnosisStatus === value;
                                
                                return (
                                    <React.Fragment key={index}>
                                        <SelectionCard
                                            selected={isSelected}
                                            onClick={() => setFormData({ ...formData, childDiagnosisStatus: value })}
                                        >
                                            {label}
                                        </SelectionCard>
                                        {isSelected && hasInput && (
                                            <TextInput
                                                field="childDiagnosisOther"
                                                placeholder="Please specify the condition or needs"
                                                formData={formData}
                                                setFormData={setFormData}
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}

            {/* Individual/Family Approaches (Q2) & Communication Preference (Q3) */}
            {(type === 'individual' || type === 'family' || type === 'other') && (
                <div className="space-y-6 mt-8 animate-in slide-in-from-bottom-2 fade-in">
                    {/* Approaches (Q2) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">What therapy approaches interest you?</label>
                        <div className="space-y-2">
                            {OPTIONS.individual.approaches.map((opt) => {
                                const { label, value, hasInput } = getOptionDetails(opt);
                                const isSelected = formData.approaches?.includes(value);

                                return (
                                    <React.Fragment key={value}>
                                        <SelectionCard
                                            selected={isSelected}
                                            onClick={() => toggleSelection('approaches', opt)}
                                        >
                                            {label}
                                        </SelectionCard>
                                        {isSelected && hasInput && (
                                            <TextInput
                                                field="approachesOther"
                                                placeholder="Please specify the other approach"
                                                formData={formData}
                                                setFormData={setFormData}
                                            />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>
                    {/* Communication Preference (Q3) */}
                    <div>
                        <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">How would you prefer to communicate during therapy?</label>
                        <div className="space-y-2">
                            {OPTIONS.individual.communicationPreference.map((style) => (
                                <SelectionCard
                                    key={style}
                                    selected={formData.communicationPreference === style}
                                    onClick={() => setFormData({ ...formData, communicationPreference: style })}
                                >
                                    {style}
                                </SelectionCard>
                            ))}
                        </div>
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

    const insuranceSelected = formData.insurance && formData.insurance.startsWith('Yes');

    return (
        <div className="animate-in fade-in duration-500">
            <SectionTitle 
                title="Logistics" 
                subtitle="Let's filter for therapists who fit your schedule and budget."
            />

            <div className="space-y-8">
                {/* Format (Q1) */}
                <div>
                    <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
                        <MapPin size={18} /> Format Preference
                    </div>
                    <div className="grid grid-cols-4 gap-3">
                        {OPTIONS.logistics.formats.map(opt => (
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

                {/* Availability (Q2) */}
                <div>
                    <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
                        <Calendar size={18} /> Availability
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {OPTIONS.logistics.availability.map(opt => (
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

                {/* Insurance (Q3) */}
                <div>
                    <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
                        <ShieldCheck size={18} /> Insurance Coverage
                    </div>
                    <div className="space-y-2">
                        {OPTIONS.logistics.insurance.map((opt) => {
                            const label = typeof opt === 'string' ? opt : opt.label;
                            return (
                                <React.Fragment key={label}>
                                    <SelectionCard
                                        selected={formData.insurance === label}
                                        onClick={() => updateField('insurance', label)}
                                    >
                                        {label}
                                    </SelectionCard>
                                </React.Fragment>
                            );
                        })}
                    </div>
                    {/* Input for provider specification */}
                    {insuranceSelected && (
                        <TextInput
                            field="insuranceProvider"
                            placeholder="e.g., Aetna, BCBS, Cigna (Optional)"
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                </div>

                {/* Budget (Q4) */}
                <div>
                    <div className="flex items-center gap-2 mb-3 text-teal-700 font-semibold">
                        <DollarSign size={18} /> Budget (Per Session)
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                        {OPTIONS.logistics.budgets.map(opt => (
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
            </div>
        </div>
    );
};

// --- Step 5: Cultural & Personal (Hybrid Refactor) ---
export const CulturalStep = ({ formData, setFormData }) => {
    
    // --- Data Definition for new questions (Mocking OPTIONS.personal) ---
    const CULTURAL_OPTIONS = {
        ratingLabels: {
            cultural: [
                "Therapist shares my cultural background",
                "Therapist has experience working with my cultural group",
                "Therapist understands cultural nuances affecting mental health",
                "Therapist incorporates culturally relevant healing practices",
                "Therapist recognizes cultural influences on family dynamics"
            ],
            religious: [
                "Therapist shares my religious/spiritual perspective",
                "Therapist respects my religious/spiritual beliefs",
                "Therapist can integrate spiritual elements into treatment",
                "Therapist understands religious influences on my worldview"
            ],
            identity: [
                "Therapist is the same gender as me",
                "Therapist has a similar age range to me",
                "Therapist is LGBTQ+ affirming",
                "Therapist has experience with my specific ethnic background"
            ],
            language: [
                "Not Important", "Somewhat Important", "Important", "Very Important"
            ]
        },
        ratingValues: ["Not Important", "Somewhat Important", "Important", "Very Important"],

        // --- CHECKLIST DATA ---
        therapistQualities: [
            "Warm and empathetic", "Direct and straightforward", "Challenging when needed",
            "Structured and organized", "Flexible and adaptive", "Experience-focused",
            "Solution-oriented", "Attentive listener", "Provides clear feedback",
            "Uses appropriate humor", "Patient and calm", "Energetic and engaging",
            "Transparent about the therapy process", "Collaborative in approach", "Validates my experiences"
        ],
        therapeuticStyle: [
            "I prefer a therapist who primarily listens and guides me to my own insights",
            "I prefer a therapist who provides direct advice and concrete suggestions",
            "I prefer a therapist who balances listening with active guidance",
            "I prefer a therapist who assigns 'homework' between sessions",
            "I prefer a therapist who focuses mainly on our session time",
            "I prefer a therapist who explains the therapeutic process and techniques",
            "I prefer a therapist who uses a more intuitive approach",
        ],
        additionalConsiderations: [
            "Immigration experiences", "Cultural traditions or practices", "Family values or dynamics",
            "Religious or spiritual practices", "Racial or ethnic identity experiences", 
            "LGBTQ+ identity experiences", "Disability considerations", 
            { label: "Other", hasInput: true }
        ],
        previousQualities: [
            "They listened without judgment", "They challenged my thinking", "They provided practical tools",
            "They were culturally sensitive", "They respected my pace", "They were knowledgeable about my specific concerns",
            "They created a safe space",
            { label: "Other", hasInput: true }
        ],
    };
    // -----------------------------------------------------------------


    // Helper function to handle multi-select and 'Other' input
    const toggleSelection = (field, option, max = null) => {
        const value = typeof option === 'string' ? option : option.label;
        const isOther = typeof option !== 'string' && option.hasInput;
        
        const current = formData[field] || [];
        
        let updated;

        if (current.includes(value)) {
            // Deselect
            updated = current.filter(item => item !== value);
        } else {
            // Select
            if (max !== null && current.length >= max) {
                // If max limit reached, do nothing
                return;
            }
            updated = [...current, value];
        }
        
        setFormData(prev => {
            const newState = { ...prev, [field]: updated };
            
            // Clear input if 'Other' is deselected
            if (isOther && !updated.includes(value)) {
                delete newState[`${field}Other`];
            }
            return newState;
        });
    };

    // Find if the "Other" option is selected in a given field
    const isOtherSelected = (field) => {
        const otherOption = CULTURAL_OPTIONS[field]?.find(opt => typeof opt !== 'string' && opt.hasInput);
        return otherOption && formData[field]?.includes(otherOption.label);
    };

    // State management for Language preferences
    const prefersOtherLanguage = formData.prefersOtherLanguage === true;
    const updateLanguageField = (field, value) => setFormData(p => ({ ...p, [field]: value }));

    const qualitiesCount = formData.therapistQualities?.length || 0;
    const qualitiesMax = 5;

    return (
        <div className="animate-in fade-in duration-500">
            <SectionTitle 
                title="Cultural and Personal Preferences" 
                subtitle="Understanding your unique background and preferences helps us match you with a therapist who can provide culturally responsive and personally meaningful care."
            />
            
            {/* 1. RATING SCALES SECTION */}
            <div className="space-y-8 p-4 border border-slate-200 rounded-lg shadow-sm bg-white">
                
                {/* Cultural Considerations */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Globe size={20} className="text-teal-600"/> Cultural Alignment Preferences
                    </h3>
                    <div className="flex font-semibold text-sm text-center text-slate-500 border-b border-slate-300 pb-2">
                        <span className="w-1/2 text-left">Factor</span>
                        {/* Display the column headers for the rating scale */}
                        <div className="flex w-1/2 justify-around">
                             <span className="w-1/4 text-xs">Not Important</span>
                             <span className="w-1/4 text-xs">Somewhat Important</span>
                             <span className="w-1/4 text-xs">Important</span>
                             <span className="w-1/4 text-xs">Very Important</span>
                        </div>
                    </div>
                    {CULTURAL_OPTIONS.ratingLabels.cultural.map((label) => (
                        <LikertScaleRow
                            key={label}
                            label={label}
                            field="culturalImportance"
                            formData={formData}
                            setFormData={setFormData}
                            ratingOptions={CULTURAL_OPTIONS.ratingValues}
                        />
                    ))}
                </div>

                {/* Religious/Spiritual Considerations */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <BookOpen size={20} className="text-teal-600"/> Religious/Spiritual Considerations
                    </h3>
                    {CULTURAL_OPTIONS.ratingLabels.religious.map((label) => (
                        <LikertScaleRow
                            key={label}
                            label={label}
                            field="religiousImportance"
                            formData={formData}
                            setFormData={setFormData}
                            ratingOptions={CULTURAL_OPTIONS.ratingValues}
                        />
                    ))}
                </div>

                {/* Identity Factors */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Users size={20} className="text-teal-600"/> Identity Factors
                    </h3>
                    {CULTURAL_OPTIONS.ratingLabels.identity.map((label) => (
                        <LikertScaleRow
                            key={label}
                            label={label}
                            field="identityImportance"
                            formData={formData}
                            setFormData={setFormData}
                            ratingOptions={CULTURAL_OPTIONS.ratingValues}
                        />
                    ))}
                </div>

                {/* Language and Communication */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <Heart size={20} className="text-teal-600"/> Language and Communication
                    </h3>

                    {/* Checkbox: I prefer therapy in a language other than English */}
                    <SelectionCard
                        selected={prefersOtherLanguage}
                        onClick={() => updateLanguageField('prefersOtherLanguage', !prefersOtherLanguage)}
                    >
                        I prefer therapy in a language other than English
                    </SelectionCard>

                    {prefersOtherLanguage && (
                        <div className="ml-4 space-y-4 animate-in slide-in-from-top-2 fade-in">
                            <TextInput
                                field="preferredLanguage"
                                placeholder="If checked, please specify language (e.g., Spanish, Mandarin)"
                                formData={formData}
                                setFormData={setFormData}
                            />
                            
                            <label className="block text-sm font-bold text-slate-700 mt-4">
                                How important is therapist fluency in this language?
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {CULTURAL_OPTIONS.ratingValues.map(rating => (
                                    <SelectionCard
                                        key={rating}
                                        selected={formData.fluencyImportance === rating}
                                        onClick={() => updateLanguageField('fluencyImportance', rating)}
                                        className="text-center justify-center py-2 text-sm"
                                    >
                                        {rating}
                                    </SelectionCard>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Checkbox: I require interpretation services */}
                    <SelectionCard
                        selected={formData.requiresInterpretation === true}
                        onClick={() => updateLanguageField('requiresInterpretation', !formData.requiresInterpretation)}
                    >
                        I require interpretation services
                    </SelectionCard>
                </div>

            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-6">Personal Connection Preferences</h2>
            </div>

            {/* 2. Therapist Qualities (Select top 5) - CHECKLIST */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                        <Heart size={18} className="inline-block mr-1 text-teal-600" /> Therapist Qualities
                    </label>
                    <span className="text-sm text-teal-600 font-medium bg-teal-50 px-2 py-1 rounded">
                        Select your top {qualitiesMax} ({qualitiesCount}/{qualitiesMax})
                    </span>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    {CULTURAL_OPTIONS.therapistQualities.map((q) => {
                        const isSelected = formData.therapistQualities?.includes(q);
                        
                        return (
                            <SelectionCard
                                key={q}
                                selected={isSelected}
                                onClick={() => toggleSelection('therapistQualities', q, qualitiesMax)}
                                disabled={qualitiesCount >= qualitiesMax && !isSelected}
                            >
                                {q}
                            </SelectionCard>
                        );
                    })}
                </div>
            </div>
            
            {/* 3. Therapeutic Style (Select all that apply) - CHECKLIST */}
            <div className="mb-8">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
                    <Brain size={18} className="inline-block mr-1 text-teal-600" /> Therapeutic Style
                </label>
                <div className="space-y-2">
                    {CULTURAL_OPTIONS.therapeuticStyle.map((style) => {
                        const isSelected = formData.therapeuticStyle?.includes(style);

                        return (
                            <SelectionCard
                                key={style}
                                selected={isSelected}
                                onClick={() => toggleSelection('therapeuticStyle', style)}
                            >
                                {style}
                            </SelectionCard>
                        );
                    })}
                </div>
            </div>

            {/* 4. Additional Cultural or Personal Considerations (Multi-select with input) - CHECKLIST */}
            <div className="mt-8">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
                    <Users size={18} className="inline-block mr-1 text-teal-600" /> Additional Cultural or Personal Considerations
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {CULTURAL_OPTIONS.additionalConsiderations.map((opt) => {
                        const label = typeof opt === 'string' ? opt : opt.label;
                        const isSelected = formData.additionalConsiderations?.includes(label);

                        return (
                            <SelectionCard
                                key={label}
                                selected={isSelected}
                                onClick={() => toggleSelection('additionalConsiderations', opt)}
                            >
                                {label}
                            </SelectionCard>
                        );
                    })}
                </div>
                {/* Conditional Text Input for "Other" consideration */}
                {isOtherSelected('additionalConsiderations') && (
                    <TextInput
                        field="additionalConsiderationsOther"
                        placeholder="Please specify your other considerations"
                        formData={formData}
                        setFormData={setFormData}
                    />
                )}
            </div>

            {/* 5. Previous Therapeutic Relationships (Multi-select with input) - CHECKLIST */}
            <div className="mt-8">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-3">
                    <BookOpen size={18} className="inline-block mr-1 text-teal-600" /> Previous Therapeutic Relationships
                </label>
                <div className="grid grid-cols-2 gap-3">
                    {CULTURAL_OPTIONS.previousQualities.map((opt) => {
                        const label = typeof opt === 'string' ? opt : opt.label;
                        const isSelected = formData.previousQualities?.includes(label);

                        return (
                            <SelectionCard
                                key={label}
                                selected={isSelected}
                                onClick={() => toggleSelection('previousQualities', opt)}
                            >
                                {label}
                            </SelectionCard>
                        );
                    })}
                </div>
                {/* Conditional Text Input for "Other" previous quality */}
                {isOtherSelected('previousQualities') && (
                    <TextInput
                        field="previousQualitiesOther"
                        placeholder="Please specify the other quality"
                        formData={formData}
                        setFormData={setFormData}
                    />
                )}
            </div>
        </div>
    );
};
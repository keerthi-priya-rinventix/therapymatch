// --- Main Application Component ---
const TherapyMatchApp = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    therapyType: '',
    history: '',
    urgency: '',
    concerns: [],
    approaches: [],
    format: '',
    budget: '',
    qualities: [],
    cultureImp: 0
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  // Steps Configuration
  const steps = [
    { component: <WelcomeStep onStart={nextStep} />, hideNav: true },
    { component: <BasicInfoStep data={formData} update={updateFormData} />, title: "Basic Info" },
    { component: <SituationStep data={formData} update={updateFormData} />, title: "Situation" },
    { component: <PracticalStep data={formData} update={updateFormData} />, title: "Logistics" },
    { component: <CulturalStep data={formData} update={updateFormData} />, title: "Preferences" },
    { component: <ResultsStep data={formData} />, title: "Matches", hideNav: true }
  ];

  const currentStepData = steps[step];
  const isFirstStep = step === 0;
  const isLastStep = step === steps.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Top Progress Bar (skip on welcome) */}
      {!isFirstStep && !isLastStep && (
        <ProgressBar current={step} total={steps.length - 1} />
      )}

      {/* Header/Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-teal-700">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
              TM
            </div>
            TherapyMatch
          </div>
          {!isFirstStep && !isLastStep && (
             <span className="text-sm font-medium text-slate-400">
               Step {step} of {steps.length - 2}
             </span>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {currentStepData.component}
      </main>

      {/* Bottom Navigation */}
      {!currentStepData.hideNav && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-40">
          <div className="max-w-3xl mx-auto flex justify-between gap-4">
            <Button 
              variant="secondary" 
              onClick={prevStep}
              className="w-1/3"
            >
              <ChevronLeft size={20} /> Back
            </Button>
            
            <Button 
              onClick={nextStep}
              className="w-2/3"
            >
              {step === steps.length - 2 ? "Find My Matches" : "Next Step"} <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TherapyMatchApp;
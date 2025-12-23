// File: src/App.jsx
import React, { useState } from "react";
import { APP_STATE, ROLES } from "./constants"; 
import { ChevronRight, ChevronLeft, RotateCcw, Zap } from "lucide-react";
import {
  WelcomeStep,
  BasicInfoStep,
  SpecificNeedsStep,
  PracticalStep,
  CulturalStep,
} from "./components/FormSteps";
import { Button, ProgressBar, SectionTitle } from "./components/UI";
import { MOCK_THERAPISTS } from "./data/data";
import { AuthView } from "./components/auth/AuthView";
import { TherapistDetailModal } from "./components/TherapistDetailModal";
import { Dashboard } from "./components/Dashboard";
import { SavedMatchesView } from "./components/SavedMatchesView";
import { HeaderNav } from "./components/layout/HeaderNav";
import { TherapistOnboarding } from "./components/onboarding/TherapistOnboarding";

// Standardized initial form state to prevent "undefined" errors during reset
const INITIAL_FORM_DATA = {
  therapyType: "",
  history: "",
  concerns: [],
  approaches: [],
  format: "",
  budget: "",
  availability: [],
  qualities: [],
  cultureImp: 0,
  genderImp: 0,
  lgbtImp: 0,
};

// --- Results Component ---
const ResultsView = ({ onRestart, isLoggedIn, onPromptLogin, onOpenModal }) => (
  <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in-50 duration-700">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tighter">
        Your Ideal Matches Are Ready
      </h2>
      <p className="text-lg text-slate-600">
        Based on your assessment, these <strong>{MOCK_THERAPISTS.length} professionals</strong> are highly compatible.
      </p>
      
      {!isLoggedIn && (
        <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-lg max-w-xl mx-auto">
          <p className="text-sm font-medium text-teal-800 flex items-center justify-center">
            <Zap size={16} className="mr-2 text-teal-600" />
            You are viewing results as a guest. 
            <button
              onClick={onPromptLogin}
              className="text-teal-600 font-semibold ml-1 hover:text-teal-700 hover:underline transition"
            >
              Log in or Sign up
            </button>
            to save your progress permanently.
          </p>
        </div>
      )}
    </div>

    <div className="space-y-6">
      {MOCK_THERAPISTS.map((therapist) => (
        <div
          key={therapist.id}
          className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-teal-400"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-[200px]">
            <div className="p-6 flex flex-col items-center justify-center border-r border-slate-100 bg-slate-50">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-white shadow-md"
              />
              <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                {therapist.matchScore}% Match
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-bold text-slate-900">{therapist.name}</h3>
                  <span className="font-bold text-lg text-slate-700">
                    ${therapist.cost}
                    <span className="text-sm font-normal text-slate-500"> /session</span>
                  </span>
                </div>
                <p className="text-blue-600 font-medium mb-3 text-sm">{therapist.approach}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {therapist.specialties.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full font-medium border border-slate-200">
                      {tag}
                    </span>
                  ))}
                  {therapist.specialties.length > 4 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">
                      +{therapist.specialties.length - 4} more
                    </span>
                  )}
                </div>
                <p className="text-slate-500 italic text-sm border-l-2 pl-3 border-slate-200">
                  "{therapist.quote}"
                </p>
              </div>
              <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                <Button
                  variant="secondary"
                  className="py-2 text-sm text-slate-700 border border-slate-300 hover:bg-slate-100 flex-1"
                  onClick={() => onOpenModal(therapist)}
                >
                  View Profile
                </Button>
                <Button
                  className="py-2 text-sm bg-teal-600 hover:bg-teal-700 flex-1"
                  onClick={() => onOpenModal(therapist)}
                >
                  Schedule Consult
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 text-center">
      <Button variant="link" className="text-slate-600 hover:text-teal-600" onClick={onRestart}>
        <RotateCcw size={16} className="mr-2" /> Start New Assessment
      </Button>
    </div>
  </div>
);

function App() {
  const [appState, setAppState] = useState(APP_STATE.WELCOME);
  const [currentStep, setCurrentStep] = useState(0);
  const [authToken, setAuthToken] = useState(null);
  const [activeModal, setActiveModal] = useState(null);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Puzzle Logo Component
  const TherapyLogo = ({ size = 32, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16 8C16 5.79086 14.2091 4 12 4H6C4.89543 4 4 4.89543 4 6V12C4 14.2091 5.79086 16 8 16C10.2091 16 12 17.7909 12 20V26C12 27.1046 12.8954 28 14 28H16V8Z" fill="#0d9488" />
      <path d="M16 8V28H18C19.1046 28 20 27.1046 20 26V20C20 17.7909 21.7909 16 24 16C26.2091 16 28 14.2091 28 12V6C28 4.89543 27.1046 4 26 4H20C17.7909 4 16 5.79086 16 8Z" fill="#5eead4" />
    </svg>
  );

  const steps = [
    <BasicInfoStep formData={formData} setFormData={setFormData} />,
    <SpecificNeedsStep formData={formData} setFormData={setFormData} />,
    <PracticalStep formData={formData} setFormData={setFormData} />,
    <CulturalStep formData={formData} setFormData={setFormData} />,
  ];

  const totalWizardSteps = steps.length;
  const isLoggedIn = !!authToken;

  // --- Handlers ---
  const handleAuthSuccess = (token, role) => {
    setAuthToken(token);
    if (role === ROLES.THERAPIST) {
      setAppState(APP_STATE.THERAPIST_ONBOARDING);
    } else {
      setCurrentStep(0);
      setAppState(APP_STATE.WIZARD);
    }
  };

  const handleNext = () => {
    if (currentStep < totalWizardSteps - 1) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentStep((prev) => prev + 1);
    } else {
      setAppState(APP_STATE.RESULTS);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setAppState(isLoggedIn ? APP_STATE.DASHBOARD : APP_STATE.WELCOME);
    }
  };

  const handleLogout = () => {
    setAuthToken(null);
    setAppState(APP_STATE.WELCOME);
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(0);
  };

  const handleRestart = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(0);
    setAppState(APP_STATE.WIZARD);
  };

  const handleOpenModal = (therapist) => setActiveModal({ therapist });
  const handleCloseModal = () => setActiveModal(null);

  // --- Content Renderer (Cleaned logic) ---
  const renderContent = () => {
    switch (appState) {
      case APP_STATE.WELCOME:
        return (
          <WelcomeStep
            onStart={() => {
              setCurrentStep(0);
              setAppState(APP_STATE.WIZARD);
            }}
            onSkipAuth={() => setAppState(APP_STATE.AUTH)}
            TherapyLogo={TherapyLogo}
          />
        );

      case APP_STATE.AUTH:
        return (
          <AuthView
            onAuthSuccess={handleAuthSuccess}
            onContinueAsGuest={() => {
              setCurrentStep(0);
              setAppState(APP_STATE.WIZARD);
            }}
            TherapyLogo={TherapyLogo}
          />
        );

      case APP_STATE.DASHBOARD:
        return (
          <Dashboard
            userName={isLoggedIn ? "Sarah" : "Client"}
            onStartNewSearch={handleRestart}
            onContinueSearch={() => setAppState(APP_STATE.WIZARD)}
            onViewSavedMatches={() => setAppState(APP_STATE.SAVED_MATCHES)}
            onOpenTherapistOnboarding={() => setAppState(APP_STATE.THERAPIST_ONBOARDING)}
          />
        );

      case APP_STATE.WIZARD:
        return steps[currentStep];

      case APP_STATE.THERAPIST_ONBOARDING:
        return <TherapistOnboarding onFinish={() => setAppState(APP_STATE.DASHBOARD)} />;

      case APP_STATE.RESULTS:
        return (
          <ResultsView
            onRestart={() => setAppState(APP_STATE.WELCOME)}
            isLoggedIn={isLoggedIn}
            onPromptLogin={() => setAppState(APP_STATE.AUTH)}
            onOpenModal={handleOpenModal}
          />
        );

      case APP_STATE.SAVED_MATCHES:
        return (
          <SavedMatchesView
            onBackToDashboard={() => setAppState(APP_STATE.DASHBOARD)}
            onOpenModal={handleOpenModal}
          />
        );

      default:
        return <SectionTitle title="Error" subtitle="Something went wrong." />;
    }
  };

  const showFooterNav = appState === APP_STATE.WIZARD;

  const getBodyMaxWidthClass = () => {
    if ([APP_STATE.DASHBOARD, APP_STATE.RESULTS].includes(appState)) return "max-w-7xl";
    return "max-w-4xl";
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {showFooterNav && <ProgressBar current={currentStep + 1} total={totalWizardSteps} />}
      
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            className="font-bold text-xl text-teal-900 tracking-tight flex items-center gap-2 hover:opacity-80 transition"
            onClick={() => setAppState(isLoggedIn ? APP_STATE.DASHBOARD : APP_STATE.WELCOME)}
          >
            <TherapyLogo size={32} />
            TherapyMatch
          </button>
          
          <div className="flex items-center gap-4">
            {isLoggedIn && !showFooterNav && appState !== APP_STATE.AUTH && (
              <HeaderNav currentAppState={appState} onNavigate={setAppState} onLogout={handleLogout} />
            )}
            {isLoggedIn && (
              <button onClick={handleLogout} className="text-sm font-medium text-slate-500 hover:text-teal-600">
                Log Out
              </button>
            )}
          </div>
        </div>
      </header>

      <main className={`flex-1 w-full mx-auto px-4 py-8 md:py-12 ${getBodyMaxWidthClass()}`}>
        {renderContent()}
      </main>

      {showFooterNav && (
        <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
          <div className="max-w-2xl mx-auto flex justify-between gap-4">
            <Button variant="secondary" onClick={handleBack} className="w-1/3" disabled={currentStep === 0 && !isLoggedIn}>
              <ChevronLeft size={18} /> Back
            </Button>
            <Button onClick={handleNext} className="w-2/3 shadow-teal-200 shadow-lg bg-teal-700 hover:bg-teal-800">
              {currentStep === totalWizardSteps - 1 ? "See Matches" : "Next Step"}
              <ChevronRight size={18} />
            </Button>
          </div>
        </footer>
      )}

      {activeModal && (
        <TherapistDetailModal therapist={activeModal.therapist} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { 
    WelcomeStep, 
    BasicInfoStep, 
    SpecificNeedsStep, 
    PracticalStep, 
    CulturalStep 
} from './components/FormSteps';
import { APP_STATE } from './constants'; // CORRECT IMPORT
import { Button, ProgressBar, SectionTitle } from './components/UI';
import { MOCK_THERAPISTS } from './data'; 
import { AuthView } from './components/auth/AuthView';
import { TherapistDetailModal } from './components/TherapistDetailModal';
import { Dashboard } from './components/Dashboard';
import { SavedMatchesView } from './components/SavedMatchesView';
import { HeaderNav } from './components/HeaderNav';

// --- Results Component ---
const ResultsView = ({ onRestart, isLoggedIn, onPromptLogin, onOpenModal }) => ( 
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-8 duration-700">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Great news! We found matches.</h2>
            <p className="text-slate-600">Based on your specific requirements, these {MOCK_THERAPISTS.length} professionals are highly compatible.</p>
            
            {!isLoggedIn && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-lg mx-auto">
                    <p className="text-sm font-medium text-yellow-800">
                        You are viewing results as a guest. 
                        <button onClick={onPromptLogin} className="text-teal-600 ml-1 hover:underline">
                            Log in or Sign up
                        </button> 
                        to save your match history!
                    </p>
                </div>
            )}
        </div>

        <div className="space-y-6">
          {MOCK_THERAPISTS.map((therapist) => (
            <div key={therapist.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                    <div className="bg-slate-50 p-6 flex flex-col items-center justify-center md:w-48 shrink-0 border-b md:border-b-0 md:border-r border-slate-100">
                      <img src={therapist.image} alt={therapist.name} className="w-24 h-24 rounded-full object-cover mb-3 shadow-md border-2 border-white" />
                      <div className="bg-teal-100 text-teal-800 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                        {therapist.matchScore}% Match
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold text-slate-900">{therapist.name}</h3>
                              <span className="font-semibold text-slate-700">${therapist.cost}<span className="text-sm font-normal text-slate-500">/session</span></span>
                            </div>
                            <p className="text-teal-600 font-medium mb-3 text-sm">{therapist.approach}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {therapist.specialties.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-slate-500 italic text-sm mb-4">"{therapist.quote}"</p>
                        </div>

                        <div className="flex gap-3 mt-auto">
                            <Button className="flex-1 py-2 text-sm" onClick={() => onOpenModal(therapist)}>View Profile</Button>
                            <Button variant="secondary" className="flex-1 py-2 text-sm" onClick={() => onOpenModal(therapist)}>Schedule Consult</Button>
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="text" onClick={onRestart}>
            <RotateCcw size={16} /> Start New Assessment
          </Button>
        </div>
    </div>
);


function App() {
  const [appState, setAppState] = useState(APP_STATE.WELCOME);
  const [currentStep, setCurrentStep] = useState(0);
  const [authToken, setAuthToken] = useState(null); 
  const [activeModal, setActiveModal] = useState(null);
  
  // FIX: Full formData initialization
  const [formData, setFormData] = useState({
    therapyType: '',
    history: '',
    concerns: [],
    approaches: [],
    format: '',
    budget: '',
    availability: [],
    qualities: [],
    cultureImp: 0,
    genderImp: 0,
    lgbtImp: 0
  });

  // FIX: Full steps array definition
  const steps = [
    <BasicInfoStep formData={formData} setFormData={setFormData} />,
    <SpecificNeedsStep formData={formData} setFormData={setFormData} />,
    <PracticalStep formData={formData} setFormData={setFormData} />,
    <CulturalStep formData={formData} setFormData={setFormData} />
  ];
  
  const totalWizardSteps = steps.length;
  const isLoggedIn = !!authToken;

  // --- Handlers ---
  const handleAuthSuccess = (token) => {
    setAuthToken(token);
    setAppState(APP_STATE.DASHBOARD); 
    setCurrentStep(0);
  };
  
  const handleNext = () => {
    if (currentStep < totalWizardSteps - 1) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentStep(prev => prev + 1);
    } else {
      setAppState(APP_STATE.RESULTS);
    }
  };
  
  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    } else {
      setAppState(isLoggedIn ? APP_STATE.DASHBOARD : APP_STATE.WELCOME); 
    }
  };
  
  const handleLogout = () => { 
    setAuthToken(null);
    setAppState(APP_STATE.WELCOME);
    setFormData({});
  };

  const handleRestart = () => {
    setAuthToken(null);
    setFormData({ 
        therapyType: '', history: '', concerns: [], approaches: [], format: '', 
        budget: '', availability: [], qualities: [], cultureImp: 0, genderImp: 0, lgbtImp: 0
    });
    setAppState(APP_STATE.WELCOME);
    setCurrentStep(0);
  };

  const handleOpenModal = (therapist) => { setActiveModal({ therapist }); };
  const handleCloseModal = () => { setActiveModal(null); };

  // --- Content Renderer ---
  const renderContent = () => {
    switch (appState) {
      case APP_STATE.WELCOME:
        return (
          <WelcomeStep 
            onStart={() => setAppState(isLoggedIn ? APP_STATE.WIZARD : APP_STATE.AUTH)}
            onSkipAuth={() => setAppState(APP_STATE.AUTH)}
          />
        );
      case APP_STATE.AUTH:
        return (
          <AuthView 
            onAuthSuccess={handleAuthSuccess}
            onContinueAsGuest={() => setAppState(APP_STATE.WIZARD)} 
          />
        );
      case APP_STATE.DASHBOARD:
          return (
              <Dashboard 
                  userName={isLoggedIn ? "Sarah" : "Client"}
                  onStartNewSearch={() => { setFormData({}); setCurrentStep(0); setAppState(APP_STATE.WIZARD); }}
                  onContinueSearch={() => setAppState(APP_STATE.WIZARD)}
                  onViewSavedMatches={() => setAppState(APP_STATE.SAVED_MATCHES)}
              />
          );
      case APP_STATE.WIZARD:
        return steps[currentStep];
      case APP_STATE.RESULTS:
        return (
          <ResultsView 
            onRestart={handleRestart} 
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

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      
      {/* Progress Bar (Visible during Wizard) */}
      {showFooterNav && (
        <ProgressBar current={currentStep + 1} total={totalWizardSteps} />
      )}

      {/* Header (UPDATED FOR NAVIGATION) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button 
             className="font-bold text-xl text-teal-700 tracking-tight flex items-center gap-2"
             onClick={() => setAppState(isLoggedIn ? APP_STATE.DASHBOARD : APP_STATE.WELCOME)}
          >
            <div className="w-8 h-8 bg-teal-600 rounded-lg"></div> TherapyMatch
          </button>
          
          {/* RENDER NEW NAVIGATION BAR IF LOGGED IN AND NOT IN WIZARD/AUTH */}
          {isLoggedIn && !showFooterNav && appState !== APP_STATE.AUTH && (
              <HeaderNav 
                  currentAppState={appState}
                  onNavigate={setAppState}
                  onLogout={handleLogout}
              />
          )}
          
          {/* Simple logout button fallback */}
          {isLoggedIn && (showFooterNav || appState === APP_STATE.WELCOME || appState === APP_STATE.AUTH) && (
              <button 
                  onClick={handleLogout}
                  className="text-sm font-medium text-slate-500 hover:text-teal-600"
              >
                  Log Out
              </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className={`flex-1 w-full mx-auto px-4 py-8 md:py-12 ${showFooterNav ? 'max-w-2xl' : 'max-w-4xl'}`}>
        {renderContent()}
      </main>

      {/* Footer Navigation (Visible during Wizard) */}
      {showFooterNav && (
        <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-40">
          <div className="max-w-2xl mx-auto flex justify-between gap-4">
            <Button 
              variant="secondary" 
              onClick={handleBack} 
              className="w-1/3"
              disabled={currentStep === 0}
            >
              <ChevronLeft size={18} /> Back
            </Button>
            
            <Button onClick={handleNext} className="w-2/3 shadow-teal-200 shadow-lg">
              {currentStep === totalWizardSteps - 1 ? "See Matches" : "Next Step"}
              <ChevronRight size={18} />
            </Button>
          </div>
        </footer>
      )}

      {/* Therapist Detail Modal */}
      {activeModal && (
        <TherapistDetailModal 
          therapist={activeModal.therapist}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
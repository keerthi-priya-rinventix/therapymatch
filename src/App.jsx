// File: src/App.jsx

import React, { useState } from 'react';
import { APP_STATE } from './constants';
import { ChevronRight, ChevronLeft, RotateCcw, Zap } from 'lucide-react';
import { 
    WelcomeStep, 
    BasicInfoStep, 
    SpecificNeedsStep, 
    PracticalStep, 
    CulturalStep 
} from './components/FormSteps';
import { Button, ProgressBar, SectionTitle } from './components/UI';
import { MOCK_THERAPISTS } from './data'; 
import { AuthView } from './components/auth/AuthView';
import { TherapistDetailModal } from './components/TherapistDetailModal';
import { Dashboard } from './components/Dashboard';
import { SavedMatchesView } from './components/SavedMatchesView';
import { HeaderNav } from './components/HeaderNav';

// --- Results Component (Cleaned and Modern Aesthetic) ---
const ResultsView = ({ onRestart, isLoggedIn, onPromptLogin, onOpenModal }) => ( 
    <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in-50 duration-700">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tighter">Your Ideal Matches Are Ready</h2>
            <p className="text-lg text-slate-600">Based on your assessment, these **{MOCK_THERAPISTS.length} professionals** are highly compatible.</p>
            
            {/* Guest Alert - Styled for a modern, subtle look */}
            {!isLoggedIn && (
                <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-lg max-w-xl mx-auto">
                    <p className="text-sm font-medium text-teal-800 flex items-center justify-center">
                        <Zap size={16} className="mr-2 text-teal-600" />
                        You are viewing results as a guest. 
                        <button onClick={onPromptLogin} className="text-teal-600 font-semibold ml-1 hover:text-teal-700 hover:underline transition">
                            Log in or Sign up
                        </button> 
                        to save your progress permanently.
                    </p>
                </div>
            )}
        </div>

        <div className="space-y-6">
            {MOCK_THERAPISTS.map((therapist) => (
               
                <div key={therapist.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 hover:border-teal-400">
                   
                    <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] min-h-[200px]">
                        
                       <div className="p-6 flex flex-col items-center justify-center border-r border-slate-100 bg-slate-50">
                            <img 
                                src={therapist.image} 
                                alt={therapist.name} 
                                className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-white shadow-md" 
                            />
                            {/* Match Score Badge: High contrast, teal accent */}
                            <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                {therapist.matchScore}% Match
                            </div>
                        </div>
                        
                        <div className="p-6 flex flex-col justify-between">
                            <div className="mb-4">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-2xl font-bold text-slate-900">{therapist.name}</h3>
                                    {/* Cost: Styled minimally */}
                                    <span className="font-bold text-lg text-slate-700">
                                        ${therapist.cost}
                                        <span className="text-sm font-normal text-slate-500">/session</span>
                                    </span>
                                </div>
                                <p className="text-blue-600 font-medium mb-3 text-sm">{therapist.approach}</p>
                                
                                {/* Specialties Tags (Max 4 displayed + count) */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {therapist.specialties.slice(0, 4).map(tag => (
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
                                
                                <p className="text-slate-500 italic text-sm border-l-2 pl-3 border-slate-200">"{therapist.quote}"</p>
                            </div>

                            {/* Action Buttons: Clean separation, Primary for Schedule */}
                            <div className="flex gap-3 mt-auto pt-4 border-t border-slate-100">
                                <Button 
                                    variant="secondary" 
                                    className="py-2 text-sm text-slate-700 border border-slate-300 hover:bg-slate-100 flex-1" 
                                    onClick={() => onOpenModal(therapist)}
                                >
                                    View Full Profile
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
    
    // Full formData initialization
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

    // Full steps array definition
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

    // Determine max width based on the current app state
    const getBodyMaxWidthClass = () => {
        switch (appState) {
            case APP_STATE.DASHBOARD:
            case APP_STATE.RESULTS:
                return 'max-w-7xl'; // Wide layout for data-heavy views
            case APP_STATE.WIZARD:
                return 'max-w-2xl'; // Narrow for form focus
            default:
                return 'max-w-4xl'; // Standard centered layout
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
            
            {/* Progress Bar (Visible during Wizard) */}
            {showFooterNav && (
                <ProgressBar current={currentStep + 1} total={totalWizardSteps} />
            )}

            {/* Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
                {/* Header max-width set to a medium size for clean look */}
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
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

            {/* Main Content: Dynamically set max-width */}
            <main className={`flex-1 w-full mx-auto px-4 py-8 md:py-12 ${getBodyMaxWidthClass()}`}>
                {renderContent()}
            </main>

            {/* Footer Navigation (Visible during Wizard) */}
            {showFooterNav && (
                <footer className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-40">
                    {/* Wizard Footer is centered in a narrow column */}
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
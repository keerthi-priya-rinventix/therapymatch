import React from 'react';
import { Button, SectionTitle } from './UI';
import { Heart, List, Search } from 'lucide-react';

export const Dashboard = ({ userName = 'Client', onStartNewSearch, onContinueSearch, onViewSavedMatches }) => {
    
    // Determine if there's saved progress (a real app checks API data here)
    const hasSavedProgress = true; 

    return (
        <div className="max-w-3xl mx-auto py-12 animate-in fade-in duration-500">
            <SectionTitle
                title={`Hello, ${userName}!`}
                subtitle="Your journey to find the perfect therapist starts here."
            />
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                
                {/* 1. Continue/Start New Search */}
                <div className="col-span-2 bg-white p-8 rounded-2xl shadow-lg border border-teal-100">
                    <div className="flex items-center gap-3 mb-4">
                        <Search className="text-teal-600 w-6 h-6" />
                        <h3 className="text-xl font-bold text-slate-800">
                            {hasSavedProgress ? 'Continue Your Search' : 'Find a Therapist'}
                        </h3>
                    </div>
                    <p className="text-slate-600 mb-5">
                        {hasSavedProgress 
                            ? "Jump back into your last session or start a new, refined search."
                            : "Start the personalized 5-minute questionnaire to get your first matches."
                        }
                    </p>
                    {hasSavedProgress ? (
                        <div className="flex gap-3">
                            <Button onClick={onContinueSearch}>Resume Progress</Button>
                            <Button variant="secondary" onClick={onStartNewSearch}>Start Fresh</Button>
                        </div>
                    ) : (
                        <Button onClick={onStartNewSearch} className="w-full">Start Assessment</Button>
                    )}
                </div>

                {/* 2. View Saved Matches */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 flex flex-col justify-between">
                    <div>
                        <List className="text-blue-500 w-6 h-6 mb-3" />
                        <h3 className="text-lg font-bold text-slate-800 mb-2">My Matches</h3>
                        <p className="text-sm text-slate-600">Review therapists you've contacted or saved.</p>
                    </div>
                    <Button onClick={onViewSavedMatches} variant="secondary" className="mt-4">
                        View History
                    </Button>
                </div>
            </div>
            
            {/* Optional: Educational Resources */}
            <div className="mt-12 text-center text-sm text-slate-500">
                <p>Need help? Visit our <a href="#" className="text-teal-600 hover:underline">Resource Center</a>.</p>
            </div>
        </div>
    );
};
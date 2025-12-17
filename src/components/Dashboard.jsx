// File: src/components/Dashboard.jsx
import React, { useState } from "react";
import { 
  Briefcase, 
  HelpCircle, 
  User, 
  ArrowRight,
  List,
  RotateCcw,
  CalendarCheck,
  Zap,
  BookOpen,
  Heart,
  Star,
  FileText,
  CheckCircle,
  X
} from "lucide-react";

// Import Shared UI Components
import { Button } from "./UI/Button";

// Assuming these files exist in your structure
import { UsageMetricsChart } from "./UsageMetricsChart"; 
import { KEY_METRICS } from "../data"; 

// --- Mock State & Data ---
const userProgress = {
  quizCompleted: true,
  quizStep: 3,
  newMatches: 5,
  upcomingConsults: 1,
  therapyUrgency: "Immediate (within days)",
};

// --- Shadcn/UI Component Simulations ---
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-slate-100">{children}</div>
);

const CardContent = ({ children, className = "p-6" }) => (
  <div className={className}>{children}</div>
);

const QuickMetricCard = ({ title, value, icon: Icon, colorClass }) => (
  <Card className="hover:border-teal-400 transition duration-200">
    <CardContent className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {title}
        </h4>
        <Icon size={18} className={colorClass} />
      </div>
      <p className="text-3xl font-bold text-slate-900">{value}</p>
    </CardContent>
  </Card>
);

// --- PrimaryActionCard ---
const PrimaryActionCard = ({ userProgress, onStartNewSearch, onContinueSearch, onViewSavedMatches }) => {
  const isCompleted = userProgress.quizCompleted;
  const accentColor = isCompleted ? "teal" : "indigo";

  return (
    <Card className={`p-8 border-l-8 border-${accentColor}-500 transition-all duration-300`}>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-3">
            {isCompleted ? <List size={24} className="text-teal-600" /> : <RotateCcw size={24} className="text-indigo-600" />}
            {isCompleted ? "Matches Ready for Review" : "Resume Your Personalized Assessment"}
          </h2>
          <p className="text-base text-slate-600">
            {isCompleted 
              ? `We found ${userProgress.newMatches} compatible therapists tailored to your needs. Start exploring now.`
              : `Continue from Step ${userProgress.quizStep} of 5 to unlock your full match list.`}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button
            className={`flex-1 py-2 text-base text-white ${isCompleted ? "bg-teal-600 hover:bg-teal-700" : "bg-indigo-600 hover:bg-indigo-700"}`}
            onClick={isCompleted ? onViewSavedMatches : onContinueSearch}
          >
            {isCompleted ? "View Matches Now" : "Continue Assessment"} <ArrowRight size={16} className="ml-1" />
          </Button>
          <Button variant="secondary" onClick={onStartNewSearch}>
            {isCompleted ? "Start New Search" : "Start Over"}
          </Button>
        </div>
      </div>
    </Card>
  );
};

// --- MAIN DASHBOARD COMPONENT ---
export const Dashboard = ({
  userName = "Alex",
  onStartNewSearch,
  onContinueSearch,
  onViewSavedMatches,
  onOpenTherapistOnboarding,
}) => {
  // Logic for the Support Hub Toggles
  const [activeView, setActiveView] = useState(null); // 'compare' | 'resources' | null

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* HEADING AND WELCOME */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-teal-600 tracking-tight">
            Welcome back, {userName}
          </h1>
          <p className="text-base text-slate-500 mt-1">
            Your personalized dashboard to manage matches and monitor your progress.
          </p>
        </div>

        {/* THERAPIST ONBOARDING ACTION CARD */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="p-6 bg-white border border-slate-300 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-50 rounded-full">
                <Briefcase size={32} className="text-teal-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Are you a Licensed Therapist?</h3>
                <p className="text-sm text-slate-500">Join the TherapyMatch network to get matched with new clients.</p>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={onOpenTherapistOnboarding}
              className="py-2 px-6 border-teal-600 text-teal-600 hover:bg-teal-50"
            >
              Start Onboarding
            </Button>
          </div>
        </div>

        {/* 1. PRIMARY ACTION */}
        <PrimaryActionCard
          userProgress={userProgress}
          onStartNewSearch={onStartNewSearch}
          onContinueSearch={onContinueSearch}
          onViewSavedMatches={onViewSavedMatches}
        />

        {/* 2. MAIN GRID: Upcoming Consults & Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <Card className="md:col-span-2">
            <CardHeader>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <CalendarCheck size={20} className="text-blue-600" /> Upcoming Consults
              </h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {userProgress.upcomingConsults > 0 ? (
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Consult with Dr. Sarah Chen</p>
                    <p className="text-xs text-blue-700 font-medium mt-0.5 italic">Today, 2:00 PM - 2:30 PM EST</p>
                  </div>
                  <Button variant="ghost" className="text-blue-600 hover:bg-blue-100 font-bold" onClick={() => alert("Opening Meeting Details...")}>
                    Join Meeting
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic py-2">No confirmed consultations this week.</p>
              )}
              <Button variant="link" className="text-sm text-blue-600 p-0 h-auto flex items-center" onClick={() => alert("Full Schedule Page")}>
                View Full Schedule <ArrowRight size={14} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-1 space-y-4">
            <QuickMetricCard title="Therapy Urgency" value="Immediate" icon={Zap} colorClass="text-red-500" />
            <QuickMetricCard title="Saved Matches" value={KEY_METRICS.userSavedMatches} icon={Heart} colorClass="text-pink-500" />
          </div>
        </div>

        {/* 3. GUIDED DECISION SUPPORT HUB SECTION */}
        <div className="space-y-4">
          <Card className="mt-8 border-teal-100 bg-teal-50/10">
            <CardContent className="py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-3">
                <BookOpen size={24} className="text-teal-600 shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900">Guided Decision Support Hub</h3>
                  <p className="text-slate-500 text-sm mt-0.5">
                    Evaluate your matches side-by-side and explore resources to finalize your choice.
                  </p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0 md:ml-auto shrink-0">
                  <Button
                    variant="secondary"
                    className={`text-sm border border-teal-300 ${activeView === 'compare' ? 'bg-teal-100' : 'hover:bg-teal-50'}`}
                    onClick={() => setActiveView(activeView === 'compare' ? null : 'compare')} 
                  >
                    {activeView === 'compare' ? 'Close Comparison' : 'Compare Matches'}
                  </Button>
                  <Button
                    className="text-sm bg-teal-600 hover:bg-teal-700 text-white"
                    onClick={() => setActiveView(activeView === 'resources' ? null : 'resources')} 
                  >
                    {activeView === 'resources' ? 'Close Resources' : 'View Resources'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DYNAMIC VIEW: COMPARISON TOOL */}
          {activeView === 'compare' && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md animate-in slide-in-from-top-4 duration-300">
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-slate-800 text-lg">Therapist Comparison Tool</h4>
                <Button variant="ghost" size="sm" onClick={() => setActiveView(null)}><X size={18} /></Button>
              </div>
              
              <div className="overflow-x-auto rounded-lg border border-slate-100 mb-6">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="p-4 text-slate-400 font-medium uppercase text-[10px] tracking-wider">Criteria</th>
                      <th className="p-4 font-bold text-teal-800">Dr. Sarah Chen</th>
                      <th className="p-4 font-bold text-teal-800">James Wilson, LPC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50">
                      <td className="p-4 font-medium text-slate-600">Overall Fit Score</td>
                      <td className="p-4 text-teal-600 font-bold text-lg italic">94%</td>
                      <td className="p-4 text-teal-600 font-bold text-lg italic">88%</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="p-4 font-medium text-slate-600">Style</td>
                      <td className="p-4">Direct & Goal-Oriented</td>
                      <td className="p-4">Gentle & Reflective</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-slate-600">Availability</td>
                      <td className="p-4 text-green-600 font-medium">This Week</td>
                      <td className="p-4 text-slate-500 italic">2 Week Wait</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex gap-3">
                <HelpCircle size={20} className="text-blue-600 shrink-0" />
                <div>
                  <h5 className="font-bold text-blue-900 text-sm">Guided Question for Selection:</h5>
                  <p className="text-blue-700 text-xs mt-1 leading-relaxed italic">
                    "Do I feel more ready for Dr. Chen's immediate, direct feedback, or do I need the gentler, reflective pace offered by James Wilson?"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC VIEW: RESOURCES */}
          {activeView === 'resources' && (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-md animate-in slide-in-from-top-4 duration-300">
              <h4 className="font-bold text-slate-800 mb-4">Therapy Approach Resources</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Understanding CBT vs. DBT", desc: "Which methodology matches your goals?" },
                  { title: "First Consult Checklist", desc: "5 questions to ask your prospective therapist." },
                  { title: "Insurance Claims 101", desc: "How to handle out-of-network reimbursements." },
                  { title: "Privacy & Data Safety", desc: "How we protect your therapeutic journey." }
                ].map((res, i) => (
                  <div key={i} className="flex items-center p-4 hover:bg-slate-50 border border-slate-100 rounded-xl cursor-pointer group transition-all">
                    <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors mr-4">
                      <FileText size={20} className="text-teal-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{res.title}</p>
                      <p className="text-xs text-slate-500">{res.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  );
};
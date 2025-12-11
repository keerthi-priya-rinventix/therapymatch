// File: src/components/Dashboard.jsx

import React from "react";
import { Briefcase, User } from "lucide-react";
import { Button } from "./UI/Button";

// Using Lucide icons and clean, modern colors
import {
  ArrowRight,
  List,
  RotateCcw,
  CalendarCheck,
  Zap,
  BookOpen,
  Heart,
  Star,
} from "lucide-react";

// Assuming these files exist in your structure
import { UsageMetricsChart } from "./UsageMetricsChart"; 
import { KEY_METRICS } from "../data"; 

// Mock state (replace with actual state logic)
const userProgress = {
  quizCompleted: true,
  quizStep: 3,
  newMatches: 5,
  upcomingConsults: 1,
  therapyUrgency: "Immediate (within days)",
};

// --- Shadcn/UI Component Simulations ---

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-xl border border-slate-200 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 border-b border-slate-100">{children}</div>
);

const CardContent = ({ children, className = "p-6" }) => (
  <div className={className}>{children}</div>
);

// --- QuickMetricCard: Simple, high-contrast numbers ---
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
// --- End Component Simulations ---

// --- PrimaryActionCard: Full-width, high-priority banner ---
const PrimaryActionCard = ({
  userProgress,
  onStartNewSearch,
  onContinueSearch,
  onViewSavedMatches,
}) => {
  // Choose between Teal for success or Indigo for incomplete tasks
  const isCompleted = userProgress.quizCompleted;
  const accentColor = isCompleted ? "teal" : "indigo";

  return (
    <Card
      className={`p-8 border-l-8 border-${accentColor}-500 transition-all duration-300`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-3">
            {isCompleted ? (
              <List size={24} className="text-teal-600" />
            ) : (
              <RotateCcw size={24} className="text-indigo-600" />
            )}
            {isCompleted
              ? "Matches Ready for Review"
              : "Resume Your Personalized Assessment"}
          </h2>
          <p className="text-base text-slate-600">
            {isCompleted
              ? `We found ${userProgress.newMatches} compatible therapists tailored to your needs. Start exploring now.`
              : `Continue from Step ${userProgress.quizStep} of 5 to unlock your full match list.`}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button
            className={`flex-1 py-2 text-base ${
              isCompleted
                ? "bg-teal-600 hover:bg-teal-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            onClick={isCompleted ? onViewSavedMatches : onContinueSearch}
          >
            {isCompleted ? "View Matches Now" : "Continue Assessment"}{" "}
            <ArrowRight size={16} />
          </Button>
          <Button
            variant="secondary"
            className="py-2 text-base text-slate-700 border border-slate-300 hover:bg-slate-100"
            onClick={onStartNewSearch}
          >
            {isCompleted ? "Start New Search" : "Start Over"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
// --- End PrimaryActionCard ---

export const Dashboard = ({
  userName,
  onStartNewSearch,
  onContinueSearch,
  onViewSavedMatches,
  onOpenTherapistOnboarding, // <-- New prop for the therapist flow
}) => {
  // --- Secondary Button Handlers (NOW USING alert() FOR VISIBLE FEEDBACK) ---
  const handleViewDetails = () => {
    // Placeholder: Opens a modal with appointment details.
    alert(
      "Action: View Details button clicked. (Placeholder for opening appointment details modal)"
    );
  };

  const handleViewSchedule = () => {
    // Placeholder: Navigates to the full scheduling page.
    alert(
      "Action: View Full Schedule button clicked. (Placeholder for navigating to the schedule page)"
    );
  };

  const handleCompare = () => {
    // Placeholder: Navigates to a match comparison tool.
    alert(
      "Action: Compare Matches button clicked. (Placeholder for navigating to comparison tool)"
    );
  };

  const handleViewResources = () => {
    // Placeholder: Navigates to the educational resources hub.
    alert(
      "Action: View Resources button clicked. (Placeholder for navigating to resources hub)"
    );
  };
  // -------------------------------------------------------------------------

  return (
    // Outer wrapper uses a very light gray background for a clean, studio feel
    <div className="min-h-screen bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        {/* HEADING AND WELCOME */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-teal-600 tracking-tight">
            Welcome back, {userName}
          </h1>
          <p className="text-base text-slate-500 mt-1">
            Your personalized dashboard to manage matches and monitor your
            progress.
          </p>
        </div>
        
        {/* --- THERAPIST ONBOARDING ACTION CARD --- */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="p-6 bg-white border border-slate-300 rounded-xl shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Briefcase size={32} className="text-teal-600" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Are you a Licensed Therapist?
                </h3>
                <p className="text-sm text-slate-500">
                  Join the TherapyMatch network to get matched with new clients.
                </p>
              </div>
            </div>

            {/* BUTTON TO TRIGGER THE ONBOARDING FLOW */}
            <Button
              variant="secondary"
              onClick={onOpenTherapistOnboarding} // <-- Correct Usage
              className="py-2 px-6 border-blue-800 text-blue-600 hover:bg-blue-50"
            >
              Start Onboarding
            </Button>
          </div>
        </div>

        {/* 1. PRIMARY ACTION (Full Width Banner) */}
        <PrimaryActionCard
          userProgress={userProgress}
          onStartNewSearch={onStartNewSearch}
          onContinueSearch={onContinueSearch}
          onViewSavedMatches={onViewSavedMatches}
        />

        {/* 2. MAIN GRID: Upcoming Consults & Quick Status (Two Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {/* 2a. UPCOMING CONSULTS (2/3 width) - Focus on the immediate task */}
          <Card className="md:col-span-2">
            <CardHeader>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                <CalendarCheck size={20} className="text-blue-600" /> Upcoming
                Consults
              </h3>
            </CardHeader>
            <CardContent className="space-y-4 p-3">
              {userProgress.upcomingConsults > 0 ? (
                <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Consult with Dr. Johnson
                    </p>
                    <p className="text-xs text-blue-700 font-medium mt-0.5">
                      Today, 2:00 PM - 3:00 PM EST
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:bg-blue-100"
                    onClick={handleViewDetails} 
                  >
                    View Details
                  </Button>
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic py-2">
                  No confirmed consultations this week.
                </p>
              )}
              <Button
                variant="link"
                className="text-sm text-blue-600 hover:text-blue-700 p-0 h-auto"
                onClick={handleViewSchedule} 
              >
                View Full Schedule <ArrowRight size={14} className="ml-1" />
              </Button>
            </CardContent>
          </Card>

          {/* 2b. QUICK METRICS (1/3 width) - Stacked status cards */}
          <div className="md:col-span-1 space-y-4">
            <QuickMetricCard
              title="Therapy Urgency"
              value={userProgress.therapyUrgency.split(" ")[0]}
              icon={Zap}
              colorClass="text-red-500"
            />
            <QuickMetricCard
              title="Saved Matches"
              value={KEY_METRICS.userSavedMatches}
              icon={Heart}
              colorClass="text-pink-500"
            />
            <QuickMetricCard
              title="Platform Score"
              value={"4.8 / 5"}
              icon={Star}
              colorClass="text-amber-500"
            />
          </div>
        </div>

        {/* 3. DECISION SUPPORT & RESOURCES (Full Width Banner) */}
        <Card className="mt-8">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 p-3">
              <BookOpen size={24} className="text-teal-600 shrink-0" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">
                  Guided Decision Support Hub
                </h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  Access comparison tools and educational resources to finalize
                  your therapist choice.
                </p>
              </div>
              <div className="flex gap-3 mt-4 md:mt-0 md:ml-auto shrink-0">
                <Button
                  variant="secondary"
                  className="text-sm text-teal-600 border border-teal-300 hover:bg-teal-50"
                  onClick={handleCompare} 
                >
                  Compare Matches
                </Button>
                <Button
                  className="text-sm bg-teal-600 hover:bg-teal-700"
                  onClick={handleViewResources} 
                >
                  View Resources
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 4. USAGE METRICS CHART (Full Width) */}
        <Card className="mt-10 ">
          <CardHeader>
            <h2 className="text-lg font-semibold text-slate-800 tracking-tight p-2">
              Engagement History
            </h2>
          </CardHeader>
          <CardContent>
            <UsageMetricsChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
import { Button, SectionTitle } from "../UI";
import DashboardCard from "./DashboardCard";

export const Dashboard = ({
  userName = "User",
  role = "patient",
  onStartNewSearch,
  onContinueSearch,
  onViewSavedMatches,
  onOpenTherapistOnboarding,
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-8">
      {/* Header */}
      <SectionTitle
        title={`Welcome back, ${userName}`}
        subtitle={
          role === "therapist"
            ? "Manage your profile and client matches"
            : "Continue your therapy matching journey"
        }
      />

      {/* Patient Dashboard */}
      {role === "patient" && (
        <div className="grid md:grid-cols-3 gap-6">
          <DashboardCard
            title="Start a New Search"
            description="Find therapists that match your current needs."
            actionLabel="Start Assessment"
            onAction={onStartNewSearch}
          />

          <DashboardCard
            title="Continue Assessment"
            description="Resume where you left off."
            actionLabel="Continue"
            onAction={onContinueSearch}
          />

          <DashboardCard
            title="Saved Matches"
            description="View therapists you’ve saved."
            actionLabel="View Matches"
            onAction={onViewSavedMatches}
          />
        </div>
      )}

      {/* Therapist Dashboard */}
      {role === "therapist" && (
        <div className="grid md:grid-cols-2 gap-6">
          <DashboardCard
            title="Complete Your Profile"
            description="Finish onboarding to start receiving matches."
            actionLabel="Continue Onboarding"
            onAction={onOpenTherapistOnboarding}
          />

          <DashboardCard
            title="Your Availability"
            description="Manage session availability and pricing."
            actionLabel="Manage Availability"
            onAction={() => alert("Coming soon")}
          />
        </div>
      )}
    </div>
  );
};




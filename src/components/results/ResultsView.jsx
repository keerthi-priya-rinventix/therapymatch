import { Button, SectionTitle } from "../UI";

const ResultsView = ({
  isLoggedIn,
  onRestart,
  onPromptLogin,
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-10 py-8">
      {/* Header */}
      <SectionTitle
        title="Your Matches Are Ready"
        subtitle="Based on your responses, here are therapists who may be a great fit."
      />

      {/* Guest warning */}
      {!isLoggedIn && (
        <div className="p-4 rounded-lg bg-teal-50 border border-teal-200">
          <p className="text-sm text-teal-800">
            You’re viewing results as a guest.{" "}
            <button
              onClick={onPromptLogin}
              className="font-semibold underline hover:text-teal-700"
            >
              Log in or sign up
            </button>{" "}
            to save your matches.
          </p>
        </div>
      )}

      {/* Mock results (replace with real data later) */}
      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            className="border rounded-xl p-6 bg-white shadow-sm space-y-3"
          >
            <h3 className="font-bold text-lg">Therapist {id}</h3>
            <p className="text-sm text-slate-500">
              Integrative · Anxiety · Stress
            </p>
            <Button className="w-full">View Profile</Button>
          </div>
        ))}
      </div>

      {/* Restart */}
      <div className="text-center pt-6">
        <Button variant="secondary" onClick={onRestart}>
          Start New Assessment
        </Button>
      </div>
    </div>
  );
};

export default ResultsView;

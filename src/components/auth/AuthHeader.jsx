export const AuthHeader = ({ mode, role }) => {
  return (
    <div className="mb-6 text-center">
      <h1 className="text-2xl font-bold text-slate-800">
        {mode === "signup" ? "Create Account" : "Welcome Back"}
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        {role === "therapist" ? "Provider" : "Patient"} Portal
      </p>
    </div>
  );
};

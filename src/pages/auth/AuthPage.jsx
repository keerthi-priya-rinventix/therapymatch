import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthView } from "../components/auth/AuthView";

const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const mode = useMemo(() => {
    return location.pathname.includes("signup") ? "signup" : "login";
  }, [location.pathname]);
  const role = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("role") === "therapist" ? "therapist" : "patient";
  }, [location.search]);
  const handleAuthSuccess = (data) => {
    console.log("Auth success:", data);

    if (role === "therapist") {
      navigate("/provider/dashboard");
    } else {
      navigate("/patient/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <AuthView
        mode={mode}
        role={role}
        onSuccess={handleAuthSuccess}
      />
    </div>
  );
};

export default AuthPage;

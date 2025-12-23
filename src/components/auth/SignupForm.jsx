import { Mail, Lock, User } from "lucide-react";
import { Button } from "../UI/Button";
import { SocialAuth } from "./SocialAuth";

export const SignupForm = ({ role, onSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    onSuccess({
      method: "signup",
      username: form.get("username"),
      email: form.get("email"),
      password: form.get("password"),
    });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Username */}
      <div className="space-y-1 text-left">
        <label className="text-[10px] font-bold text-slate-500 uppercase">
          Username
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            name="username"
            type="text"
            placeholder="yourusername"
            required
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1 text-left">
        <label className="text-[10px] font-bold text-slate-500 uppercase">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            name="email"
            type="email"
            placeholder="name@email.com"
            required
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none"
          />
        </div>
      </div>

      {/* Password */}
      <div className="space-y-1 text-left">
        <label className="text-[10px] font-bold text-slate-500 uppercase">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            required
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 outline-none"
          />
        </div>
      </div>

      <Button className="w-full bg-teal-600 py-4 mt-2 font-bold" type="submit">
        Create {role === "therapist" ? "Provider" : "Patient"} Account
      </Button>
    </form>
  );
};

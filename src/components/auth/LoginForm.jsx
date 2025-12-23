import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { Button } from '../UI/Button';
import { SocialAuth } from './SocialAuth';

export const LoginForm = ({ role, onSuccess }) => (
  <form
    className="space-y-4"
    onSubmit={(e) => {
      e.preventDefault();
      onSuccess({ method: 'password' });
    }}
  >
    

    <div className="space-y-1 text-left">
      <label className="text-[10px] font-bold text-slate-500 uppercase">
        Email
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-3 text-slate-400" size={18} />
        <input
          type="email"
          required
          placeholder="name@email.com"
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none"
        />
      </div>
    </div>

    <div className="space-y-1 text-left">
      <label className="text-[10px] font-bold text-slate-500 uppercase">
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-3 text-slate-400" size={18} />
        <input
          type="password"
          required
          placeholder="••••••••"
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none"
        />
      </div>
    </div>
    

    <Button className="w-full mx-auto bg-teal-600 py-4 mt-2 font-bold shadow-lg shadow-teal-600/20">
      Log In as {role === 'therapist' ? 'Provider' : 'Patient'}
    </Button>

    <p className="flex items-center justify-center gap-1 text-[10px] text-slate-400 mt-4 uppercase font-bold">
      <ShieldCheck size={12} className="text-teal-500" />
      HIPAA-Secure Access
    </p>
  </form>
);

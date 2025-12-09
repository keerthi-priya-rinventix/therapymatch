import React, { useState } from 'react';
import { Button, SectionTitle } from '../UI';
import { Mail, Lock, LogIn, UserPlus } from 'lucide-react';

// Shared Form Logic for Login and Signup
const AuthForm = ({ isLogin, onAuthSuccess, onSwitch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const buttonText = isLogin ? 'Log In' : 'Sign Up';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // --- DUMMY AUTH LOGIC ---
      console.log(`${buttonText} attempt with:`, { email, password });
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      if (password.length < 6) {
         throw new Error("Password must be at least 6 characters.");
      }
      
      // Simulate success and get a token
      const fakeToken = `Bearer-token-${isLogin ? 'login' : 'signup'}-123`;
      onAuthSuccess(fakeToken); 

    } catch (err) {
      setError(err.message || `${buttonText} failed. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-500 max-w-sm mx-auto p-8 bg-white rounded-xl shadow-2xl border border-slate-100">
      <SectionTitle 
        title={buttonText}
        subtitle={isLogin ? "Log in to access your profile." : "Create your free account to save your match."}
      />
      
      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Email Address</label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">Password</label>
          <div className="relative">
            <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 transition duration-150"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
            {error}
          </p>
        )}

        <Button 
          type="submit"
          className="w-full py-3 text-lg mt-2" 
          disabled={isLoading || !email || !password}
        >
          {isLoading ? 'Processing...' : (
            isLogin ? <><LogIn size={20} /> Log In</> : <><UserPlus size={20} /> Sign Up</>
          )}
        </Button>
      </form>
      
      <div className="text-center mt-6 text-sm">
        <p className="text-slate-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button 
            type="button" 
            onClick={onSwitch} 
            className="text-teal-600 font-semibold hover:text-teal-700 ml-1"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </p>
      </div>
    </div>
  );
};


// Main Auth View Container
export const AuthView = ({ onAuthSuccess, onContinueAsGuest }) => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <AuthForm 
        isLogin={isLogin} 
        onAuthSuccess={onAuthSuccess} 
        onSwitch={() => setIsLogin(p => !p)} 
      />
      <Button 
        variant="text" 
        onClick={onContinueAsGuest} 
        className="mt-6 text-slate-500 hover:text-teal-600"
      >
        Continue as Guest
      </Button>
    </div>
  );
};
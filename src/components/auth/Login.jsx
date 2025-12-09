import React, { useState } from 'react';
import { Button, SectionTitle } from '../UI';
import { Mail, Lock, LogIn } from 'lucide-react';

const Login = ({ onLoginSuccess, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // DUMMY BACKEND CALL - Replace with your actual API integration
      console.log('Attempting login with:', { email, password });
      
      // Simulate network delay and API response
      await new Promise(resolve => setTimeout(resolve, 1500)); 

      if (email === 'test@example.com' && password === 'password123') {
        const fakeToken = 'Bearer-faked-jwt-token-12345';
        onLoginSuccess(fakeToken); // Pass the token/user data up to App.jsx
      } else {
        throw new Error("Invalid email or password.");
      }

    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-500 max-w-sm mx-auto p-8 bg-white rounded-xl shadow-lg border border-slate-100">
      <SectionTitle 
        title="Welcome Back"
        subtitle="Log in to access your saved profile and matches."
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
          {isLoading ? 'Logging In...' : <><LogIn size={20} /> Log In</>}
        </Button>
      </form>
      
      <div className="text-center mt-6 text-sm">
        <p className="text-slate-500">
          Don't have an account? 
          <button 
            type="button" 
            onClick={onSwitchToSignup} 
            className="text-teal-600 font-semibold hover:text-teal-700 ml-1"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { ROLES } from '../../constants';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';
import { RoleSelector } from './RoleSelector';
import { SocialAuth } from './SocialAuth';
import { Card } from '../UI/Card';

export const AuthView = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState('login'); // 'login' | 'signup'
  const [role, setRole] = useState(ROLES.PATIENT);

  const toggleMode = () => setMode(mode === 'login' ? 'signup' : 'login');

  return (
    <div className="max-w-md mx-auto py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="text-slate-500 text-sm mt-2 font-medium">
            Access your secure {role} portal
          </p>
        </div>

        <RoleSelector activeRole={role} onRoleChange={setRole} />

        {mode === 'login' ? (
          <LoginForm onAuthSuccess={(token) => onAuthSuccess(token, role)} />
        ) : (
          <SignupForm onAuthSuccess={(token) => onAuthSuccess(token, role)} />
        )}


        <SocialAuth />

        <div className="mt-8 text-center">
          <button onClick={toggleMode} className="text-sm font-bold text-teal-600 hover:text-teal-700 transition">
            {mode === 'login' ? "New to TherapyMatch? Create an account" : "Already have an account? Sign in"}
          </button>
        </div>
      </Card>
    </div>
  );
};
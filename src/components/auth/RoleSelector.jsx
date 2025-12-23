import React from 'react';
import { ROLES } from '../../constants';
import { User, Stethoscope } from 'lucide-react';

export const RoleSelector = ({ activeRole, onRoleChange }) => (
  <div className="flex bg-slate-100 p-1 rounded-2xl mb-8">
    <button
      onClick={() => onRoleChange(ROLES.PATIENT)}
      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all
        ${activeRole === ROLES.PATIENT ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <User size={14} /> Patient
    </button>
    <button
      onClick={() => onRoleChange(ROLES.THERAPIST)}
      className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all
        ${activeRole === ROLES.THERAPIST ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
    >
      <Stethoscope size={14} /> Therapist
    </button>
  </div>
);
import React, { useState } from 'react';
import { SectionTitle, Button } from './UI';
import { Heart, CheckCircle, Mail } from 'lucide-react';
import { MOCK_THERAPISTS } from '../data';

const MOCK_HISTORY = [
    { ...MOCK_THERAPISTS[0], status: 'Contacted', date: '2024-10-01' },
    { ...MOCK_THERAPISTS[2], status: 'Saved', date: '2024-09-28' },
];

export const SavedMatchesView = ({ onBackToDashboard, onOpenModal }) => {
    const [filter, setFilter] = useState('All'); // 'All', 'Saved', 'Contacted', 'Booked'

    const filteredMatches = MOCK_HISTORY.filter(match => 
        filter === 'All' || match.status === filter
    );

    const getStatusIcon = (status) => {
        if (status === 'Contacted') return <Mail size={16} className="text-blue-500" />;
        if (status === 'Saved') return <Heart size={16} className="text-red-500" />;
        if (status === 'Booked') return <CheckCircle size={16} className="text-green-500" />;
        return null;
    };

    return (
        <div className="max-w-4xl mx-auto py-12 animate-in fade-in duration-500">
            <SectionTitle
                title="Your Match History"
                subtitle="Review therapists you've viewed, saved, or reached out to."
            />

            <div className="flex gap-3 justify-center mb-8">
                {['All', 'Saved', 'Contacted'].map(f => (
                    <Button 
                        key={f} 
                        variant={filter === f ? 'primary' : 'secondary'}
                        onClick={() => setFilter(f)}
                        className="py-2 text-sm"
                    >
                        {f}
                    </Button>
                ))}
            </div>

            <div className="space-y-4">
                {filteredMatches.length > 0 ? (
                    filteredMatches.map(match => (
                        <div key={match.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center justify-between transition-shadow hover:shadow-md">
                            <div className="flex items-center gap-4">
                                <img src={match.image} alt={match.name} className="w-16 h-16 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-lg text-slate-800">{match.name}</h4>
                                    <p className="text-sm text-slate-500">{match.approach}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-700">
                                    {getStatusIcon(match.status)}
                                    {match.status}
                                </div>
                                <Button onClick={() => onOpenModal(match)} className="py-2 text-sm">
                                    View Details
                                </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center p-12 bg-slate-100 rounded-xl text-slate-600">
                        No matches found under the '{filter}' filter.
                    </div>
                )}
            </div>

            <div className="mt-8 text-center">
                <Button variant="text" onClick={onBackToDashboard}>
                    Back to Dashboard
                </Button>
            </div>
        </div>
    );
};
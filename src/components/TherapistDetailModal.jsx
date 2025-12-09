import React, { useState } from 'react';
// FIX: Added 'Check' to the imports list.
import { X, Clock, MapPin, DollarSign, Calendar, MessageSquare, Check } from 'lucide-react'; 
import { Button } from './UI';

const ContactForm = ({ therapistName, onClose }) => {
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSend = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        if (!date) {
            alert("Please select a preferred date and time.");
            return;
        }

        setIsSending(true);
        
        // --- DUMMY API CALL: Replace with POST /api/v1/therapists/{id}/contact ---
        console.log(`Sending consult request to ${therapistName} for ${date}`);
        try {
            // Simulate network delay and successful API response
            await new Promise(resolve => setTimeout(resolve, 1500)); 
            setIsSent(true);
        } catch (error) {
            console.error("Consult request failed:", error);
            alert("Failed to send request. Please try again.");
            setIsSending(false);
        }
        // End DUMMY API CALL
    };

    if (isSent) {
        return (
            <div className="text-center p-6 bg-white rounded-b-xl">
                <Check className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">Request Sent Successfully!</h3>
                <p className="text-slate-600">
                    A secure message has been sent to **{therapistName}**. They will respond to your preferred contact method shortly.
                </p>
                <Button onClick={onClose} className="mt-6">Close</Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSend} className="p-6">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <MessageSquare size={20} className="text-teal-600"/> Request a Consultation
            </h3>
            <div className="space-y-4">
                <p className="text-sm text-slate-600">You are requesting a consult with **{therapistName}**.</p>
                
                <label className="block">
                    <span className="text-sm font-medium text-slate-700">Preferred Session Date/Time</span>
                    <input 
                        type="datetime-local" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full p-3 border border-slate-300 rounded-lg mt-1 focus:ring-teal-500"
                        required
                    />
                </label>
                
                <label className="block">
                    <span className="text-sm font-medium text-slate-700">Message (Optional)</span>
                    <textarea 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)}
                        rows="3"
                        placeholder="Briefly describe what you're looking for..."
                        className="w-full p-3 border border-slate-300 rounded-lg mt-1 focus:ring-teal-500"
                    ></textarea>
                </label>

                <Button 
                    type="submit" // Set type to submit for proper form handling
                    disabled={!date || isSending}
                    className="w-full"
                >
                    {isSending ? 'Sending...' : 'Confirm Request'}
                </Button>
            </div>
        </form>
    );
};

export const TherapistDetailModal = ({ therapist, onClose }) => { // Removed onSchedule as it's handled internally
    const [isScheduling, setIsScheduling] = useState(false);
    
    // DUMMY DATA FOR DEMO - (Details remain the same)
    const fullDetails = {
        ...therapist,
        bio: "Dr. Johnson specializes in Emotionally Focused Therapy (EFT) to help couples break negative communication cycles. She has 15 years of experience helping clients navigate life transitions, infidelity, and co-parenting challenges. She maintains a collaborative and non-judgmental stance, believing that both partners hold the key to relationship success.",
        languages: ["English"],
        education: "Ph.D. in Marriage and Family Therapy, University of California, Berkeley",
        practiceLocation: "123 Main St, Suite 400, Anytown, CA (Hybrid Practice)",
        insuranceAccepted: ["BCBS", "Aetna", "Cigna"]
    };

    return (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-70 z-50 flex justify-center items-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-in zoom-in duration-300">
                
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-2 rounded-full bg-white hover:bg-slate-100 z-10 shadow-md"
                >
                    <X size={20} className="text-slate-600" />
                </button>

                <div className="flex flex-col md:flex-row">
                    {/* Left: Info Column */}
                    <div className={`p-6 md:w-1/2 ${isScheduling ? 'hidden md:block' : ''}`}>
                        {/* ... (Content remains the same) ... */}
                        <div className="text-center mb-6">
                            <img src={fullDetails.image} alt={fullDetails.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-teal-500 shadow-lg" />
                            <h2 className="text-2xl font-bold text-slate-900">{fullDetails.name}</h2>
                            <p className="text-teal-600 font-medium">{fullDetails.title || 'Therapist'}</p>
                        </div>

                        <div className="space-y-4 border-t border-slate-100 pt-4">
                            <h3 className="font-semibold text-lg text-slate-700">About Me</h3>
                            <p className="text-sm text-slate-600">{fullDetails.bio}</p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 gap-4 text-sm pt-2">
                                <p><Clock size={16} className="inline mr-2 text-teal-500"/> **Rate:** ${fullDetails.cost}/session</p>
                                <p><MapPin size={16} className="inline mr-2 text-teal-500"/> **Format:** {fullDetails.practiceLocation.includes('Hybrid') ? 'Hybrid' : 'Virtual'}</p>
                                <p><Calendar size={16} className="inline mr-2 text-teal-500"/> **Education:** {fullDetails.education.split(',')[0]}</p>
                                <p><DollarSign size={16} className="inline mr-2 text-teal-500"/> **Insurance:** {fullDetails.insuranceAccepted.length > 2 ? 'Multiple' : fullDetails.insuranceAccepted.join(', ')}</p>
                            </div>
                            
                            <h3 className="font-semibold text-lg text-slate-700 pt-2">Specialties</h3>
                            <div className="flex flex-wrap gap-2">
                                {fullDetails.specialties.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Right: Action/Schedule Column */}
                    <div className="md:w-1/2 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-200">
                        {isScheduling ? (
                            <ContactForm therapistName={fullDetails.name} onClose={onClose} />
                        ) : (
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-4">Ready to Connect?</h3>
                                <p className="text-slate-600 mb-6">
                                    Use the secure contact form below to request a first meeting or call.
                                </p>

                                <div className="bg-white p-4 rounded-lg border border-teal-200 mb-6">
                                    <p className="font-medium text-slate-800">Next Steps:</p>
                                    <ul className="list-disc list-inside text-sm text-slate-600 mt-2 space-y-1">
                                        <li>Submit your preferred time.</li>
                                        <li>The therapist will confirm their availability.</li>
                                        <li>Schedule a free 15-minute introductory call.</li>
                                    </ul>
                                </div>

                                <Button 
                                    onClick={() => setIsScheduling(true)} 
                                    className="w-full py-3 text-lg shadow-teal-300 shadow-md"
                                >
                                    Schedule Consult
                                </Button>
                                <Button onClick={onClose} variant="secondary" className="w-full mt-3">
                                    Back to Matches
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
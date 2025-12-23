import { Clock, ShieldCheck, Save, ArrowRight } from 'lucide-react'; // Ensure you have these icons

const WelcomeStep = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 max-w-xl mx-auto text-center space-y-8 animate-in fade-in duration-500">
      
      {/* Hero Section */}
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
            {/* Larger version of the logo for the hero */}
           <div className="p-4 bg-teal-50 rounded-full">
              <TherapyLogo size={64} />
           </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Welcome to TherapyMatch!
        </h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
          Finding the right therapist shouldn't be stressful. Our guided process will help you 
          connect with professionals who truly understand your unique needs.
        </p>
      </div>

      {/* Info Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 w-full shadow-sm text-left">
        <h3 className="font-semibold text-slate-900 mb-4 text-lg">Before we begin:</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3 text-slate-600">
            <Clock className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>This process takes about <strong>5-7 minutes</strong></span>
          </li>
          <li className="flex items-start gap-3 text-slate-600">
            <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>All information is <strong>confidential and protected</strong></span>
          </li>
          <li className="flex items-start gap-3 text-slate-600">
            <Save className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <span>You can <strong>save your progress</strong> and return anytime</span>
          </li>
        </ul>
      </div>

      {/* CTA Button */}
      <div className="w-full pt-2">
        <h3 className="text-lg font-medium text-slate-900 mb-4">
          Ready to find your therapeutic match?
        </h3>
        <button 
          onClick={onStart}
          className="w-full bg-teal-700 hover:bg-teal-800 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
        >
          Let's get started <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
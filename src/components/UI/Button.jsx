export const Button = ({ variant = 'primary', children, onClick, className = "", disabled, type = 'button' }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2";
  const styles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 disabled:bg-teal-300 shadow-sm hover:shadow-md",
    secondary: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 disabled:opacity-50",
    text: "text-slate-500 hover:text-teal-600 px-4"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled} 
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

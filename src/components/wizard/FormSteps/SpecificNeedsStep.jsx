const SpecificNeedsStep = ({ formData, setFormData }) => {
  const toggleConcern = (concern) => {
    setFormData((prev) => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern],
    }));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">
        What are you struggling with?
      </h3>

      {["Anxiety", "Depression", "Stress"].map((c) => (
        <label key={c} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.concerns.includes(c)}
            onChange={() => toggleConcern(c)}
          />
          {c}
        </label>
      ))}
    </div>
  );
};
  
export default SpecificNeedsStep;
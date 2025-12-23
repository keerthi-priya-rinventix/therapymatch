 const PracticalStep = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold">Your budget</h3>

    <select
      value={formData.budget}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          budget: e.target.value,
        }))
      }
      className="w-full border rounded-lg p-3"
    >
      <option value="">Select budget</option>
      <option value="50-100">$50–$100</option>
      <option value="100-150">$100–$150</option>
    </select>
  </div>
);

export default PracticalStep;
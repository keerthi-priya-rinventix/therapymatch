 const BasicInfoStep = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold">What brings you here?</h3>

    <select
      value={formData.therapyType}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          therapyType: e.target.value,
        }))
      }
      className="w-full border rounded-lg p-3"
    >
      <option value="">Select therapy type</option>
      <option value="individual">Individual Therapy</option>
      <option value="couples">Couples Therapy</option>
    </select>
  </div>
);

export default BasicInfoStep;
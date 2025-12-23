 const CulturalStep = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold">
      Cultural preferences matter to you?
    </h3>

    <input
      type="range"
      min="0"
      max="5"
      value={formData.cultureImp}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          cultureImp: Number(e.target.value),
        }))
      }
      className="w-full"
    />
  </div>
);
 export default CulturalStep;
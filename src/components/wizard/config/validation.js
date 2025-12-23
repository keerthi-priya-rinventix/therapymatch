// components/wizard/config/validation.js
export const canProceed = (stepId, formData) => {
  switch (stepId) {
    case "basic":
      return Boolean(formData.therapyType);
    case "practical":
      return Boolean(formData.budget);
    default:
      return true;
  }
};

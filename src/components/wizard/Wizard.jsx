// components/wizard/Wizard.jsx
import { useState } from "react";
import { WIZARD_STEPS } from "./config/wizardSteps";
import { canProceed } from "./config/validation";
import { WizardFooter } from "./WizardFooter";
import { WizardProgress } from "./WizardProgress";

export const Wizard = ({ formData, setFormData, onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = WIZARD_STEPS[stepIndex];
  const StepComponent = currentStep.component;

  const handleNext = () => {
    if (stepIndex < WIZARD_STEPS.length - 1) {
      setStepIndex(stepIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  return (
    <>
      <WizardProgress
        current={stepIndex + 1}
        total={WIZARD_STEPS.length}
        title={currentStep.title}
      />

      <StepComponent
        formData={formData}
        setFormData={setFormData}
      />

      <WizardFooter
        onBack={handleBack}
        onNext={handleNext}
        isFirst={stepIndex === 0}
        isLast={stepIndex === WIZARD_STEPS.length - 1}
        canProceed={canProceed(currentStep.id, formData)}
      />
    </>
  );
};

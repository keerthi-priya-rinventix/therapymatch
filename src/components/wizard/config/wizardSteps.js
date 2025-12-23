// components/wizard/config/wizardSteps.js
import {
  BasicInfoStep,
  SpecificNeedsStep,
  PracticalStep,
  CulturalStep,
} from "../FormSteps";

export const WIZARD_STEPS = [
  {
    id: "basic",
    title: "About You",
    component: BasicInfoStep,
  },
  {
    id: "needs",
    title: "Your Needs",
    component: SpecificNeedsStep,
  },
  {
    id: "practical",
    title: "Logistics",
    component: PracticalStep,
  },
  {
    id: "cultural",
    title: "Preferences",
    component: CulturalStep,
  },
];

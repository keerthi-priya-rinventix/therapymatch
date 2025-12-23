// components/wizard/WizardFooter.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../UI";
export const WizardFooter = ({
  onBack,
  onNext,
  isFirst,
  isLast,
  canProceed,
}) => (
  <footer className="bg-white border-t p-4 sticky bottom-0">
    <div className="max-w-2xl mx-auto flex gap-4">
      <Button
        variant="secondary"
        onClick={onBack}
        disabled={isFirst}
        className="w-1/3"
      >
        <ChevronLeft size={18} /> Back
      </Button>

      <Button
        onClick={onNext}
        disabled={!canProceed}
        className="w-2/3"
      >
        {isLast ? "See Matches" : "Next Step"}
        <ChevronRight size={18} />
      </Button>
    </div>
  </footer>
);

import { ProgressBar } from "../UI";


export const WizardProgress = ({ current, total, title }) => (
  <div className="mb-8">
    <ProgressBar current={current} total={total} />
    <h2 className="text-xl font-bold text-center mt-4">
      {title}
    </h2>
  </div>
);

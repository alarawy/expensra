import { getColor } from "../../utils";

const ProgressBar = ({ percentage, variant = "budgets", className }) => {
  return (
    <div className={`bg-secondary h-2 flex-1 overflow-hidden rounded-full ${className}`}>
      <span
        className={`flex h-2 rounded-full transition-all duration-500 ${getColor(variant, percentage)}`}
        style={{ width: `${Math.min(percentage, 100)}%` }}
      />
    </div>
  );
};

export default ProgressBar;

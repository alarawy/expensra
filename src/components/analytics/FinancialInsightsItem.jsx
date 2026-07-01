import { cardStyle } from "../../utils";
import { Text } from "../common";

const FinancialInsightsItem = ({ type, icon, children }) => {
  const color = cardStyle[type];

  return (
    <div className="flex items-center gap-2 py-1">
      <span className={`rounded-sm p-2 font-bold ${color.bg}`}>
        <span className={color.text}>{icon}</span>
      </span>

      <p className="text-md text-secondary font-semibold">{children}</p>
    </div>
  );
};

export default FinancialInsightsItem;
import { useGoalsSummary } from "../../hooks";
import { Text } from "../common";
import { GoalsProgressBar } from "./index";

const SavingsProgressCard = () => {
  const goalsSummary = useGoalsSummary();

  return (
    <div className="card m-0 border-0">
      <Text
        tagElement="h3"
        i18nKey="goals.savingProgressTitle"
        className="text-accent text-xl font-semibold"
      />

      <GoalsProgressBar
        current={goalsSummary.current}
        total={goalsSummary.total}
      />
    </div>
  );
};

export default SavingsProgressCard;

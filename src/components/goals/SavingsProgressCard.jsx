import { useGoalsSummary } from "../../hooks";
import { Text } from "../common";
import { GoalsProgressBar } from "./index";

const SavingsProgressCard = () => {
  const goalsSummary = useGoalsSummary();

  return (
    <div className="card m-0 border-0">
      <Text
        tagElement="h2"
        i18nKey="goals.savingProgressTitle"
        className="section-heading text-accent mb-0"
      />

      <GoalsProgressBar
        current={goalsSummary.current}
        total={goalsSummary.total}
      />
    </div>
  );
};

export default SavingsProgressCard;

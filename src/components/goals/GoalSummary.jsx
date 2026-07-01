import GoalCard from "./GoalCard";
import {
  GoGoal,
  IoPieChartOutline,
  IoWalletOutline,
} from "../../assets/icons/icons";

const GoalSummary = ({ goal }) => {
  const remaining = goal?.target_amount - goal?.saved_amount;

  return (
    <div className="border-default flex-around flex-wrap divide-gray-700 rounded-md p-4 md:divide-x">
      <GoalCard title="spent" amount={goal?.saved_amount}>
        <IoWalletOutline />
      </GoalCard>

      <GoalCard title="target" amount={goal?.target_amount}>
        <GoGoal />
      </GoalCard>

      <GoalCard title="remaining" amount={remaining}>
        <IoPieChartOutline />
      </GoalCard>
    </div>
  );
};

export default GoalSummary;

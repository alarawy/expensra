import { ProgressBar, Text } from "../common";

const BudgetProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const progressPercentage = Math.min(100, Number(percentage.toFixed(0)));

  return (
    <div className="m-auto my-5 w-[90%]">
      <div className="flex-between text-sm">
        <div className="flex-start text-secondary rtl:flex-row-reverse">
          <strong className="text-primary px-1">${current} </strong>
          <span> / </span>
          <span className="pr-1"> ${total} </span>
          <Text i18nKey="budget.goal" />
        </div>

        <span>{progressPercentage}%</span>
      </div>

      <ProgressBar percentage={progressPercentage} />
    </div>
  );
};

export default BudgetProgressBar;

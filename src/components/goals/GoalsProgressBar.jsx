import { formatPrice } from "../../utils";
import { ProgressBar, Text } from "../common";

const GoalsProgressBar = ({ current, total }) => {
  const percentage = (current / total) * 100;
  const progressPercentage = Math.min(100, Number(percentage.toFixed(0))) || 0;

  return (
    <div className="m-auto my-10 w-[90%]">
      <div className="flex-between text-sm">
        <div className="flex-center text-secondary">
          <Text
            tagElement="h3"
            i18nKey="goals.title"
            className="text-xl font-bold"
          >
            :
          </Text>
          <div className="flex-center pt-1">
            <strong className="text-primary ml-1 px-1">
              {formatPrice(current)}
            </strong>
            <span> / </span>
            <span className="px-1"> {formatPrice(total)}</span>
          </div>
        </div>

        <span>{progressPercentage}%</span>
      </div>

      <div className="mt-3 mb-10">
        <ProgressBar percentage={progressPercentage} variant = "goals" />
      </div>
    </div>
  );
};

export default GoalsProgressBar;

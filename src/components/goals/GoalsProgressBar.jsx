import { useTranslation } from "react-i18next";
import { formatPrice } from "../../utils";
import { ProgressBar, Text } from "../common";

const GoalsProgressBar = ({ current, total }) => {
    const { i18n } = useTranslation();

  const percentage = (current / total) * 100;
  const progressPercentage = Math.min(100, Number(percentage.toFixed(0))) || 0;

  return (
    <div className="m-auto my-5 w-[90%]">
      <div className="flex-between text-sm">
        <div className="flex-center text-secondary">
          <Text
            tagElement="h5"
            i18nKey="goals.saved"
            className="text-lg font-semibold"
          >
            :
          </Text>
          <div className="flex-center pt-1">
            <strong className="text-primary ml-1 px-1">
              {formatPrice(current, i18n.language)}
            </strong>
            <span> / </span>
            <span className="px-1"> {formatPrice(total, i18n.language)}</span>
          </div>
        </div>

        <span>{progressPercentage}%</span>
      </div>

      <div className="mt-3 mb-5">
        <ProgressBar percentage={progressPercentage} variant = "goals" />
      </div>
    </div>
  );
};

export default GoalsProgressBar;

import { useTranslation } from "react-i18next";
import { Text } from "../common";
import { AddToSavingsOption, RollOverOption } from "./index";
import { useMonthlySummary } from "../../hooks";
import { formatPrice } from "../../utils";
import { FaArrowCircleRight } from "../../assets/icons/icons";

const LeftoverDecisionCard = () => {
  const { totalBalance } = useMonthlySummary();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="card m-0 mb-8 border-0">
      <div className="flex-start gap-1">
        <FaArrowCircleRight
          className={`text-accent ${isRTL ? "rotate-180" : ""} `}
        />
        <Text
          tagElement="p"
          i18nKey="goals.leftoverLabel"
          className="text-secondary"
        >
          <strong>{formatPrice(totalBalance)}</strong>
        </Text>
      </div>
      <Text
        tagElement="h3"
        i18nKey="goals.leftoverQuestion"
        className="text-2xl font-semibold"
      />

      <div className="mt-4 space-y-4">
        <RollOverOption />
        <AddToSavingsOption />
      </div>
    </div>
  );
};

export default LeftoverDecisionCard;

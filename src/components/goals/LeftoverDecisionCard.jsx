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
    <div className="card m-0 mb-3 border-0">
      <div className="flex-start gap-1">
        <FaArrowCircleRight
          className={`text-accent ${isRTL ? "rotate-180" : ""} `}
        />
        <Text
          tagElement="p"
          i18nKey="goals.leftoverLabel"
          className="text-secondary text-sm"
        >
          <strong>{formatPrice(totalBalance, i18n.language)}</strong>
        </Text>
      </div>
      <Text
        tagElement="h3"
        i18nKey="goals.leftoverQuestion"
        className="text-xl font-semibold"
      />

      <div className="mt-3 flex flex-col md:flex-row gap-5">
        <RollOverOption />
        <AddToSavingsOption />
      </div>
    </div>
  );
};

export default LeftoverDecisionCard;

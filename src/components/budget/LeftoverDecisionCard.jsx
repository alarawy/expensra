import { Text } from "../common";
import { FaArrowCircleRight  } from "../../assets/icons/icons";
import {AddToSavingsOption, RollOverOption } from "./index";
import { useTranslation } from "react-i18next";

const LeftoverDecisionCard = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <div className="card border-0 m-0 mb-8">
      <div className="flex-start gap-1">
        <FaArrowCircleRight className={`text-accent ${isRTL ? 'rotate-180' : ""} `} />
        <Text tagElement="p" i18nKey="budget.leftoverLabel" className="text-secondary" ><strong>$140</strong></Text>
      </div>
      <Text tagElement="h3" i18nKey="budget.leftoverQuestion"  className="text-2xl font-semibold" />

      <div className="mt-4 space-y-4">
        <RollOverOption />
        <AddToSavingsOption />
      </div>
    </div>
  );
};

export default LeftoverDecisionCard;

import { Text } from "../../common";
import { IoArrowRedoSharp  } from "../../../assets/icons/icons";
import { useTranslation } from "react-i18next";

const SummaryCards = ({ i18nKey, amount, changePercent, children }) => {
    const { i18n } = useTranslation();
    const isRTL = i18n.language === "ar";
    
  return (
    <div className="card">
      <div className="flex-between">
        <Text i18nKey={i18nKey} className="text-muted font-semibold" />
        <span className="text-accent text-lg">{children}</span>
      </div>
      <h3 className="text-2xl font-bold">{`$${amount}`}</h3>
      <span className="flex-start gap-2 text-accent font-semibold">
        <span className={`${isRTL ? 'rotate-y-180' : ""}`}><IoArrowRedoSharp /></span>
        + {changePercent} %
      </span>
    </div>
  );
};

export default SummaryCards;

import { useTranslation } from "react-i18next";
import { cardStyle, formatPrice } from "../../utils";
import { Text } from "../common";

const AnalyticsCard = ({ title, amount = 0, type, children }) => {
  const { i18n } = useTranslation();
  const color = cardStyle[type];

  return (
    <div className={`bg-secondary m-1 rounded-md border py-3 ${color.border}`}>
      <div className="flex-start md:text flex-col gap-1 text-center md:flex-row md:gap-0 md:text-start">
        <span className={`mx-2 rounded-full p-2 font-bold ${color.bg}`}>
          <span className={color.text}>{children}</span>
        </span>

        <Text
          tagElement="p"
          i18nKey={`analysis.${title}`}
          className="text-secondary text-xs"
        />
      </div>

      <Text
        tagElement="h6"
        className={`mt-1 text-center text-sm font-semibold ${color.text}`}
      >
        {formatPrice(amount, i18n.language)}
      </Text>
    </div>
  );
};

export default AnalyticsCard;

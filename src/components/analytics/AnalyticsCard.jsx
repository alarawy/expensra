import { cardStyle, formatPrice } from "../../utils";
import { Text } from "../common";

const AnalyticsCard = ({ title, amount = 0, type, children }) => {
  const color = cardStyle[type];

  return (
    <div className={`bg-secondary m-1 rounded-md border py-3 ${color.border}`}>
      <div className="flex-start flex-col md:flex-row text-center md:text gap-1 md:gap-0 md:text-start">
        <span className={`mx-2 rounded-full p-2  font-bold ${color.bg}`}>
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
        className={`text-center text-sm font-semibold mt-1 ${color.text}`}
      >
        {formatPrice(amount)}
      </Text>
    </div>
  );
};

export default AnalyticsCard;

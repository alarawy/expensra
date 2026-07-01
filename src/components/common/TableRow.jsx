import { useTranslation } from "react-i18next";
import { formatPrice, formatTranslatedText } from "../../utils";

const TableRow = ({ item, children }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.category, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(Number(item.amount))}</p>
      <p className="flex-1">{item.date}</p>
      <p className="flex-1 truncate rtl:text-end">{item.description}</p>
      {children}
    </div>
  );
};

export default TableRow;

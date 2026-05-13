import { useTranslation } from "react-i18next";
import { formatPrice, formatTranslatedText } from "../../utils";
import { TransactionActions } from "./transactions";

const TableRow = ({ item, id, onDelete }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="border-bottom flex items-center px-3 py-5">
      <p className="flex-1">
        {formatTranslatedText(item.category, "categories", t, i18n)}
      </p>
      <p className="flex-1">{formatPrice(Number(item.amount))}</p>
      <p className="flex-1">{item.date}</p>
      <p className="flex-1 truncate rtl:text-end">{item.description}</p>

      <TransactionActions id={id} onDelete={onDelete} />
    </div>
  );
};

export default TableRow;

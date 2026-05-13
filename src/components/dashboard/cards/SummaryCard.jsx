import { Spinner, Text } from "../../common";
import { IoArrowRedoSharp } from "../../../assets/icons/icons";
import { formatPrice } from "../../../utils";

const SummaryCards = ({ i18nKey, amount, children, isPending }) => {
  return (
    <div className="card">
      <div className="flex-between">
        <Text i18nKey={i18nKey} className="text-muted font-semibold" />
        <span className="text-accent text-lg">{children}</span>
      </div>
      {isPending ? (
        <Spinner />
      ) : (
        <h3 className="py-5 text-4xl font-semibold">
          {formatPrice(Number(amount))}
        </h3>
      )}
    </div>
  );
};

export default SummaryCards;

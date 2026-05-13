import { useDeleteTransaction } from "../../../hooks";
import { normalizeData } from "../../../utils";
import { BudgetRow } from "../../budget";
import { TransactionRow } from "../../transactions";
import TableRow from "../TableRow";

const TransactionsTableRow = ({ data, variant }) => {
  const { mutate: deleteTransaction } = useDeleteTransaction();
  return (
    <>
      {data?.map((item, index) => {
        const normalizedItem = normalizeData(item, variant);

        if (variant === "budget") {
          return <BudgetRow key={index} item={normalizedItem} />;
        }
        if (variant === "transactions") {
          return <TransactionRow key={index} item={normalizedItem} />;
        }

        return (
          <TableRow
            key={index}
            id={item.id}
            item={normalizedItem}
            onDelete={deleteTransaction}
          />
        );
      })}
    </>
  );
};

export default TransactionsTableRow;

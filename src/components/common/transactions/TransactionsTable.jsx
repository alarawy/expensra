import { Text } from "../index";
import { TransactionsTableHeader, TransactionsTableRow } from "./index";

const TransactionsTable = ({ data, variant }) => {
  const tableHeader = ["category", "amount", "date", "description"];

  switch (variant) {
    case "transactions":
      tableHeader.unshift("type");
      break;
    case "income":
      tableHeader.splice(0, 1, "source");
      tableHeader.push("actions");
      break;
    default:
      break;
  }

  const i18Key =
    variant === "income"
      ? "income.allIncomeRecords"
      : variant === "transactions"
        ? "transactions.allTransactions"
        : "expenses.allExpenseRecords";

  return (
    <div className="overflow-x-auto">
      <div className="bg-primary mt-8 min-w-xl rounded-lg p-5 lg:p-10">
        <Text
          tagElement="h4"
          i18nKey={i18Key}
          className="text-accent text-xl font-semibold"
        />
        <TransactionsTableHeader tableHeader={tableHeader} />
        <TransactionsTableRow
          data={data}
          tableHeader={tableHeader}
          variant={variant}
        />
      </div>
    </div>
  );
};

export default TransactionsTable;
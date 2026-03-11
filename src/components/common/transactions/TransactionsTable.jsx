import { AddBudgetBtn } from "../../budget";
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
    case "budget":
      tableHeader.splice(1, 3, "limit", "spent", "status");
      break;
    default:
      break;
  }

  const i18Key =
    variant === "income"
      ? "income.allIncomeRecords"
      : variant === "transactions"
        ? "transactions.allTransactions"
        : variant === "budget"
          ? "budget.currentBudgets"
          : "expenses.allExpenseRecords";

  return (
    <div className="overflow-x-auto">
      <div
        className={`${data.length != 0 ? "min-w-xl" : ""} bg-primary mt-8 rounded-lg p-5 lg:p-10`}
      >
        <div className="flex-between">
          <Text
            tagElement="h4"
            i18nKey={i18Key}
            className="text-accent text-xl font-semibold"
          />
          {variant === "budget" && <AddBudgetBtn />}
        </div>
        {data.length != 0 ? (
          <>
            <TransactionsTableHeader tableHeader={tableHeader} />
            <TransactionsTableRow
              data={data}
              tableHeader={tableHeader}
              variant={variant}
            />
          </>
        ) : (
          <Text
            tagElement="h4"
            i18nKey="transactions.startByAddingTransaction"
            className="text-secondary text-md py-8 text-center md:text-3xl"
          />
        )}
      </div>
    </div>
  );
};

export default TransactionsTable;

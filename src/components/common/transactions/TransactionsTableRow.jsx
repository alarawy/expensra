import {
  useDeleteBudget,
  useDeleteGoal,
  useDeleteTransaction,
} from "../../../hooks";
import { transformTableRowData } from "../../../utils";
import { BudgetRow } from "../../budget";
import { GoalsRow } from "../../goals";
import { TransactionRow } from "../../transactions";
import { TableRow } from "../index";
import { TransactionActions } from "./index";

const TransactionsTableRow = ({ data, variant }) => {
  const { mutate: deleteTransaction } = useDeleteTransaction();
  const { mutate: deleteBudget } = useDeleteBudget();
  const { mutate: deleteGoal } = useDeleteGoal();

  return (
    <>
      {data?.map((item, index) => {
        const rowData = transformTableRowData(item, variant);

        if (variant === "budget") {
          return (
            <BudgetRow key={index} item={rowData}>
              <TransactionActions
                variant="budget"
                id={item.id}
                onDelete={deleteBudget}
              />
            </BudgetRow>
          );
        }

        if (variant === "goals") {
          return (
            <GoalsRow key={index} item={rowData}>
              <TransactionActions
                variant="goals"
                id={item.id}
                onDelete={deleteGoal}
              />
            </GoalsRow>
          );
        }

        if (variant === "transactions") {
          return <TransactionRow key={index} item={rowData} />;
        }

        return (
          <TableRow key={index} item={rowData}>
            <TransactionActions id={item.id} onDelete={deleteTransaction} />
          </TableRow>
        );
      })}
    </>
  );
};

export default TransactionsTableRow;

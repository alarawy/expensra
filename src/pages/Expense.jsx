import {
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";
import { useGetAllTransactions } from "../hooks";
import { normalizeTransactions } from "../utils";

const Expense = () => {
  const { data } = useGetAllTransactions();

  const expenseData = normalizeTransactions(data)

  const expenseTransactions = expenseData.filter(
    (expense) => expense.transaction_type === "expense",
  );

  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.expense"
        className="text-accent mb-5 text-2xl font-bold md:text-4xl"
      />
      <TransactionsForm variant="expense" />
      <TransactionsTable data={expenseTransactions} variant="expense" />
    </Section>
  );
};

export default Expense;

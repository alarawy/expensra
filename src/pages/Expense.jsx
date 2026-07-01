import {
  Loading,
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";
import { useGetAllTransactions, useGetMonthlyTransactions } from "../hooks";
import { normalizeData } from "../utils";

const Expense = () => {
  // const { data } = useGetAllTransactions();
  const month = new Date().getMonth() + 1;
  const { data, isPending } = useGetMonthlyTransactions({ month: month });
  const expenseData = normalizeData(data);

  const expenseTransactions = expenseData.filter(
    (expense) => expense.transaction_type === "expense",
  );
  if (isPending) return <Loading />;
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

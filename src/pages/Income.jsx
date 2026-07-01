import {
  Loading,
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";
import { useGetAllTransactions, useGetMonthlyTransactions } from "../hooks";
import { normalizeData } from "../utils";

const Income = () => {
  // const { data } = useGetAllTransactions();
  const month = new Date().getMonth() + 1
  const { data, isPending } = useGetMonthlyTransactions({month: month});
  const incomeData = normalizeData(data)

  const incomeTransactions = incomeData.filter(
    (income) => income.transaction_type == "income",
  );
  if (isPending) return <Loading />;
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.income"
        className="text-accent mb-5 text-2xl font-bold md:text-4xl"
      />
      <TransactionsForm variant="income" />
      <TransactionsTable data={incomeTransactions} variant="income" />
    </Section>
  );
};

export default Income;

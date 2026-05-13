import {
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";
import { useGetAllTransactions } from "../hooks";
import { normalizeTransactions } from "../utils";

const Income = () => {
  const { data } = useGetAllTransactions();

  const incomeData = normalizeTransactions(data)

  const incomeTransactions = incomeData.filter(
    (income) => income.transaction_type == "income",
  );
  
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

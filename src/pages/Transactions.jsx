import {
  Loading,
  Section,
  Text,
  TransactionsTable,
} from "../components/common";
import { TransactionsFilters } from "../components/transactions";
import { useFilteredTransactions } from "../hooks";

const Transactions = () => {
  const { filteredData, isPending } = useFilteredTransactions();
  if (isPending) return <Loading />;
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.transactions"
        className="text-accent mb-5 text-3xl font-bold md:text-4xl"
      />
      <TransactionsFilters />
      <TransactionsTable data={filteredData} variant="transactions" />
    </Section>
  );
};

export default Transactions;

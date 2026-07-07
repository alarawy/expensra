import {
  Loading,
  Section,
  TransactionsTable,
} from "../components/common";
import { TransactionsFilters, TransactionsHeader } from "../components/transactions";
import { useFilteredTransactions } from "../hooks";

const Transactions = () => {
  const { filteredData, isPending } = useFilteredTransactions();
  if (isPending) return <Loading />;
  return (
    <Section>
      <TransactionsHeader />
      <TransactionsFilters />
      <TransactionsTable data={filteredData} variant="transactions" />
    </Section>
  );
};

export default Transactions;

import { Loading, Section, TransactionsTable } from "../components/common";
import SEO from "../components/SEO";
import {
  TransactionsFilters,
  TransactionsHeader,
} from "../components/transactions";
import { useFilteredTransactions } from "../hooks";

const Transactions = () => {
  const { filteredData, isPending } = useFilteredTransactions();
  if (isPending) return <Loading />;
  return (
    <>
      <SEO
        title="Expensra | Transactions"
        description="Manage your financial transactions easily. Add, edit, delete, search, and filter your income and expenses."
      />
      <Section>
        <TransactionsHeader />
        <TransactionsFilters />
        <TransactionsTable data={filteredData} variant="transactions" />
      </Section>
    </>
  );
};

export default Transactions;

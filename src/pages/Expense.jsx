import { tableData } from "../assets/data/tableData";
import {
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";

const Expense = () => {
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.expense"
        className="text-accent text-4xl font-bold"
      />
      <TransactionsForm />
      <TransactionsTable data={tableData} />
    </Section>
  );
};

export default Expense;

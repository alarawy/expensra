import { tableData } from "../assets/data/tableData";
import {
  Section,
  Text,
  TransactionsForm,
  TransactionsTable,
} from "../components/common";

const Income = () => {
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.income"
        className="text-accent text-4xl font-bold"
      />
      <TransactionsForm variant="income" />
      <TransactionsTable data={tableData} variant="income" />
    </Section>
  );
};

export default Income;

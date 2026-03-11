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
        className="text-accent mb-5 md:mb-10 text-2xl md:text-4xl font-bold"
      />
      <TransactionsForm variant="income" />
      <TransactionsTable data={tableData} variant="income" />
    </Section>
  );
};

export default Income;

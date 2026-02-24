import { useState } from "react";
import { tableData } from "../assets/data/tableData";
import { Section, Text, TransactionsTable } from "../components/common";
import { TransactionsFilters } from "../components/transactions";

const Transactions = () => {
  const [type, setType] = useState("all");
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.transactions"
        className="text-accent text-4xl font-bold"
      />
      <TransactionsFilters value={type} onChange={setType} />
      <TransactionsTable data={tableData} variant="transactions" />
    </Section>
  );
};

export default Transactions;
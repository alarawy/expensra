import { LeftoverDecisionCard, SavingsProgressCard } from "../components/budget";
import { Section, Text, TransactionsTable } from "../components/common";

import { budgets } from "../assets/data/budget.data";

const Budget = () => {
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.budget"
        className="text-accent mb-5 text-2xl font-bold md:mb-10 md:text-4xl"
      />
      <LeftoverDecisionCard />
      <SavingsProgressCard />
      <TransactionsTable data={budgets} variant="budget" />
    </Section>
  );
};

export default Budget;
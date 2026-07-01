import { LeftoverDecisionCard, SavingsProgressCard } from "../components/goals";
import {
  Loading,
  Section,
  Text,
  TransactionsTable,
} from "../components/common";
import { useGetGoals } from "../hooks";
import { normalizeData } from "../utils";

const Goals = () => {
  const { data, isPending } = useGetGoals();
  const goalsData = normalizeData(data?.goals);
  if (isPending) return <Loading />;
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.goals"
        className="text-accent mb-5 text-2xl font-bold md:text-4xl"
      />
      <LeftoverDecisionCard />
      <SavingsProgressCard />
      <TransactionsTable data={goalsData} variant="goals" />
    </Section>
  );
};

export default Goals;

import { LeftoverDecisionCard, SavingsProgressCard } from "../components/goals";
import {
  Loading,
  PageHeader,
  Section,
  TransactionsTable,
} from "../components/common";
import { useGetGoals } from "../hooks";
import { normalizeData } from "../utils";
import SEO from "../components/SEO";

const Goals = () => {
  const { data, isPending } = useGetGoals();
  const goalsData = normalizeData(data?.goals);
  if (isPending) return <Loading />;
  return (
    <>
      <SEO
        title="Expensra | Goals"
        description="Set financial goals, track your saving progress, and achieve your money targets with Expensra."
      />
      <Section>
        <PageHeader variant="goals" />
        <LeftoverDecisionCard />
        <SavingsProgressCard />
        <TransactionsTable data={goalsData} variant="goals" />
      </Section>
    </>
  );
};

export default Goals;

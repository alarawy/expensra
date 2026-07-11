import { Section } from "../components/common";
import {
  SummaryCards,
  Heading,
  RecentTransactions,
  Charts,
} from "../components/dashboard";
import SEO from "../components/SEO";

const Dashboard = () => {
  return (
    <>
      <SEO
        title="Expensra | Dashboard"
        description="View your current balance, income, expenses, statistics, and financial charts in one smart dashboard."
      />
      <Section>
        <Heading />
        <SummaryCards />
        <Charts />
        <RecentTransactions />
      </Section>
    </>
  );
};

export default Dashboard;

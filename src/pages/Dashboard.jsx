import { Section } from "../components/common";
import {
  SummaryCards,
  Heading,
  SpendingTrendsChart,
  SpendingByCategoryChart,
  RecentTransactions,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <Section>
      <Heading />
      <SummaryCards />
      <div className="flex-center border-bottom m-0 mt-10 flex-col gap-8 pb-5 md:flex-row">
        <SpendingTrendsChart />
        <SpendingByCategoryChart />
      </div>
      <RecentTransactions />
    </Section>
  );
};

export default Dashboard;

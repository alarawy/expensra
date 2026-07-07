import { Section } from "../components/common";
import {
  SummaryCards,
  Heading,
  RecentTransactions,
  ActivityDateRange,
  Charts,
} from "../components/dashboard";

const Dashboard = () => {
  return (
    <Section>
      <Heading />
      {/* <ActivityDateRange /> */}
      <SummaryCards />
      <Charts />
      <RecentTransactions />
    </Section>
  );
};

export default Dashboard;

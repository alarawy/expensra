import {
  AnalyticsBarChart,
  AverageStatistics,
  FinancialInsights,
  SavingsLineChart,
} from "../components/analytics";
import { Loading, Section, Text } from "../components/common";
import { useGetSummaryAnalytics, useSummaryStatistics } from "../hooks";

const Analytics = () => {
  const { data, isPending } = useGetSummaryAnalytics();
  const {
    data: { average, highest, comparison, insights },
  } = useSummaryStatistics();

  if (isPending) return <Loading />;
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.analytics"
        className="text-accent mb-5 text-2xl font-bold md:text-4xl"
      />
      <AnalyticsBarChart data={data} />
      <div className="flex-between m-0 mt-4 flex-col gap-3 lg:flex-row">
        <SavingsLineChart data={data} />
        <AverageStatistics average={average} highest={highest} />
      </div>
      <FinancialInsights comparison={comparison} insights={insights} />
    </Section>
  );
};

export default Analytics;

import { AnalyticsBarChart, AnalyticsPieChart } from "../components/analytics";
import { Section, Text } from "../components/common";
import { analyticsBarChartData, analyticsPieChartData } from "../assets/data/analyticsData";

const Analytics = () => {
  return (
    <Section>
      <Text
        tagElement="h1"
        i18nKey="sidebar.analytics"
        className="text-accent mb-5 md:mb-10 text-2xl md:text-4xl font-bold"
      />
      <AnalyticsBarChart data={analyticsBarChartData} />
      <AnalyticsPieChart data={analyticsPieChartData} />
    </Section>
  );
};

export default Analytics;
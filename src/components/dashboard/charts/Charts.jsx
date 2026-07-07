import { SpendingByCategoryChart, SpendingTrendsChart } from "..";

const Charts = () => {
  return (
    <div className="flex-center border-bottom m-0 mt-4 max-h-fit flex-col items-stretch gap-8 pb-4 md:flex-row">
      <SpendingTrendsChart />
      <SpendingByCategoryChart />
    </div>
  );
};

export default Charts;

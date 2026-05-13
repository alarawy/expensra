import { SpendingByCategoryChart, SpendingTrendsChart } from "..";

const Charts = () => {
  return (
    <div className="flex-center border-bottom m-0 mt-10 flex-col gap-8 pb-10 md:flex-row">
      <SpendingTrendsChart />
      <SpendingByCategoryChart />
    </div>
  );
};

export default Charts;

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DateRangeToggle, TrendsChart } from "../index";
import { Text } from "../../common";
import { generateFakeData } from "../../../assets/data/fakeData";

const SpendingTrendsChart = () => {
  const { t } = useTranslation();
  const [range, setRange] = useState("30d");
  const data = generateFakeData(range, t);

  return (
    <div className="w-full flex-2">
      <div className="flex-between mb-5">
        <div>
          <Text
            tagElement="h5"
            i18nKey="expenses.spendingTrends"
            className="text-primary text-lg font-semibold"
          />
          <Text
            tagElement="p"
            i18nKey="dashboard.activityLast30Days"
            className="text-accent text-sm"
          />
        </div>
        <DateRangeToggle value={range} onChange={setRange} />
      </div>
      <TrendsChart data={data} />
    </div>
  );
};

export default SpendingTrendsChart;

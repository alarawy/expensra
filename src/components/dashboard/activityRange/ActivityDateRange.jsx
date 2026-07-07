import { useSearchParams } from "react-router-dom";
import DateRangeToggle from "./DateRangeToggle";
import { Text } from "../../common";

const currentMonth = new Date().getMonth() + 1;

const monthLabels = {
  [currentMonth]: "thisMonth",
  [currentMonth - 1]: "lastMonth",
  [currentMonth - 2]: "monthBeforeLast",
};

const ActivityDateRange = () => {
  const [searchParams] = useSearchParams();

  const selectedMonth = Number(searchParams.get("month")) || currentMonth;

  return (
    <div className="m-0 flex flex-col gap-y-5 pt-2 md:flex-row md:justify-between md:gap-y-0">
      <Text
        tagElement="p"
        i18nKey="dashboard.activityLast"
        className="text-secondary md:text-2xl"
      >
        <Text
          i18nKey={`dates.${monthLabels[selectedMonth]}`}
          className="text-accent"
        />
      </Text>

      <DateRangeToggle />
    </div>
  );
};

export default ActivityDateRange;

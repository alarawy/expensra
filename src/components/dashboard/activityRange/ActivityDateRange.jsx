import { useSearchParams } from "react-router-dom";
import DateRangeToggle from "./DateRangeToggle";
import { Text } from "../../common";

const ActivityDateRange = () => {
  const [ searchParams ] = useSearchParams();
  const lastDays = searchParams.get("last") || "30Days";

  return (
    <div className="m-0 flex flex-col gap-y-5 py-4 md:flex-row md:justify-between md:gap-y-0">
      <Text
        tagElement="p"
        i18nKey="dashboard.activityLast"
        className="text-secondary md:text-2xl"
      >
        <Text i18nKey={`ranges.${lastDays}`} className="text-accent" />
      </Text>
      <DateRangeToggle />
    </div>
  );
};

export default ActivityDateRange;

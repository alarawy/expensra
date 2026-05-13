import { useSearchParams } from "react-router-dom";
import { Text } from "../../common";

const OPTIONS = ["30Days", "60Days", "90Days"];

const DateRangeToggle = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastDays = searchParams.get("last") || OPTIONS[0];

  const handleSelect = (range) => {
    setSearchParams({ last: range });
  };

  return (
    <ul
      role="tablist"
      className="bg-primary flex-end w-fit rounded-lg ltr:ml-auto rtl:mr-auto"
    >
      {OPTIONS.map((range) => (
        <Text
          tagElement="li"
          i18nKey={`ranges.${range}`}
          key={range}
          role="tab"
          aria-selected={lastDays === range}
          tabIndex={0}
          className={`cursor-pointer rounded-lg px-3 py-2 transition-colors duration-200 ease-in-out ${
            lastDays === range ? "bg-accent text-primary" : "text-secondary"
          }`}
          onClick={() => handleSelect(range)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleSelect(range);
          }}
        />
      ))}
    </ul>
  );
};

export default DateRangeToggle;

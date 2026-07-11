import { useSearchParams } from "react-router-dom";
import { Text } from "../common";

const currentMonth = new Date().getMonth() + 1;
const previousMonth = currentMonth - 1;
const twoMonthsAgo = currentMonth - 2;

const MONTH_OPTIONS = [
  {
    label: "thisMonth",
    value: currentMonth,
  },
  {
    label: "lastMonth",
    value: previousMonth,
  },
  {
    label: "twoMonthsAgo",
    value: twoMonthsAgo,
  },
];

const DateRangeToggle = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedMonth = Number(searchParams.get("month")) || currentMonth;

  const handleSelectMonth = (month) => {
    if (month === currentMonth) {
      setSearchParams({});
      return;
    }

    setSearchParams({ month: String(month) });
  };

  return (
    <ul
      role="tablist"
      className="bg-primary flex-end h-fit whitespace-nowrap rounded-lg ltr:ml-auto rtl:mr-auto"
    >
      {MONTH_OPTIONS.map((option) => (
        <Text
          key={option.value}
          tagElement="li"
          role="tab"
          i18nKey={`dates.${option.label}`}
          aria-selected={selectedMonth === option.value}
          tabIndex={0}
          className={`cursor-pointer rounded-md m-0 px-2.5 py-1.5 text-xs md:text-base transition-colors  duration-200 ease-in-out ${
            selectedMonth === option.value
              ? "bg-accent text-primary"
              : "text-secondary"
          }`}
          onClick={() => handleSelectMonth(option.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleSelectMonth(option.value);
            }
          }}
        />
      ))}
    </ul>
  );
};

export default DateRangeToggle;

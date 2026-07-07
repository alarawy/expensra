import { useSearchParams } from "react-router-dom";
import { Text } from "../common";
import {
  FaArrowDown,
  FaArrowDownUpAcrossLine,
  FaArrowUp,
} from "../../assets/icons/icons";

const TYPE_OPTIONS = [
  { label: "all", icon: <FaArrowDownUpAcrossLine /> },
  { label: "income", icon: <FaArrowUp /> },
  { label: "expense", icon: <FaArrowDown /> },
];

const TransactionTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type") || "all";

  const handleSelectType = (selectedType) => {
    if (selectedType === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({ type: selectedType });
  };

  return (
    <div className="border-bottom mt-5">
      <ul
        role="tablist"
        className="bg-primary mt-3 flex w-fit whitespace-nowrap rounded-lg"
      >
        {TYPE_OPTIONS.map((option) => {
          const isActive = type === option.label;

          return (
            <li
              key={option.label}
              role="tab"
              aria-selected={isActive}
              tabIndex={0}
              onClick={() => handleSelectType(option.label)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleSelectType(option.label);
                }
              }}
              className={`flex-center cursor-pointer gap-2 rounded-lg px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "bg-accent text-primary"
                  : option.label === "expense"
                  ? "text-red-500"
                  : option.label === "income"
                  ? "text-green-500"
                  : "text-accent"
              }`}
            >
              <Text
                tagElement="span"
                i18nKey={`transactions.${option.label}`}
              />
              <span>{option.icon}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionTabs;
import { useState } from "react";
import { Text } from "../common";
import { FaChevronDown } from "../../assets/icons/icons";
import { useOutsideClick } from "../../hooks";
import { useSearchParams } from "react-router-dom";

const OPTIONS = [
  { value: "allTransactions", label: "transactions.allTransactions" },
  { value: "income", label: "transactions.income" },
  { value: "expense", label: "transactions.expense" },
];

const SelectType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const ref = useOutsideClick(() => setIsOpen(false));

  const selectedType = searchParams.get("filter") || "allTransactions";

  const handleSelect = (option) => {
    if (option.value === "allTransactions") {
      setSearchParams({});
    } else {
      setSearchParams({ filter: option.value });
    }
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative h-full w-45">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex-between bg-primary h-full w-full cursor-pointer gap-2 rounded-lg p-2 px-3"
      >
        <Text
          tagElement="span"
          i18nKey={`transactions.${selectedType}`}
          className="text-secondary flex-1 px-2 text-start ltr:border-r rtl:border-l"
        />
        <span className="pt-1 text-xs">
          <FaChevronDown />
        </span>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="bg-muted absolute mt-1 w-full rounded-md py-1 shadow-md"
        >
          {OPTIONS.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedType === option.value}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer p-3 hover:bg-(--bg-secondary) ${selectedType === option.value ? "bg-(--bg-secondary) font-medium" : ""} `}
            >
              <Text i18nKey={option.label} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectType;

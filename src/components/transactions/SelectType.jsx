import { useState } from "react";
import { Text } from "../common";
import { FaChevronDown } from "../../assets/icons/icons";
import { useOutsideClick } from "../../hooks";

const OPTIONS = [
  { value: "all", label: "transactions.allTypes" },
  { value: "income", label: "transactions.income" },
  { value: "expenses", label: "transactions.expense" },
];

const SelectType = ({ value = "all", onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const selectedOption = OPTIONS.find(
    (option) => option.value === value
  );

  const handleSelect = (option) => {
    onChange?.(option.value);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative w-45 h-full">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="flex-between bg-primary w-full h-full gap-2 rounded-lg p-2 px-3 cursor-pointer"
      >
        <Text
          tagElement="span"
          i18nKey={selectedOption.label}
          className="px-2 flex-1 text-start text-secondary ltr:border-r rtl:border-l"
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
              aria-selected={value === option.value}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer p-3 hover:bg-(--bg-secondary)
                ${value === option.value ? "bg-(--bg-secondary) font-medium" : ""}
              `}
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
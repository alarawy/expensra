import { useState } from "react";
import { Text } from "../common";
import { FaChevronDown } from "../../assets/icons/icons";
import {
  useExpenseCategories,
  useIncomeCategories,
  useOutsideClick,
  useTransactionCategoryFilter,
} from "../../hooks";

import CategoryList from "./CategoryList";

const TransactionCategoryFilter = () => {
  const { data: expenseCategories } = useExpenseCategories();
  const { data: incomeCategories } = useIncomeCategories();

  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  const { activeTab, selectedType, setFilter } = useTransactionCategoryFilter();

  const showIncome = activeTab !== "expense";
  const showExpenses = activeTab !== "income";

  const allOption = { categoryName: "allCategories" };
  const handleSelect = (option) => {
    setFilter(option);
    setIsOpen(false);
  };
  return (
    <div ref={ref} className="relative h-full w-45">
      <button
        type="button"
        onClick={() => setIsOpen((p) => !p)}
        className="flex-between bg-primary h-full w-full gap-2 rounded-lg p-2 px-3"
      >
        <Text
          tagElement="span"
          i18nKey={`categories.${selectedType}`}
          className="text-secondary flex-1 px-2 text-start ltr:border-r rtl:border-l"
        />

        <span className="pt-1 text-xs">
          <FaChevronDown />
        </span>
      </button>

      {isOpen && (
        <ul className="bg-muted absolute mt-1 max-h-50 w-full overflow-auto rounded-md py-1 shadow-md">
          <li
            onClick={() => handleSelect(allOption)}
            className={`cursor-pointer px-5 py-1 hover:bg-(--bg-secondary) ${
              selectedType === allOption.categoryName
                ? "bg-(--bg-secondary) font-medium"
                : ""
            }`}
          >
            <Text i18nKey="categories.allCategories" />
          </li>

          <CategoryList
            title={activeTab === "all" && "transactions.income"}
            show={showIncome}
            categories={incomeCategories || []}
            selectedType={selectedType}
            onSelect={handleSelect}
          />

          <CategoryList
            title={activeTab === "all" && "transactions.expense"}
            show={showExpenses}
            categories={expenseCategories || []}
            selectedType={selectedType}
            onSelect={handleSelect}
          />
        </ul>
      )}
    </div>
  );
};

export default TransactionCategoryFilter;

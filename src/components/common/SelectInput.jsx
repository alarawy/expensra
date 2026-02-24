import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CategoryList, Input } from "./index";
import { useOutsideClick } from "../../hooks";
import {
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES,
} from "../../assets/data/transactionCategories";

const SelectInput = ({ variant, value, onSelect, error }) => {
  const categories =
    variant === "income" ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;

  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  const normalizedValue = value.trim().toLowerCase();

  const filtered =
    normalizedValue === ""
      ? categories
      : categories.filter((cat) =>
          t(cat.labelKey).toLowerCase().includes(normalizedValue),
        );

  const handleSelect = (cat) => {
    onSelect(cat.id);
    setIsFocused(false);
  };

  const ref = useOutsideClick(() => setIsFocused(false));

  const i18nKey =
    variant === "income" ? "transactions.source" : "transactions.category";

  const placeholderKey =
    variant === "income"
      ? "transactions.incomePlaceholder"
      : "transactions.categoryPlaceholder";

  const selectedCategory = categories.find((cat) => cat.id === value);

  const displayValue = selectedCategory ? t(selectedCategory.labelKey) : value;

  return (
    <div
      className="relative m-0 my-3"
      ref={ref}
      onFocus={() => setIsFocused(true)}
    >
      <Input
        id="selectInput"
        i18nKey={i18nKey}
        placeholderKey={placeholderKey}
        value={displayValue}
        error={error}
        onChange={(e) => onSelect(e.target.value)}
        className="flex-row-reverse"
      />

      {isFocused && (displayValue || filtered.length > 0) && (
        <CategoryList
          value={displayValue}
          categories={categories}
          filtered={filtered}
          handleSelect={handleSelect}
        />
      )}
    </div>
  );
};

export default SelectInput;
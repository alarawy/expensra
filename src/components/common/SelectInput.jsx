import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CategoryList, Input } from "./index";
import { useGetCurrentUser, useOutsideClick } from "../../hooks";
import { CURRENCIES, EXPENSE_CATEGORIES, INCOME_CATEGORIES } from "../../utils";
import { FaTags, MdOutlineCategory } from "../../assets/icons/icons";

const SelectInput = ({ variant, value, onSelect, error }) => {
  const { data: currentUser } = useGetCurrentUser();
  const isNormalUser = currentUser?.system_role === "normal_user";

  const categories =
    variant === "income"
      ? isNormalUser
        ? INCOME_CATEGORIES.slice(0, 5)
        : INCOME_CATEGORIES
      : variant === "currency"
        ? CURRENCIES
        : isNormalUser
          ? EXPENSE_CATEGORIES.slice(0, 5)
          : EXPENSE_CATEGORIES;

  const { t } = useTranslation();
  const [isFocused, setIsFocused] = useState(false);

  const normalizedValue = value?.trim().toLowerCase();

  const filtered =
    normalizedValue === ""
      ? categories
      : categories.filter((cat) =>
          t(cat.labelKey).toLowerCase().includes(normalizedValue),
        );

  const handleSelect = (cat) => {
    onSelect(cat.id);
    if (variant === "currency") {
      localStorage.setItem("currency", cat.id);
    }
    setIsFocused(false);
  };

  const ref = useOutsideClick(() => setIsFocused(false));

  const i18nKey =
    variant === "income"
      ? "categories.sourceName"
      : variant === "currency"
        ? "profile.currency"
        : variant === "budget"
          ? "budget.title"
          : "categories.categoryName";

  const placeholderKey =
    variant === "income"
      ? "categories.incomePlaceholder"
      : variant === "currency"
        ? "profile.currency"
        : "categories.categoryPlaceholder";

  const selectedCategory = categories.find((cat) => cat.id === value);

  const displayValue = selectedCategory
    ? t(selectedCategory.labelKey)
    : value || "";

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
        readOnly={
          isNormalUser && (variant === "expense" || variant === "income")
        }
        value={displayValue}
        error={error}
        onChange={(e) => onSelect(e.target.value)}
        className="flex-row-reverse"
      >
        <FaTags size={18} />
      </Input>

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

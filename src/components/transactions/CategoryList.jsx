import { Text } from "../common";

const CategoryList = ({ title, show, categories, selectedType, onSelect }) => {
  if (!show) return null;

  const getValue = (option) => {
    if (option.categoryName === "Goal Deposit") return "goals";
    return option.categoryName.toLowerCase();
  };

  return (
    <>
      {title && (
        <Text
          tagElement="li"
          i18nKey={title}
          className="text-secondary border-top divide divide-gray-500 px-2.5 py-1 text-xs font-semibold uppercase"
        />
      )}

      {categories.map((option) => {
        const value = getValue(option);
        const isSelected = selectedType === value;

        return (
          <li
            key={option.categoryName}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelect(option)}
            className={`cursor-pointer px-5 py-1 hover:bg-(--bg-secondary) ${
              isSelected ? "bg-(--bg-secondary) font-medium" : ""
            }`}
          >
            <Text i18nKey={`categories.${value}`} />
          </li>
        );
      })}
    </>
  );
};

export default CategoryList;

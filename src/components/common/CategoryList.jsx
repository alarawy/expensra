import { useTranslation } from "react-i18next";
import { Text } from ".";

const CategoryList = ({ value, categories, filtered, handleSelect }) => {
  const { t } = useTranslation();

  const normalizedValue = value.trim().toLowerCase();

  const categoryExists = categories.some(
    (cat) => t(cat.labelKey).toLowerCase() === normalizedValue,
  );

  return (
    <div className="category-list">
      {filtered.map((cat, index) => (
        <Text
          key={index}
          tagElement="p"
          i18nKey={cat.labelKey}
          className="border-bottom cursor-pointer p-2 px-3 hover:bg-(--bg-secondary)"
          onClick={() => handleSelect(cat)}
        />
      ))}

      {value && !categoryExists && (
        <Text
          i18nKey="categories.addCategory"
          values={{ category: value }}
          className="text-secondary flex cursor-pointer p-2 hover:bg-(--bg-secondary)"
        />
      )}
    </div>
  );
};

export default CategoryList;

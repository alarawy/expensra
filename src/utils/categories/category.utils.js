export const getCategoryIdByName = (categories, name) => {
  const category = categories.find(
    (cat) => cat.categoryName.toLowerCase() === name.toLowerCase()
  );
  return category?.categoryId;
};
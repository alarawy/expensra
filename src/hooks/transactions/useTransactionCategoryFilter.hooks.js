import { useSearchParams } from "react-router-dom";

export const useTransactionCategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get("type") || "all";
  const selectedType = searchParams.get("filter") || "allCategories";

  const setFilter = (option) => {
    const params = new URLSearchParams(searchParams);

    if (option.categoryName === "allCategories") {
      params.delete("filter");
    } else {
      const formattedOption =
        option.categoryName === "Goal Deposit"
          ? "goals"
          : option.categoryName.toLowerCase();

      params.set("filter", formattedOption);
    }

    setSearchParams(params);
  };

  return {
    activeTab,
    selectedType,
    setFilter,
  };
};

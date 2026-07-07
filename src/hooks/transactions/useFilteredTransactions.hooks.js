import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { normalizeData } from "../../utils";
import { useGetMonthlyTransactions } from "./transactions.hooks";

export const useFilteredTransactions = () => {
  const month = new Date().getMonth() + 1;
  const { data, isPending } = useGetMonthlyTransactions({ month });
  const [searchParams] = useSearchParams();

  const type = searchParams.get("type");
  const filter = searchParams.get("filter");
  const search = searchParams.get("search") || "";

  const transactions = normalizeData(data);

  const filteredData = useMemo(() => {
    if (!transactions.length) return [];

    const text = search.toLowerCase().trim();

    return transactions.filter((item) => {
      const matchesType = type ? item.transaction_type === type : true;
      const matchesFilter = filter
        ? (item.category?.name === "Goal Deposit"
            ? "goals"
            : item.category?.name?.toLowerCase()) === filter
        : true;

      const matchesSearch = text
        ? item.notes?.toLowerCase().includes(text) ||
          item.category?.name?.toLowerCase().includes(text) ||
          item.amount?.toString().includes(text)
        : true;

      return matchesType && matchesFilter && matchesSearch;
    });
  }, [transactions, type, filter, search]);

  return { filteredData, isPending };
};

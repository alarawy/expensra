import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useGetAllTransactions } from "./transactions.hooks";
import { normalizeTransactions } from "../../utils";

export const useFilteredTransactions = () => {
    const { data = [] } = useGetAllTransactions();
    const [searchParams] = useSearchParams();
    
    const type = searchParams.get("filter");
    const search = searchParams.get("search") || "";

    const transactions = normalizeTransactions(data);
    
    const filteredData = useMemo(() => {
        if (!transactions.length) return [];

        const text = search.toLowerCase().trim();

        return transactions.filter((item) => {
            const matchesType = type
                ? item.transaction_type === type
                : true;

            const matchesSearch = text
                ? item.notes?.toLowerCase().includes(text) ||
                item.category?.name?.toLowerCase().includes(text) ||
                item.amount?.toString().includes(text)
                : true;

            return matchesType && matchesSearch;
        });
    }, [transactions, type, search]);

    return filteredData;
};
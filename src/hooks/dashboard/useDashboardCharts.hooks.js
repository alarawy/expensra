import { useMemo } from "react";
import { useAllCategories, useGetAllTransactions } from "../index";
import { normalizeTransactions } from "../../utils";

export const useCategoryPieData = () => {
    const { data: allCategories, isPending } = useAllCategories();
    const normalizeData = normalizeTransactions(allCategories);

    const data = useMemo(() => {
        return (normalizeData?.categories ?? [])
            .filter((cat) => cat.user_id && cat.type === "expense")
            .map((category) => ({
                name: category.name,
                total: (category.transactions || []).reduce(
                    (sum, t) => sum + Number(t.amount || 0),
                    0
                ),
            })).filter((category) => category.total > 0);
    }, [normalizeData]);

    return { data, isPending };
};


export const useTrendsData = () => {
    const { data, isPending } = useGetAllTransactions();

    const trendsData = useMemo(() => {
        const transactions = normalizeTransactions(data)

        const map = {};

        transactions.forEach((t) => {
            const date = t.transaction_date;
            map[date] = (map[date] || 0) + Number(t.amount || 0);
        });

        return Object.entries(map)
            .sort(([a], [b]) => new Date(a) - new Date(b))
            .map(([date, amount]) => ({
                date,
                amount,
            }));
    }, [data]);

    return { trendsData, isPending };
};

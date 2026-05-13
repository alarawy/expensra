import { format } from "date-fns";

const normalizeData = (item, variant) => {

    if (variant === "budget") {
        return {
            category: item.category,
            limit: item.limit,
            spent: item.spent,
            id: item.id,
        };
    }

    const baseTransaction = {
        category: item.category?.name,
        amount: item.amount,
        date: format(item.transaction_date,
            "dd/MM/yyyy"
        ),
        description: item.notes,
    };

    if (variant === "transactions") {
        return {
            type: item.transaction_type,
            ...baseTransaction,
        };
    }

    return baseTransaction
};

export default normalizeData;
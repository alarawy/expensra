import { useSearchParams } from "react-router-dom";
import { useGetMonthlyTransactions } from "../transactions/transactions.hooks";
import { normalizeData } from "../../utils";

export const useRecentTransactions = () => {
  const currentMonth = new Date().getMonth() + 1;
  const [searchParams] = useSearchParams();

  const month = Number(searchParams.get("month")) || currentMonth;
  const { data } = useGetMonthlyTransactions({ month: month });

  const transactions = normalizeData(data);

  return transactions;
};

import { useGetAllTransactions } from "../../../hooks";
import { normalizeTransactions } from "../../../utils";
import { Text } from "../../common";
import RecentTransaction from "./RecentTransaction";

const RecentTransactions = () => {
  const { data } = useGetAllTransactions();

  const transactions = normalizeTransactions(data)

  return (
    <div className="mt-3">
      <Text
        tagElement="h4"
        i18nKey={"dashboard.recentTransactions"}
        className="text-accent my-5 text-2xl font-semibold"
      />

      {!transactions.length ? (
        <Text
          tagElement="h4"
          i18nKey="transactions.startByAddingTransaction"
          className="text-secondary text-md py-8 text-center md:text-3xl"
        />
      ) : (
        transactions.slice(0, 5).map((trans) => (
          <RecentTransaction
            key={trans.id || trans.transaction_date}
            title={trans.notes}
            amount={trans.amount}
            date={trans.transaction_date}
            isIncome={trans.transaction_type === "income"}
          />
        ))
      )}
    </div>
  );
};

export default RecentTransactions;
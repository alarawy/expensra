import { useRecentTransactions } from "../../../hooks";
import { Text } from "../../common";
import RecentTransaction from "./RecentTransaction";

const RecentTransactions = () => {
  const recentTransactions = useRecentTransactions();
  return (
    <div className="mt-3">
      <Text
        tagElement="h2"
        i18nKey={"dashboard.recentTransactions"}
        className="section-heading text-accent"
      />

      {!recentTransactions.length ? (
        <Text
          tagElement="p"
          i18nKey="transactions.startByAddingTransaction"
          className="empty-message"
        />
      ) : (
        recentTransactions
          .slice(0, 5)
          .map((trans) => (
            <RecentTransaction
              key={trans.id || trans.transaction_date}
              title={trans.notes || trans.category.name}
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

import { PageHeader, Text } from "../common";
import { TransactionsButton, TransactionTabs } from ".";

const TransactionsHeader = () => {
  return (
    <div className="pb-3">
      <div className="flex-between flex-col md:flex-row">
        <div>
          <PageHeader variant="transactions" />
        </div>
        <TransactionsButton />
      </div>
      <TransactionTabs />
    </div>
  );
};

export default TransactionsHeader;

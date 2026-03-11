import { Text } from "../../common"
import RecentTransaction from "./RecentTransaction"

const RecentTransactions = () => {
  return (
    <div className="mt-3">
        <Text tagElement="h4" i18nKey={'dashboard.recentTransactions'} className="font-semibold text-2xl text-accent my-5" />
        <RecentTransaction title="Amazon Online Store" amount="15000" isIncome />
        <RecentTransaction title="Salary Deposit" amount="150.50" />
    </div>
  )
}

export default RecentTransactions
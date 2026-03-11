import { Text } from "../common";
import { BudgetProgressBar } from "./index";

const SavingsProgressCard = () => {
  return (
    <div className="card m-0 border-0">
      <Text
        tagElement="h3"
        i18nKey="budget.savingProgressTitle"
        className="text-accent text-xl font-semibold"
      />
      
        <BudgetProgressBar current={500} total={600} />

      <Text
        tagElement="button"
        type="button"
        i18nKey="budget.addMoreMoney"
        className="flex-center bg-accent m-auto mb-2 cursor-pointer rounded-full px-4 py-3 text-center text-sm transition-all duration-300 md:text-base"
      />
    </div>
  );
};

export default SavingsProgressCard;

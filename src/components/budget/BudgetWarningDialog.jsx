import { BsExclamationOctagon, FaXmark } from "../../assets/icons/icons";
import { Overlay, Text } from "../common";

const BudgetWarningDialog = ({handleOpenDialog}) => {
  return (
    <Overlay onClick={()=> handleOpenDialog(false)}>
      <div className="flex-center h-full w-full px-2">
        <div
          className="text-primary bg-primary border-default relative z-50 m-auto max-w-xl flex-1 rounded-2xl p-5 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
            onClick={()=> handleOpenDialog(false)}
          >
            <FaXmark />
          </button>

          <div className="flex-center border-bottom flex-col gap-3 py-5">
            <span className="text-6xl text-yellow-400">
              <BsExclamationOctagon />
            </span>
            <Text
              tagElement="h3"
              i18nKey="budget.budgetWarningTitle"
              className="text-accent text-3xl font-bold"
            />
            <Text
              tagElement="p"
              i18nKey="budget.budgetWarningDescription"
              className="text-secondary text-md px-3"
            />
          </div>
          <div className="flex-end gap-2 pt-2">
            <Text
              tagElement="button"
              type="button"
              i18nKey="common.cancel"
              onClick={()=> handleOpenDialog(false)}
              className="text-accent cursor-pointer"
            />
            <Text
              tagElement="button"
              type="button"
              i18nKey="common.continue"
              className="bg-accent cursor-pointer rounded-md px-3 py-2"
            />
          </div>
        </div>
      </div>
    </Overlay>
  );
};

export default BudgetWarningDialog;

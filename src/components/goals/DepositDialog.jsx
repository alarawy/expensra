import { useDepositDialog } from "../../hooks";
import { Overlay, Text } from "../common";
import { DepositForm, GoalSummary } from "./index";
import { FaXmark, GoGoal } from "../../assets/icons/icons";
import { formatTranslatedText } from "../../utils";
import { useTranslation } from "react-i18next";

const DepositDialog = ({ handleOpenDialog }) => {
  const { t, i18n } = useTranslation();
  const { goal, onSubmit, onCancel, form } =
    useDepositDialog(handleOpenDialog);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <Overlay onClick={onCancel}>
      <div className="flex-center h-full w-full px-2">
        <div
          className="text-primary bg-primary border-default relative z-50 m-auto max-w-xl flex-1 rounded-2xl p-5 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
            onClick={onCancel}
          >
            <FaXmark />
          </button>

          <div className="flex-center gap-3 py-5">
            <h3 className="text-secondary text-3xl">
              {formatTranslatedText(
                goal?.goal?.goal_name,
                "categories",
                t,
                i18n,
              )}
            </h3>
            <span className="text-3xl">
              <GoGoal />
            </span>
          </div>
          <GoalSummary goal={goal?.goal} />
          <DepositForm
            register={register}
            errors={errors}
            onSubmit={onSubmit}
            onCancel={onCancel}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </Overlay>
  );
};
export default DepositDialog;

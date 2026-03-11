import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "../../assets/icons/icons";
import { useModal } from "../../context";

const IncomeActions = () => {
  const { t } = useTranslation();
  const { openModal } = useModal();

  return (
    <div className="text-primary flex-1 space-x-4 text-end">
      <button
        className="text-accent cursor-pointer text-2xl"
        type="button"
        title={t("common.edit")}
        onClick={() => openModal("editItem")}
      >
        <MdEdit />
      </button>
      <button
        className="cursor-pointer text-2xl text-red-500 hover:text-red-600"
        type="button"
        title={t("common.delete")}
        onClick={() => openModal("deleteItem")}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default IncomeActions;

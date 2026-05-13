import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "../../../assets/icons/icons";
import { useModal } from "../../../context";
import { useSearchParams } from "react-router-dom";

const TransactionActions = ({ onDelete, id }) => {
  const [, setSearchParams] = useSearchParams();

  const { t } = useTranslation();
  const { openModal } = useModal();

  const onEdit = () => {
    setSearchParams({ transactionId: id });
    const el = document.querySelector(".main");

    el?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="text-primary flex-1 space-x-4 text-end">
      <button
        className="text-accent cursor-pointer text-2xl"
        type="button"
        title={t("common.edit")}
        onClick={onEdit}
      >
        <MdEdit />
      </button>
      <button
        className="cursor-pointer text-2xl text-red-500 hover:text-red-600"
        type="button"
        title={t("common.delete")}
        onClick={() =>
          openModal("deleteItem", {
            onConfirm: () => onDelete(id),
          })
        }
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default TransactionActions;

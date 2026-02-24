import { useTranslation } from "react-i18next";
import { MdDelete, MdEdit } from "../../assets/icons/icons";

const IncomeActions = ({onEdit, onDelete}) => {
  const { t } = useTranslation();
  return (
    <div className="text-primary flex-1 space-x-3 text-end">
      <button
        className="text-accent cursor-pointer text-2xl"
        type="button"
        title={t('common.edit')}
        onClick={onEdit}
      >
        <MdEdit />
      </button>
      <button
        className="cursor-pointer text-2xl text-red-500 hover:text-red-600"
        type="button"
        title={t('common.delete')}
        onClick={onDelete}
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default IncomeActions;

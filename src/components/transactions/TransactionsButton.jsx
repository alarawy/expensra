import { useSearchParams } from "react-router-dom";
import { Text } from "../common";
import { useModal } from "../../context";

const AddTransactionButton = () => {
  const { openModal } = useModal();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "expense";
  const i18Key =
    type === "income" ? "transactions.addIncome" : "transactions.addExpense";
  return (
    <Text
      tagElement="button"
      type="button"
      i18nKey={i18Key}
      onClick={() => openModal("addTransaction", { variant: type })}
      className="bg-accent hover:bg-accent-hover mt-2 cursor-pointer rounded-md px-3 py-2 whitespace-nowrap md:mt-0 ltr:ml-auto rtl:mr-auto"
    />
  );
};

export default AddTransactionButton;

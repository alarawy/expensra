import { useModal } from "../../context";
import { Text } from "../common";

const AddGoalsBtn = () => {
  const { openModal } = useModal();
  return (
    <Text
      tagElement="button"
      type="button"
      i18nKey="goals.addGoal"
      className="border-accent text-accent cursor-pointer rounded-xl px-4 py-3 transition-all duration-300 hover:bg-(--accent) hover:text-white"
      onClick={() => openModal("addGoals")}
    />
  );
};

export default AddGoalsBtn;

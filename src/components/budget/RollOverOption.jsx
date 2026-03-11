import { MdOutlineCalendarMonth } from "../../assets/icons/icons";
import { OptionCard } from "./index";

const RollOverOption = () => {
  return (
    <OptionCard
      icon={<MdOutlineCalendarMonth />}
      title="budget.rolloverText"
      buttonText="budget.rolloverButton"
      color="accent"
    />
  );
};

export default RollOverOption;

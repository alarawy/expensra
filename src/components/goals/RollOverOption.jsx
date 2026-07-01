import { MdOutlineCalendarMonth } from "../../assets/icons/icons";
import { useModal } from "../../context";
import { OptionCard } from "./index";

const RollOverOption = () => {
  const {openModal} = useModal()
  return (
    <OptionCard
      icon={<MdOutlineCalendarMonth />}
      title="goals.rolloverText"
      buttonText="goals.rolloverButton"
      color="accent"
      onClick={()=> openModal("carryOver")}
    />
  );
};

export default RollOverOption;

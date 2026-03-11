import { OptionCard } from './index';
import { MdOutlineSavings } from '../../assets/icons/icons';

const AddToSavingsOption = () => {
  return (
    <OptionCard
      icon={<MdOutlineSavings />}
      title="budget.savingsText"
      buttonText="budget.savingsButton"
      color="pink"
    />
  );
};

export default AddToSavingsOption;

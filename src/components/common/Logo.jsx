import ExpensraLogo from "../../assets/images/Expensra.png";
import { Text } from "./index";

const Logo = ({ showTitle = false, className }) => {
  return (
    <div className="text-center">
      <div className={className}>
        <img src={ExpensraLogo} alt="Expensra logo" />
      </div>
      {showTitle && (
        <Text
          tagElement="h1"
          className="text-primary text-2xl font-semibold tracking-[2px] md:text-4xl"
        >
          <span className="text-accent font-bold">Ex</span>
          pensra
        </Text>
      )}
    </div>
  );
};

export default Logo;

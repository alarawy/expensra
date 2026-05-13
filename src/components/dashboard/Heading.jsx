import { useGetCurrentUser } from "../../hooks";
import { Text } from "../common";

const Heading = () => {
  const {
    data: { first_name },
  } = useGetCurrentUser();
  return (
    <div className="border-bottom m-0 space-y-3 pb-3">
      <Text
        tagElement="h1"
        className="text-primary text-lg font-bold md:text-2xl"
        i18nKey="dashboard.welcome"
        values={{ name: first_name }}
      />
      <Text
        tagElement="p"
        className="text-accent text-sm"
        i18nKey="expenses.monthlyBreakdown"
      />
    </div>
  );
};

export default Heading;

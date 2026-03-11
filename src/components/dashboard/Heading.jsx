import { Text } from "../common";

const Heading = () => {
  return (
    <div className="space-y-3 m-0 border-bottom pb-2">
        <Text
          tagElement="h1"
          className="text-primary text-lg font-bold md:text-2xl"
          i18nKey="dashboard.welcome"
          values={{ name: "Ahmed" }}
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

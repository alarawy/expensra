import { Button, Text } from "../common";

const Heading = () => {
  return (
    <div className="items-center justify-between space-y-3 m-0 md:flex border-bottom pb-2">
      <div>
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

      {/* <Button i18nKey="addExpense" className="flex ltr:ml-auto rtl:mr-auto" /> */}
    </div>
  );
};

export default Heading;

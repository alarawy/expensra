import { useNavigate } from "react-router-dom";
import { AddBudgetForm } from "../components/budget";
import {
  Loading,
  Pricing,
  Section,
  Text,
  TransactionsTable,
} from "../components/common";
import { useGetCurrentUser } from "../hooks";
import { useGetBudgets } from "../hooks/budgets/budgets.hook";
import { normalizeData } from "../utils";

const Budget = () => {
  const { data, isPending } = useGetCurrentUser();
  const { data: budget } = useGetBudgets();
  const budgetData = normalizeData(budget?.Budgets);

  const navigate = useNavigate();
  if (isPending) return <Loading />;
  return (
    <Section>
      {data?.system_role === "normal_user" && (
        <Pricing onClick={() => navigate(-1)} />
      )}
      <Text
        tagElement="h1"
        i18nKey="sidebar.budget"
        className="text-accent mb-5 text-2xl font-bold md:text-4xl"
      />
      <AddBudgetForm />
      <TransactionsTable data={budgetData} variant="budget" />
    </Section>
  );
};

export default Budget;

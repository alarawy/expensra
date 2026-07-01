import { FaCrown, FaLeaf, FaUsers, FaXmark } from "../../../assets/icons/icons";
import { useUpgradePlan } from "../../../hooks";
import { Section, Text } from "../index";
import PricingCard from "./PricingCard";

const Pricing = ({ onClick }) => {
  const { data: upgradePlan, isPending } = useUpgradePlan();
  return (
    <Section
      onClick={() => onClick()}
      className="flex-center fixed inset-0 z-50 h-dvh overflow-auto backdrop-blur-sm"
    >
      <div className="relative m-auto w-fit rounded-2xl p-10 text-start">
        <button
          type="button"
          className="icons-scale absolute top-5 text-2xl ltr:right-5 rtl:left-5"
          onClick={() => onClick()}
        >
          <FaXmark />
        </button>
        <div className="mb-8">
          <Text
            tagElement="h1"
            i18nKey="pricing.title"
            className="text-accent text-2xl font-bold md:text-4xl"
          />
          <Text
            tagElement="p"
            i18nKey="pricing.description"
            className="text-sm font-bold md:text-xl"
          />
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex-center h-fit flex-col flex-wrap items-stretch gap-8 md:flex-row md:gap-4"
        >
          <PricingCard
            onClick={onClick}
            planKey="free"
            icon={<FaLeaf />}
            color="green"
          />
          <PricingCard
            onClick={upgradePlan}
            isPending={isPending}
            planKey="pro"
            icon={<FaCrown />}
            color="blue"
          />
          <PricingCard
            onClick={upgradePlan}
            isPending={isPending}
            planKey="family"
            icon={<FaUsers />}
            color="violet"
          />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

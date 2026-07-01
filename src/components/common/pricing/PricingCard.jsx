import { FaCheckCircle } from "../../../assets/icons/icons";
import {
  colors,
  familyFeatures,
  freeFeatures,
  proFeatures,
} from "../../../utils";
import FormButton from "../formComponents/FormButton";
import Text from "../Text";

const PricingCard = ({
  planKey,
  icon,
  color = "green",
  onClick,
  isPending,
}) => {
  const features =
    planKey === "free"
      ? freeFeatures
      : planKey === "pro"
        ? proFeatures
        : familyFeatures;

  return (
    <div
      className={`bg-primary relative flex w-2xs flex-col rounded-3xl border p-5 shadow-xl transition-all duration-300 hover:-translate-y-2 md:w-xs lg:flex-1 ${
        colors[color].border
      }`}
    >
      {planKey === "pro" && (
        <Text
          i18nKey="pricing.mostPopular"
          className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-md bg-blue-500 px-4 py-1 text-sm font-semibold"
        />
      )}
      <div className="flex-start mb-3 gap-2 md:gap-3">
        <div
          className={`rounded-2xl p-3 md:p-4 ${colors[color].bg} text-2xl md:text-3xl ${colors[color].icon}`}
        >
          {icon}
        </div>
        <div className="">
          <Text
            tagElement="h2"
            i18nKey={`pricing.${planKey}.title`}
            className="text-lg font-bold md:text-3xl"
          />
          <Text
            tagElement="p"
            i18nKey={`pricing.${planKey}.description`}
            className="text-secondary text-sm md:mt-2 md:text-base"
          />
        </div>
      </div>

      {/* Price */}
      <div className="border-top border-bottom py-2 md:py-4">
        <Text
          i18nKey={`pricing.${planKey}.price`}
          className="text-2xl font-bold md:text-5xl"
        />
        <Text
          i18nKey={`pricing.${planKey}.period`}
          className="text-secondary"
        />
      </div>

      {/* Features */}
      <ul className="mt-3 flex-1 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex-start gap-1.5 md:gap-3">
            {feature === "includes" ? (
              <Text
                i18nKey={`pricing.${planKey}.${feature}`}
                className={`${colors[color].icon} text-sm`}
              />
            ) : (
              <>
                <FaCheckCircle className={`${colors[color].icon} text-lg`} />
                <Text
                  i18nKey={`pricing.${planKey}.${feature}`}
                  className="text-sm md:text-base"
                />
              </>
            )}
          </li>
        ))}
      </ul>

      <FormButton
        i18nKey={`pricing.${planKey}.button`}
        onClick={() => onClick()}
        isPending={isPending}
        className={`mt-8 w-full cursor-pointer rounded-md py-3 text-center font-semibold transition-all duration-300 ${colors[color].button}`}
      />
    </div>
  );
};

export default PricingCard;

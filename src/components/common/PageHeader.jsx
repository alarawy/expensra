import Text from "./Text";

const PageHeader = ({ variant }) => {
  return (
    <div
      className={`${variant === "transactions" ? "" : "border-bottom mb-3 pb-3"} `}
    >
      <Text
        tagElement="h1"
        i18nKey={`${variant}.title`}
        className="text-accent pb-1 text-xl md:text-3xl font-bold"
      />
      <Text
        tagElement="p"
        i18nKey={`${variant}.subtitle`}
        className="text-secondary text-xs md:text-sm"
      />
    </div>
  );
};

export default PageHeader;

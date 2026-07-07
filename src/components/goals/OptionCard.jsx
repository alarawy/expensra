import { Text } from "../common";

const OptionCard = ({ icon, title, buttonText, color, onClick }) => {
  return (
    <div className="bg-secondary flex flex-1 items-center gap-4 rounded-xl p-3">
      <span className={`text-5xl md:text-7xl text-${color}`}>{icon}</span>

      <div className="flex-1">
        <Text tagElement="p" className="text-muted" i18nKey={title} />
        <Text
          tagElement="button"
          type="button"
          i18nKey={buttonText}
          onClick={onClick}
          className={`bg-${color} mt-3 cursor-pointer rounded-full px-3 py-1 text-center text-xs transition-all duration-300`}
        />
      </div>
    </div>
  );
};
export default OptionCard;

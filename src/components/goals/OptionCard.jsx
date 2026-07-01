import { Text } from "../common";

const OptionCard = ({ icon, title, buttonText, color, onClick }) => {
  return (
    <div className="bg-secondary flex items-center gap-4 rounded-xl p-4">
      <span className={`text-6xl md:text-8xl text-${color}`}>{icon}</span>

      <div className="flex-1">
        <Text tagElement="p" className="text-muted" i18nKey={title} />
        <Text
          tagElement="button"
          type="button"
          i18nKey={buttonText}
          onClick={onClick}
          className={`bg-${color} mt-4 cursor-pointer rounded-full px-4 py-1 text-center text-sm transition-all duration-300`}
        />
      </div>
    </div>
  );
};
export default OptionCard;

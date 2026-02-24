import { useAppMode } from "../../hooks";
import { FaMoon, FaSun } from "../../assets/icons/icons";

const ThemeToggle = () => {
  const { isDarkMode, toggleMode } = useAppMode();
  return (
    <button
      className="text-accent icons-scale cursor-pointer"
      type="button"
      onClick={toggleMode}
    >
      {isDarkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
    </button>
  );
};

export default ThemeToggle;

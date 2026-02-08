import { FaBarsStaggered, FaMoon, FaSun } from "../../assets/icons/icons";
import { useAppMode } from "../../hooks";
import { UserProfile } from "../common";

const Header = ({ handleOpenMenu }) => {
  const { isDarkMode, toggleMode } = useAppMode();

  return (
    <header className="header">
      <button
        type="button"
        className="icons-scale mr-5 md:hidden"
        onClick={() => handleOpenMenu(true)}
      >
        <FaBarsStaggered size={30} />
      </button>
      <h1 className="text-2xl font-bold">Hello Ahmed 👋</h1>
      <div className="flex-end flex-1 gap-4">
        <button
          className="text-accent icons-scale cursor-pointer"
          type="button"
          onClick={toggleMode}
        >
          {isDarkMode ? <FaSun size={25} /> : <FaMoon size={25} />}
        </button>
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;

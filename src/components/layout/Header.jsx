import { FaBarsStaggered } from "../../assets/icons/icons";
import { LanguageToggle, ThemeToggle, UserProfile } from "../common";

const Header = ({ handleOpenMenu }) => {
  return (
    <header className="header">
      <button
        type="button"
        className="icons-scale lg:hidden"
        onClick={() => handleOpenMenu(true)}
      >
        <FaBarsStaggered size={30} />
      </button>
      <div className="flex-center gap-5">
        <LanguageToggle />
        <ThemeToggle />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
import { NavLink } from "react-router-dom";
import {
  FaBell,
  FaChartBar,
  FaHome,
  FaRegCreditCard,
  FaWallet,
  FaXmark,
  GoGoal,
} from "../../assets/icons/icons";
import { Logo, Overlay } from "../common";

const Sidebar = ({ isOpenMenu, handleOpenMenu }) => {
  const links = [
    { name: "Home", path: "/dashboard", icon: <FaHome size={25} /> },
    {
      name: "Transactions",
      path: "/transactions",
      icon: <FaRegCreditCard size={20} />,
    },
    { name: "Budget", path: "/budget", icon: <FaWallet size={20} /> },
    { name: "Analytics", path: "/analytics", icon: <FaChartBar size={20} /> },
    { name: "Goals", path: "/goals", icon: <GoGoal size={20} /> },
    {
      name: "Notifications",
      path: "/notifications",
      icon: <FaBell size={20} />,
    },
  ];
  return (
    <>
      {isOpenMenu && (
        <span className="md:hidden">
          <Overlay onClick={() => handleOpenMenu(false)} />
        </span>
      )}
      <aside className={`sidebar ${isOpenMenu ? "left-0" : "-left-[400px]"}`}>
        <div className="relative h-full">
          <button
            type="button"
            className="icons-scale absolute top-0 right-0 md:hidden"
            onClick={() => handleOpenMenu(false)}
          >
            <FaXmark size={25} />
          </button>
          <Logo className="m-auto w-30 pb-5" />
          <ul className="border-top space-y-3 pt-10">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink className="link" to={link.path}>
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="link flex-center absolute bottom-8 left-0 w-full bg-red-700 text-white hover:bg-red-600"
          >
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

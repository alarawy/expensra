import { NavLink } from "react-router-dom";
import {
  FaChartBar,
  FaDollarSign,
  FaHome,
  FaMoneyBillTrendUp,
  FaXmark,
  IoWalletOutline,
  PiHandCoinsFill,
} from "../../assets/icons/icons";
import { Logo, Overlay, Text } from "../common";
import { useLogoutUser } from "../../hooks";
import { useModal } from "../../context";

const Sidebar = ({ isOpenMenu, handleOpenMenu }) => {
  const { mutate: logoutUser } = useLogoutUser();
  const { openModal } = useModal();

  const links = [
    { i18nKey: "sidebar.dashboard", path: "/dashboard", icon: <FaHome /> },
    {
      i18nKey: "sidebar.transactions",
      path: "/transactions",
      icon: <PiHandCoinsFill />,
    },
    { i18nKey: "sidebar.budget", path: "/budget", icon: <IoWalletOutline /> },
    {
      i18nKey: "sidebar.expense",
      path: "/expense",
      icon: <FaMoneyBillTrendUp />,
    },
    { i18nKey: "sidebar.income", path: "/income", icon: <FaDollarSign /> },
    { i18nKey: "sidebar.analytics", path: "/analytics", icon: <FaChartBar /> },
  ];

  return (
    <>
      {isOpenMenu && (
        <span className="lg:hidden">
          <Overlay onClick={() => handleOpenMenu(false)} />
        </span>
      )}

      <aside
        className={`sidebar ${
          isOpenMenu ? "ltr:left-0 rtl:right-0" : "ltr:-left-125 rtl:-right-125"
        }`}
      >
        <div className="flex h-full flex-col">
          <button
            type="button"
            className="icons-scale absolute top-4 text-2xl lg:hidden ltr:right-4 rtl:left-4"
            onClick={() => handleOpenMenu(false)}
          >
            <FaXmark />
          </button>

          <Logo showTitle className="m-auto w-30" />
          <div className="flex-between mt-8 flex-1 flex-col">
            <ul className="border-top w-full flex-1 space-y-3 pt-5">
              {links.map((link, index) => (
                <li key={index} onClick={() => handleOpenMenu(false)}>
                  <NavLink className="link" to={link.path}>
                    <span className="text-2xl">{link.icon}</span>
                    <Text tagElement="span" i18nKey={link.i18nKey} />
                  </NavLink>
                </li>
              ))}
            </ul>

            <Text
              tagElement="button"
              type="button"
              onClick={() =>
                openModal("logoutConfirm", {
                  onConfirm: logoutUser,
                })
              }
              className="link flex-center w-full bg-red-700 text-white hover:bg-red-600"
              i18nKey="auth.logout"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

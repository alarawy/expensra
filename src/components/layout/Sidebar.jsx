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
import { Loading, Logo, Overlay, Text } from "../common";
import { useLogoutUser } from "../../hooks";

const Sidebar = ({ isOpenMenu, handleOpenMenu }) => {
  const {mutate: logoutUser, isPending} = useLogoutUser();
  const links = [
  { i18nKey: "sidebar.dashboard", path: "/dashboard", icon: <FaHome /> },
  { i18nKey: "sidebar.transactions", path: "/transactions", icon: <PiHandCoinsFill /> },
  { i18nKey: "sidebar.budget", path: "/budget", icon: <IoWalletOutline /> },
  { i18nKey: "sidebar.expense", path: "/expense", icon: <FaMoneyBillTrendUp /> },
  { i18nKey: "sidebar.income", path: "/income", icon: <FaDollarSign /> },
  { i18nKey: "sidebar.analytics", path: "/analytics", icon: <FaChartBar /> },
  ];

  if(isPending) return <Loading />
  
  return (
    <>
      {isOpenMenu && (
        <span className="lg:hidden">
          <Overlay onClick={() => handleOpenMenu(false)} />
        </span>
      )}
      <aside className={`sidebar ${isOpenMenu ? "ltr:left-0 rtl:right-0" : "ltr:-left-[500px] rtl:-right-[500px]"}`}>
        <div className="relative h-full">
          <button
            type="button"
            className="icons-scale absolute top-0 text-2xl ltr:right-0 rtl:left-0 lg:hidden"
            onClick={() => handleOpenMenu(false)}
          >
            <FaXmark />
          </button>
          <Logo className="m-auto w-30 pb-5" />
          <ul className="border-top space-y-3 pt-10">
            {links.map((link, index) => (
              <li key={index}>
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
            onClick={()=> logoutUser()}
            className="link flex-center absolute bottom-0 left-0 w-full bg-red-700 text-white hover:bg-red-600"
            i18nKey="auth.logout"
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

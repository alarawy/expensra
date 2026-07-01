import {
  FaChartBar,
  FaDollarSign,
  FaHome,
  FaMoneyBillTrendUp,
  FaXmark,
  GoGoal,
  IoWalletOutline,
  MdFamilyRestroom,
  PiHandCoinsFill,
} from "../../assets/icons/icons";

export const useSidebarLinks = () => {
  const links = [
    { i18nKey: "sidebar.dashboard", path: "/dashboard", icon: FaHome },
    {
      i18nKey: "sidebar.transactions",
      path: "/transactions",
      icon: PiHandCoinsFill,
    },
    { i18nKey: "sidebar.budget", path: "/budget", icon: IoWalletOutline },
    { i18nKey: "sidebar.goals", path: "/goals", icon: GoGoal },
    {
      i18nKey: "sidebar.expense",
      path: "/expense",
      icon: FaMoneyBillTrendUp,
    },
    { i18nKey: "sidebar.income", path: "/income", icon: FaDollarSign },
    { i18nKey: "sidebar.analytics", path: "/analytics", icon: FaChartBar },
  ];

  return links;
};

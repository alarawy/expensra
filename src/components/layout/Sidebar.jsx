import { NavLink } from "react-router-dom";
import { Logo, Overlay, Text } from "../common";
import { useLogoutUser, useSidebarLinks } from "../../hooks";
import { useModal } from "../../context";
import { FaXmark } from "../../assets/icons/icons";

const Sidebar = ({ isOpenMenu, handleOpenMenu }) => {
  const { mutate: logoutUser } = useLogoutUser();
  const { openModal } = useModal();
  const links = useSidebarLinks();

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

          <Logo showTitle className="m-auto w-25" />
          <div className="flex-between mt-8 flex-1 flex-col">
            <ul className="border-top w-full flex-1 space-y-2 pt-5">
              {links.map((link, index) => (
                <li key={index} onClick={() => handleOpenMenu(false)}>
                  <NavLink className="link" to={link.path}>
                    <span className="text-2xl">{<link.icon />}</span>
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
                  variant: "logout",
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

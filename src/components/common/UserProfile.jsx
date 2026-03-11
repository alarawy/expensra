import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogoutUser, useOutsideClick } from "../../hooks";
import { CiUser, VscSignOut } from "../../assets/icons/icons";
import { Avatar, Text } from "./index";
import { useModal } from "../../context";

export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const { mutate: logoutUser } = useLogoutUser();
  const { openModal } = useModal();
  const ref = useOutsideClick(() => setOpen(false));

  const user = {
    firstName: "Ahmed",
    lastName: "Reda",
    email: "ahmed@gmail.com",
  };

  return (
    <div ref={ref} className="relative">
      {/* Avatar Button */}
      <button onClick={() => setOpen(!open)}>
        <Avatar />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="border-default border-default bg-primary absolute z-10 mt-5 w-50 rounded-md shadow-2xl ltr:right-0 rtl:left-0">
          <div className="border-bottom px-4 py-3 text-left text-sm">
            <Text
              tagElement="h6"
              className="font-medium"
            >{`${user.firstName} ${user.lastName}`}</Text>
            <Text tagElement="span" className="text-muted truncate">
              {user.email}
            </Text>
          </div>

          <ul className="space-y-3 p-2 text-sm font-medium">
            <li className="profile-list">
              <CiUser size={20} />
              <Text tagElement={Link} to="/profile" i18nKey="profile.title" />
            </li>
            <li
              onClick={() => openModal("logoutConfirm", logoutUser())}
              className="profile-list text-red-500"
            >
              <VscSignOut size={20} />
              <Text
                tagElement="button"
                type="button"
                className="cursor-pointer"
                i18nKey="auth.logout"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

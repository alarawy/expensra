import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogoutUser, useOutsideClick } from "../../hooks";
import { CiUser, VscSignOut } from "../../assets/icons/icons";
import AvatarImage from "../../assets/images/avatar.png";
import { Text } from "./index";

export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));
  const { mutate: logoutUser} = useLogoutUser();
  
  const user = {
    firstName: 'Ahmed',
    lastName: 'Reda',
    email: "ahmed@gmail.com"
  }

  return (
    <div ref={ref} className="relative">
      {/* Avatar Button */}
      <button onClick={() => setOpen(!open)}>
        <img
          className="bg-accent h-10 w-10 cursor-pointer rounded-full"
          src={AvatarImage}
          alt="User profile"
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="border-default border-default bg-primary absolute rtl:left-0 ltr:right-0 z-10 mt-5 w-50 rounded-md shadow-2xl">
          <div className="border-bottom px-4 py-3 text-sm text-left">
            <Text tagElement="h6" className="font-medium">{`${user.firstName} ${user.lastName}`}</Text>
            <Text tagElement="span" className="text-muted truncate">{user.email}</Text>
          </div>

          <ul className="space-y-3 p-2 text-sm font-medium">
            <li className="profile-list">
              <CiUser size={20} />
              <Text tagElement={Link} to="/profile" i18nKey="profile.title" />
            </li>
            <li className="profile-list text-red-500">
              <VscSignOut size={20} />
              <Text tagElement="button" type="button" onClick={()=> logoutUser()} className="cursor-pointer" i18nKey="auth.logout" />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

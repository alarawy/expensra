import { useState } from "react";
import { Link } from "react-router-dom";
import { useOutsideClick } from "../../hooks";
import { CiUser, VscSignOut } from "../../assets/icons/icons";
import AvatarImage from "../../assets/images/avatar.png";

export default function UserProfile() {
  const [open, setOpen] = useState(false);
  const ref = useOutsideClick(() => setOpen(false));

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
        <div className="border-default border-default bg-primary absolute right-0 z-10 mt-5 w-50 rounded-md shadow-2xl">
          <div className="border-bottom px-4 py-3 text-sm">
            <div className="font-medium">Ahmed Reda</div>
            <div className="text-muted truncate">ahmed@gmail.com</div>
          </div>

          <ul className="space-y-3 p-2 text-sm font-medium">
            <li className="profile-list">
              <CiUser size={20} />
              <Link to="/profile">Your profile</Link>
            </li>
            <li className="profile-list text-red-500">
              <VscSignOut size={20} />
              <button type="button" className="cursor-pointer">
                Sign out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

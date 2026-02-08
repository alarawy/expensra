import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./index";
import { useState } from "react";
const AppLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div className="grid h-dvh grid-cols-[380px_1fr] grid-rows-[80px_1fr]">
      <Header handleOpenMenu={setIsOpenMenu} />
      <Sidebar isOpenMenu={isOpenMenu} handleOpenMenu={setIsOpenMenu} />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

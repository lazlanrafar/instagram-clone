import { useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

import AppNavbarProfile from "./navbarProfile";
import AppNavbarMenus from "./navbarMenus";
import AppNavbarCopyright from "./navbarCopyright";

export default function AppNavbar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="md:mt-9">
      <aside className="fixed md:sticky -top-2 z-30 w-full md:w-60 py-0 md:py-5 h-fit transition-default bg-neutral-50 md:bg-transparent border-b-2 md:border-b-0">
        <div className="md:p-4 overflow-y-auto rounded-xl w-full">
          <div className="flex flex-row items-start md:flex-col md:justify-center justify-between p-4 md:p-0">
            <AppNavbarProfile isActive={isActive} />

            <div className={`flex ${isActive ? "flex-col-reverse justify-between" : "flex-row"}`}>
              <div className="md:hidden">
                <Hamburger toggled={isActive} toggle={setIsActive} />
              </div>
            </div>
          </div>
          <hr className="md:my-4 mb-4 hidden md:block" />
          <AppNavbarMenus isActive={isActive} />
          <hr className="md:my-4 mb-4 hidden md:block" />
          <AppNavbarCopyright />
        </div>
      </aside>
    </div>
  );
}

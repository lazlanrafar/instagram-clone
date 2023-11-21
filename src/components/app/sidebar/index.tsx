import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarMenus } from "../../../constants";
import { Turn as Hamburger } from "hamburger-react";

import AppSidebarProfile from "./sidebarProfile";
import AppSidebarCopyright from "./sidebarCopyright";

export default function AppSidebar() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = useLocation().pathname;

  return (
    <div className="md:mt-9">
      <aside
        className="fixed md:sticky -top-2 z-30 w-full md:w-60 py-0 md:py-5 h-fit transition-default bg-neutral-50 md:bg-transparent border-b-2 md:border-b-0"
        aria-label="NavigationBar"
      >
        <div className="md:p-4 overflow-y-auto rounded-xl w-full">
          <div className="flex flex-row items-start md:flex-col md:justify-center justify-between p-4 md:p-0">
            <AppSidebarProfile isActive={isActive} />

            <div className={`flex ${isActive ? "flex-col-reverse justify-between" : "flex-row"}`}>
              <div className="md:hidden">
                <Hamburger toggled={isActive} toggle={setIsActive} />
              </div>
            </div>
          </div>
          <hr className="md:my-4 mb-4 hidden md:block" />
          <nav
            className={`transition-default md:flex flex-col p-4 md:p-0 h-screen md:h-auto  ${
              isActive ? "flex" : "hidden"
            }`}
          >
            <ul className="flex flex-col space-y-2">
              {sidebarMenus.map((menu) => (
                <li
                  key={menu.name}
                  className={`${
                    pathname === menu.link && "bg-neutral-200/50"
                  }  text-dark hover:bg-neutral-200 rounded-lg capitalize group transition-default hover:scale-100`}
                >
                  <Link to={menu.link} className="flex gap-2 px-4 py-2 group-hover:gap-3 transition-default">
                    <span>{menu.icon}</span>
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <hr className="md:my-4 mb-4 hidden md:block" />
          <AppSidebarCopyright />
        </div>
      </aside>
    </div>
  );
}

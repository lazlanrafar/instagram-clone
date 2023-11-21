import { Link, useLocation } from "react-router-dom";
import { sidebarMenus } from "../../../constants";
import AppSidebarProfile from "./sidebarProfile";

export default function AppSidebar() {
  const pathname = useLocation().pathname;

  return (
    <div className="mt-9">
      <aside className="fixed md:sticky top-0 z-30 w-full md:w-60 py-0 md:py-5 h-fit">
        <div className="md:p-4 overflow-y-auto rounded-xl">
          <AppSidebarProfile />
          <hr className="md:my-4 mb-4" />
          <nav className="md:flex flex-col p-4 md:p-0 h-screen md:h-auto">
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
        </div>
      </aside>
    </div>
  );
}

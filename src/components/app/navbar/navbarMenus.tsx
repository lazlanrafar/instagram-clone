import { Link, useLocation } from "react-router-dom";
import { sidebarMenus } from "../../../constants";

interface Props {
  isActive: boolean;
}

export default function AppNavbarMenus({ isActive }: Props) {
  const pathname = useLocation().pathname;

  return (
    <nav
      className={`transition-default md:flex flex-col p-4 md:p-0 h-screen md:h-auto  ${isActive ? "flex" : "hidden"}`}
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
  );
}

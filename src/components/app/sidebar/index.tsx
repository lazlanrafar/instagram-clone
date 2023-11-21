import { Link } from "react-router-dom";
import { sidebarMenus } from "../../../constants";

export default function AppSidebar() {
  return (
    <div className="mt-9">
      <aside className="fixed md:sticky top-0 z-30 w-full md:w-60 py-0 md:py-5 h-fit">
        <div>
          <nav>
            <ul>
              {sidebarMenus.map((menu) => (
                <li key={menu.name}>
                  <Link to={menu.link}>
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

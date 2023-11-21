import { BiHome, BiCategoryAlt, BiLeaf, BiPaperPlane, BiBox, BiSitemap } from "react-icons/bi";

const iconSize = 20;

export const sidebarMenus = [
  {
    name: "home",
    link: "/",
    icon: <BiHome size={iconSize} />,
  },
  {
    name: "about",
    link: "/about",
    icon: <BiLeaf size={iconSize} />,
  },
  {
    name: "roadmap",
    link: "/roadmap",
    icon: <BiSitemap size={iconSize} />,
  },
  {
    name: "projects",
    link: "/projects",
    icon: <BiBox size={iconSize} />,
  },
  {
    name: "dashboard",
    link: "/dashboard",
    icon: <BiCategoryAlt size={iconSize} />,
  },
  {
    name: "contact",
    link: "/contact",
    icon: <BiPaperPlane size={iconSize} />,
  },
];

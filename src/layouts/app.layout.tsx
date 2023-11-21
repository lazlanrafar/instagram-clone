import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/app";

export default function LayoutApp() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <AppSidebar />
        <Outlet />
      </div>
    </div>
  );
}

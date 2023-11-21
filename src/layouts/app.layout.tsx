import { Outlet } from "react-router-dom";
import { AppNavbar } from "../components/app";

export default function LayoutApp() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <AppNavbar />
        <div className="w-full lg:max-w-4xl md:min-h-screen">
          <div className="mb-10 md:mt-14 mt-20 py-4 md:px-4 px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

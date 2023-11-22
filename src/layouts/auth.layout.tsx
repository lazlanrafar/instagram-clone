import { useUserContext } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function LayoutAuth() {
  const { isAuthenticated } = useUserContext();

  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

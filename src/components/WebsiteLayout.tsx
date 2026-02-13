// src/components/WebsiteLayout.tsx
import { Outlet } from "react-router-dom";
import DashboardHeader from "./Header";

export default function WebsiteLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <Outlet />
    </div>
  );
}

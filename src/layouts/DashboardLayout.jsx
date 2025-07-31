import { Outlet } from "react-router";
import Sidebar from "../components/dashboard/Sidebar";

export default function DashboardLayout() {
  return (
    <div className="dashboard_layout">
      <Sidebar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

import Statistics from "../components/dashboard/home/Statistcs";
import QuickActions from "../components/dashboard/home/QuickActions";
import TopBanner from "../components/dashboard/home/TopBanner";
import DashboardCharts from "../components/dashboard/home/DashboardCharts";

export default function DashBoard() {
  return (
    <section className="dashboard_section">
      <TopBanner />
      <QuickActions />
      <Statistics />
      <DashboardCharts />
    </section>
  );
}

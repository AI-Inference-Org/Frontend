import DashboardView from "../Components/DashboardView";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function Dashboard() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <DashboardView />
    </div>
  );
}

export default Dashboard;

import UserDashboard from "../Components/userDashboard";
import SideBar from "../layouts/customerSideBar";
import { section } from "../config/userDashboard";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <UserDashboard />
    </div>
  );
}

export default AIPluginPage;

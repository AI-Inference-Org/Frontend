import UserCards from "../Components/userCards";
import SideBar from "../layouts/customerSideBar";
import { section } from "../config/userDashboard";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <UserCards />
    </div>
  );
}

export default AIPluginPage;

import ProvidersListings from "../Components/ProvidersListings";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <ProvidersListings />
    </div>
  );
}

export default AIPluginPage;

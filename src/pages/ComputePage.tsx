import ComputeForm from "../Components/ComputeListingForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <ComputeForm />
    </div>
  );
}

export default AIPluginPage;

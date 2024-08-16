import AIPulginForm from "../Components/AIPluginForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <AIPulginForm />
    </div>
  );
}

export default AIPluginPage;

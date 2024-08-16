import AIApplicationForm from "../Components/AIApplicationForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function AIApplicationPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <AIApplicationForm />
    </div>
  );
}

export default AIApplicationPage;

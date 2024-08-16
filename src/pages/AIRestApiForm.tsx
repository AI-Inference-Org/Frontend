import RestApiForm from "../Components/RestApiForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function RestApiPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <RestApiForm />
    </div>
  );
}

export default RestApiPage;

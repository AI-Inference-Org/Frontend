import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/userDashboard";
import { TableDemo } from "../Components/TableComponent";

function AIPluginPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <TableDemo />
    </div>
  );
}

export default AIPluginPage;

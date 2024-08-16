import BinariesPage from "../Components/BinariesForm";
import SideBar from "../layouts/sideBarLayout";
import { section } from "../config/providerDashborad";

function AIBinaryPage() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <BinariesPage />
    </div>
  );
}

export default AIBinaryPage;

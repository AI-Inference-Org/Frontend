import ComputeMarketPlaceCards from "../Components/ComputeCards";
import SideBar from "../layouts/customerSideBar";
import { section } from "../config/userDashboard";

function ComputeMarketPlace() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <ComputeMarketPlaceCards />
    </div>
  );
}

export default ComputeMarketPlace;

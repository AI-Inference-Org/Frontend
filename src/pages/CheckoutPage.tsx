import CheckoutComponent from "../Components/CheckOutComponent";
import SideBar from "../layouts/customerSideBar";
import { section } from "../config/userDashboard";

function ComputeMarketPlace() {
  return (
    <div className="flex">
      <SideBar section={section} />
      <CheckoutComponent />
    </div>
  );
}

export default ComputeMarketPlace;

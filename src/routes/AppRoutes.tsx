import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "../pages/LandingPage";
import AuthenticationPage from "../pages/AuthenticationPage";
import SignUpAuthPage from "../pages/SignUpAuthPage";
import AIApplicationPage from "../pages/AIApplicationPage";
import BinariesForm from "../pages/BinariesPage";
import AIPluginPage from "../pages/AIPluginPage";
import RestApiPage from "../pages/AIRestApiForm";
import Dashboard from "../pages/DashboardPage";
import ComputePage from "../pages/ComputePage";
import ProvidersListingPage from "../pages/ProvidersListingsPage";
import UserDashboard from "../pages/UserDashboard";
import UserAIMarketPlace from "../pages/userAIMarketPlace";
import ComputeMarketPlace from "../pages/ComputeMarketplace";
import CheckOutPage from "../pages/CheckoutPage";
import { useEffect } from "react";

const AppRoutes = () => {

  const navigate = useNavigate();

  useEffect(()=>{

    const token = localStorage.getItem("access");

    if (token === null) {
      navigate("/");
    }

  },[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/customer/login"
          element={
            <AuthenticationPage entity={"customer"} entityType={"customer"} />
          }
        />
        <Route
          path="/provider/login"
          element={
            <AuthenticationPage entity={"proivder"} entityType={"provider"} />
          }
        />
        <Route
          path="/customer/signup"
          element={
            <SignUpAuthPage entity={"customer"} entityType={"customer"} />
          }
        />
        <Route
          path="/provider/signup"
          element={
            <SignUpAuthPage entity={"proivder"} entityType={"provider"} />
          }
        />
        <Route path="/provider/dashboard" element={<Dashboard />} />
        <Route path="/ai/application" element={<AIApplicationPage />} />
        <Route path="/binaries" element={<BinariesForm />} />
        <Route path="/plugins" element={<AIPluginPage />} />
        <Route path="/apis" element={<RestApiPage />} />
        <Route path="/list/compute" element={<ComputePage />} />
        <Route path="/listings" element={<ProvidersListingPage />} />
        <Route path="/customer/dashboard" element={<UserDashboard />} />
        <Route path="/marketplace" element={<UserAIMarketPlace />} />
        <Route path="/compute/marketplace" element={<ComputeMarketPlace />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;

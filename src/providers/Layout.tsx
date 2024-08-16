import React, { useEffect } from "react";
// import Navbar from "@/components/shared/Navbar";
import { Toaster } from "../Components/ui/toaster";
import {
  useBackButton,
  useClosingBehavior,
  useViewport,
} from "@telegram-apps/sdk-react";
import { useNavigate, useLocation } from "react-router-dom";
function Layout({ children }: { children: React.ReactNode }) {
  const bb = useBackButton();
  const close = useClosingBehavior(); // will be undefined or ClosingBehavior.
  const viewport = useViewport(); // will be undefined or InitData.
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    function goBack() {
      navigate("/");
    }
    if (close) {
      close.enableConfirmation();
    }
    if (viewport) {
      viewport.expand();
    }
    if (bb) {
      if (location.pathname === "/") {
        bb.hide();
        return;
      }
      bb.show();
      bb.on("click", goBack);
    }
  }, [bb, navigate, location]);

  return (
    <main>
      {/* <Navbar /> */}
      <main className="">{children}</main>
      <Toaster richColors />
    </main>
  );
}

export default Layout;

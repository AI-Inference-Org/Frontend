import React, { useEffect } from "react";
import { Toaster } from "../Components/ui/toaster";
import {
  useBackButton,
  useClosingBehavior,
  useViewport,
} from "@telegram-apps/sdk-react";
import { useNavigate, useLocation } from "react-router-dom";

function Layout({ children }: { children: React.ReactNode }) {
  const bb = useBackButton();
  const close = useClosingBehavior(); // This might be undefined or a ClosingBehavior.
  const viewport = useViewport(); // This might be undefined or InitData.
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
      } else {
        bb.show();
        bb.on("click", goBack);
      }

      // Cleanup listener on unmount
      return () => {
        bb.off("click", goBack);
      };
    }
  }, [bb, close, viewport, navigate, location]);

  return (
    <main>
      {/* <Navbar /> */}
      <div className="">{children}</div>
      <Toaster />
    </main>
  );
}

export default Layout;

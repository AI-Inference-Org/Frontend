import "regenerator-runtime/runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import Layout from "./providers/Layout";
import { TelegramProvider } from "./providers/TelegramProvider";
import App from "./App";
import { config } from "./config/wagmiProvider";
import { BrowserRouter } from "react-router-dom";
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TelegramProvider>
            <BrowserRouter>
              <Layout>
                <App />
              </Layout>
            </BrowserRouter>
          </TelegramProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>
);

import { getDefaultWallets, getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { arbitrum, arbitrumSepolia, localhost } from "wagmi/chains";

const { wallets } = getDefaultWallets();
console.log("test", import.meta.env.VITE_WALLETCONNECT_PROJECT_ID);

export const WALLETCONNECT_PROJECT_ID =
  import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ?? "";
console.log(WALLETCONNECT_PROJECT_ID);
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn(
    "You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable"
  );
}
export const config = getDefaultConfig({
  appName: "RainbowKit demo",
  projectId: WALLETCONNECT_PROJECT_ID,
  wallets: [
    ...wallets,
    {
      groupName: "Other",
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    arbitrum,
    ...(import.meta.env.ENABLE_TESTNETS === "true"
      ? [arbitrumSepolia, arbitrum, localhost]
      : []),
  ],
  ssr: true,
});

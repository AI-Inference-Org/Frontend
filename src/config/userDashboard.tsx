import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  LayoutDashboardIcon,
  List,
  Compute,
  LogOutIcon,
} from "./dashboardIcons";
import Section from "../types/sideBarTypes";

export const section: Section[] = [
  {
    title: "General",
    links: [
      {
        href: "/",
        label: "Home",
        icon: HomeIcon,
      },
      {
        href: "/customer/dashboard",
        label: "Dashboard",
        icon: LayoutDashboardIcon,
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        href: "/marketplace",
        label: "AI Marketplace",
        icon: BriefcaseIcon,
      },
      {
        href: "/compute/marketplace",
        label: "Compute Marketplace",
        icon: FolderIcon,
      },
    ],
  },
  {
    title: "My Orders",
    links: [
      // {
      //   href: "/orders",
      //   label: "My Orders",
      //   icon: Compute,
      // },
      {
        href: "/payments",
        label: "My Payments",
        icon: List,
      },
    ],
  },
];

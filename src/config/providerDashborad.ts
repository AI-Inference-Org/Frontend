import {
  BriefcaseIcon,
  FolderIcon,
  HomeIcon,
  LayoutDashboardIcon,
  ClipboardIcon,
  SlackIcon,
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
        href: "/provider/dashboard",
        label: "Dashboard",
        icon: LayoutDashboardIcon,
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        href: "/ai/application",
        label: "AI Applications",
        icon: BriefcaseIcon,
      },
      {
        href: "/binaries",
        label: "Application Binaries",
        icon: FolderIcon,
      },
      {
        href: "/plugins",
        label: "AI Plugins",
        icon: ClipboardIcon,
      },
      {
        href: "/apis",
        label: "API's",
        icon: SlackIcon,
      },
    ],
  },
  {
    title: "Compute Offerings",
    links: [
      {
        href: "/list/compute",
        label: "List Compute",
        icon: Compute,
      },
      {
        href: "/listings",
        label: "All Listings",
        icon: List,
      },
    ],
  },
  {
    title: "Log Out",
    links: [
      {
        href: "/logout",
        label: "Log Out",
        icon: LogOutIcon,
      },
    ],
  },
];

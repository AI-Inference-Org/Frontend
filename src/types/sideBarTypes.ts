import { IconType } from "react-icons";

interface Link {
  href: string;
  label: string;
  icon: IconType;
}

export default interface Section {
  title: string;
  links: Link[];
}

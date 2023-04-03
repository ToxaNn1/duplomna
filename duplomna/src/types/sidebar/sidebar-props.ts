import { StringOrNumber } from "@/types/global";

export interface GlobalSidebarItemProps {
  index: string;
  link?: string;
  icon: string;
  title: string;
  dividerIndex: StringOrNumber;
  isLastItem: boolean;
  isCollapsed: boolean;
}

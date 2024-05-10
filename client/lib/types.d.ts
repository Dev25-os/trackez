import { IconType } from "react-icons";

export type SidebarItemType = {
  id: number;
  label: string;
  icon: IconType;
  href: string;
};

export type CreateTicketSheetType = {
  openSheet: boolean;
  onChangeSheet: (value: boolean) => void;
};

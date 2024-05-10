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

export type CategoriesType = {
  id: Number;
  categoryName: string;
};

export type PriorityType = {
  id: Number;
  priority: string;
};

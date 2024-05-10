"use client"
import { SidebarData } from "@/constant/sidebarData";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="p-4">
      {SidebarData.map((item) => (
        <SidebarItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Sidebar;

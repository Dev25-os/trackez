"use client";
import { cn } from "@/lib/utils";
import { SidebarItemType } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SidebarItem = ({ id, label, icon: Icon, href }: SidebarItemType) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 mb-3 hover:bg-slate-50 p-2 rounded",
          pathname === href
            ? "bg-slate-800 text-white dark:bg-white dark:text-slate-800  hover:bg-slate-800"
            : "dark:hover:bg-slate-800/90 "
        )}
      >
        <Icon size={20} /> {label}
      </Link>
    </div>
  );
};

export default SidebarItem;

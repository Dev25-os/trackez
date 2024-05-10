import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";

export const SidebarData = [
  {
    id: 1,
    label: "Ticket Management",
    icon: BsFillTicketPerforatedFill,
    href: "/",
  },
  {
    id: 2,
    label: "Project Management",
    icon: AiFillProject,
    href: "/projects",
  },
  {
    id: 3,
    label: "Expense Management",
    icon: FaMoneyBill1Wave,
    href: "/expenses",
  },
  {
    id: 4,
    label: "Doc Management",
    icon: IoDocuments,
    href: "/docs",
  },
];

import Image from "next/image";


import Profile from "./Profile";
import logo from "@/public/icons/svg/logo-no-background.svg";
import { ThemeSwitcher } from "./ThemeSwitcher";


const Navbar = () => {
  
  return (
    <div className="p-4 border-b flex items-center justify-between">
      <div className="logo">
        <Image src={logo} alt="logo" width={100} priority />
      </div>
      <div className="profile flex items-center gap-4">
        <ThemeSwitcher />
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;

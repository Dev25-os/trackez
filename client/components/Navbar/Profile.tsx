"use client";
import Image from "next/image";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import logo from "@/public/icons/svg/logo-no-background.svg";

const Profile = () => {
  return (
    <div>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="rounded-full w-full">
            <Image
              src={logo}
              alt="avatar"
              width={50}
              className="w-full object-contain"
            />
          </MenubarTrigger>
          <MenubarContent>
           
            <MenubarItem>Profile</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Reset Password</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Profile;

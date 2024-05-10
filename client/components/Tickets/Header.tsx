"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CreateTicket from "./CreateTicket";

const Header = () => {
  const [openSheet, setOpenSheet] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center justify-between border-b pb-3">
        <Button
          variant={"ghost"}
          className="flex items-center gap-1"
          onClick={() => setOpenSheet(true)}
        >
          Create Ticket <FaPlus />
        </Button>
        <div className="relative">
          <Input placeholder="Search..." className="w-72 pr-9 " />
          <IoSearchOutline className="absolute top-2.5 right-3 cursor-pointer " />
        </div>
      </div>
      <CreateTicket openSheet={openSheet} onChangeSheet={setOpenSheet} />
    </>
  );
};

export default Header;

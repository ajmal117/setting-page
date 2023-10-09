import React from "react";
import Image from "next/image";
import { BackIcon, Search, UserP, Bell } from "@/components/icons";
import user from "../public/image/user.png";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex justify-between h-[72px] border border-l-0">
        <div className="flex gap-6  w-full items-center px-2">
          <div className="my-auto">
            <BackIcon className={"hover:cursor-pointer"} />
          </div>
          <div className="flex gap-2 flex-row items-center  rounded-md p-1 px-3 bg-[#F5F5F5]  w-1/3 lg:w-[600px]  h-11">
            <Search className={""} />
            <input
              type="text"
              className="  font-normal bg-[#F5F5F5] text-base w-full outline-none p-2"
              placeholder="Search by employee or application"
            ></input>
          </div>
        </div>
        <div className="flex gap-2 ">
          <div className="my-auto mx-2 rounded-md px-2 flex gap-1 h-11 bg-violet-50 items-center w-56">
            <UserP className={""} />
            <button type="button " className="font-normal text-base w-36">Invite members</button>
          </div>
          <Bell className={" my-auto px-1 hover:cursor-pointer"} />
          <div className="my-auto">
            <Image
              width={36}
              height={36}
              alt="image"
              src={user}
              className=""
            ></Image>
          </div>
          <select
            name=""
            id=""
            className="my-auto outline-none h-8 hover:cursor-pointer"
          >
            <option value="" className="">User</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Navbar;

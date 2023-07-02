import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";
import { BsFillBagDashFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { TbBellRinging2Filled } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { PiDotsNineBold } from "react-icons/pi";
import { GiGymBag } from "react-icons/gi";
import { BsLinkedin } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="flex justify-center bg-white ">
    <div className="flex  justify-between p-2 max-w-[1128px] gap-10">
      <div className="flex  items-center gap-2 text-lg">
        <BsLinkedin className="text-4xl text-sky-700"/>
        <input type="text" placeholder="search" className="w-[280px] bg-gray-100 p-1" />
      </div>
      <div className="flex gap-7">
        <div className="flex text-2xl gap-9 items-center">
          <div className="flex flex-col justify-center items-center">
            <AiFillHome />
            <h1 className="text-xs ">Home</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <MdPeopleOutline />
            <h1 className="text-xs ">My Network</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsFillBagDashFill />
            <h1 className="text-xs ">Jobs</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <AiFillMessage />
            <h1 className="text-xs ">Messaging</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <TbBellRinging2Filled />
            <h1 className="text-xs ">Notification</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <BsPersonCircle />
            <h1 className="text-xs ">Me</h1>
          </div>
        </div>
        <div className="flex gap-2 text-2xl">
          <div className="flex flex-col justify-center items-center">
            <PiDotsNineBold />
            <h1 className="text-xs ">For business</h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <GiGymBag />
            <h1 className="text-xs ">post a job for free</h1>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;

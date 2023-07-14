import React from "react";
import { tumb_img } from "../constant";
import { cir_img } from "../constant";
import { BsCardImage } from "react-icons/bs";
import { PiVideoFill } from "react-icons/pi";
import { FaShoppingBag, FaRegListAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="home-page mt-6 gap-6 body ">
      <div className="leftsidebar w-[225px] bg-white flex flex-col   ">
        <div>
          <div className=" ">
            <img src={tumb_img} />
            <div className=" w-16 -mt-9 mx-auto rounded-full">
              <img src={cir_img} className="rounded-full" alt="" />
            </div>
          </div>
          <div className="mt-5">
            <h1>Shivam Seth</h1>
            <h1 className="text-xs p-2 ">
              DSA Fellow @Nextleap || FrontEnd Developer || React||🥈Silver
              Badge in Java || Guitarist || Eat, Code, Sleep🔁 || New to Open
              source contribution ♨️🪄||
            </h1>
          </div>
          <div className="flex flex-col items-start ml-2 py-5">
            <h1>Analytics&tools</h1>
            <h1 className="text-xs">1,288 post impression</h1>
          </div>
          <div className="flex flex-col items-start ml-2 py-5">
            <h1 className="text-xs">1,288 post impression</h1>
            <h1 className="text-sm p-0">Get Hired Faster, Try Premium Free</h1>
          </div>
          <div className="flex flex-col items-start ml-2 p-2">
            <h1>My items</h1>
          </div>
        </div>

        <div className="bg-green-300 ">hi</div>
      </div>

      <div className="middlebar  min-w-[576px]">
        <div className="bg-white ">
          <div className="flex justify-center items-center ">
            <img src={cir_img} alt="" className="w-14 rounded-full m-2" />
            <input
              type="text"
              placeholder="Start a post"
              className=" w-[85%] rounded-full h-12 px-3 border-solid border-gray-400  border-[1px] "
            />
          </div>
          <div className="flex justify-between items-center mx-8 my-2 pb-4 ">
            <div className="flex items-center gap-2">
              <BsCardImage className="text-xl " />
              <h1>Photo</h1>
            </div>
            <div className="flex items-center gap-2">
              <PiVideoFill className="text-xl " />

              <h1>Video</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaShoppingBag className="text-xl " />

              <h1>Job</h1>
            </div>
            <div className="flex items-center gap-2">
              <FaRegListAlt className="text-xl " />
              <h1>Write Articl</h1>
              <h1></h1>
             </div>
          </div>
        </div>
        <div className="divide-y-2"></div>
        <div className="bg-green-200">hi</div>
      </div>
      <div className=" rightsidebar bg-pink-200 min-w-[300px]">hi</div>
    </div>
  );
};

export default HomePage;

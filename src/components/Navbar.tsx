import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      {/* search bar  */}
      <div className="hidden md:flex">
        <Image src={"/search.png"} alt="search" width={14} height={14} />
        <input placeholder="search..." type="text" />
      </div>

      {/* Icons */}
      <div className=" flex items-center gap-6">
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message"} alt="" width={20} height={20} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/annoucement.png"} alt="" width={20} height={20} />
          <div className="absolute  bg-purple-800 flex items-center justify-center -top-3 -right-3 w-5 h-5 rounded-2xl">
            <p className="text-white">1</p>
          </div>
        </div>

        <div className="flex flex-col">
          <span className=" text-xs leading-3"> John Doe</span>
          <span className="text-[10px text-gray-500 text-right "> Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

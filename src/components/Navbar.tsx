import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      {/* search bar  */}
      <div className="hidden md:flex items-center text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image
          src={"/search.png"}
          alt="search"
          className=""
          width={14}
          height={14}
        />
        <input
          className="w-[200px] p-2 bg-transparent outline-none "
          placeholder="search..."
          type="text"
        />
      </div>

      {/* Icons */}
      <div className=" flex items-center gap-6">
        <div className=" bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/message.png"} alt="" width={20} height={20} />
        </div>
        <div className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src={"/announcement.png"} alt="" width={20} height={20} />
          <div className="absolute  bg-purple-800 flex items-center justify-center -top-3 -right-3 w-5 h-5 rounded-2xl">
            <p className="text-xs text-white">1</p>
          </div>
        </div>

        <div className="flex flex-col">
          <span className=" text-xs leading-3"> John Doe</span>
          <span className="text-[10px text-gray-500 text-right "> Admin</span>
        </div>
        <Image
          src={"/avatar.png"}
          alt=""
          width={36}
          height={36}
          className="rounded-full "
        />
      </div>
    </div>
  );
};

export default Navbar;

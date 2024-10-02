import Image from "next/image";
import React from "react";

const UserCard = ({
  type,
  otherStyle,
}: {
  type: string;
  otherStyle?: string;
}) => {
  return (
    <div
      className={` rounded-2xl odd:bg-purple-200 even:bg-yellow-200 flex flex-col justify-between p-4 bg-gray-400 min-w-[130px]  flex-1 ${otherStyle}`}
    >
      <div className="flex justify-between  items-center">
        <p className=" text-[10px] bg-white px-2 rounded-full text-green-600 ">
          2024/25
        </p>
        <Image src={"/more.png"} alt="more" width={20} height={20} />
      </div>
      <h1 className=" text-2xl font-semibold my-4 ">6,123</h1>
      <h2 className=" capitalize text-sm font-medium text-gray-500 ">{type}</h2>
    </div>
  );
};

export default UserCard;

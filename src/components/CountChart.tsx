import Image from "next/image";
import React from "react";

const CountChart = () => {
  return (
    <div>
      {/* LEFT */}
      <div className="bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="  text-lg font-semibold">Students</h1>
          <Image src={"/more.png"} alt="more" width={20} height={20} />
        </div>
        {/* CHART */}
        <div></div>
        {/* Bottom section */}
        <div className="flex justify-center gap-16">
          <div className=" flex  flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full" />
            <h1 className=" font-bold">1,234</h1>
            <h2 className=" text- text-gray-300">Boys [55%]</h2>
          </div>
          <div className=" flex  flex-col gap-1">
            <div className="w-5 h-5 bg-lamaSky rounded-full" />
            <h1 className=" font-bold">1,234</h1>
            <h2 className=" text- text-gray-300">Girls [45%]</h2>
          </div>
        </div>
      </div>
      {/* RIGHT */}
      <div></div>
    </div>
  );
};

export default CountChart;

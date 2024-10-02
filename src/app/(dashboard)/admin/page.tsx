import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className=" flex gap-4 flex-col justify-center md:flex-row p-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className=" flex gap-4  justify-between lg:w-2/3 flex-wrap">
          {/* UserCard */}
          <UserCard type="Students" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staffs" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className=" flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE */}
          <div className="w-full lg:w-2/3 -[450px] "></div>
        </div>

        {/* BOTTOM CHARTS */}
        <div></div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default Admin;

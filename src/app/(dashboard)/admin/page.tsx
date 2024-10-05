import Announcement from "@/components/Announcement";
import Attendance from "@/components/AttendanceChart";
import { EventCalendar } from "@/components/Calendar";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import React from "react";
const Admin = () => {
  return (
    <div className=" flex gap-4 flex-col justify-center md:flex-row p-4">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        <div className=" flex gap-4   justify-between lg:w-full flex-wrap">
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
          <div className="w-full lg:w-2/3 h-[450px] ">
            <Attendance />
          </div>
        </div>
        {/* est */}

        {/* BOTTOM CHARTS */}
        <div className="h-[450px]">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full flex-col flex gap-8  lg:w-1/3">
        <div className="rounded-2xl  p-4 bg-white h-4/6">
          <EventCalendar />
        </div>

        <div className="rounded-2xl bg-white p-4  h-2/6">
          <Announcement />
        </div>
      </div>
    </div>
  );
};

export default Admin;

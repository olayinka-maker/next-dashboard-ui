import UserCard from "@/components/UserCard";
import React from "react";

const Admin = () => {
  return (
    <div className=" flex gap-4 flex-col justify-center md:flex-row p-4">
      {/* LEFT */}
      <div className=" flex gap-4  justify-between lg:w-2/3 flex-wrap">
        {/* UserCard */}
        <UserCard type="Students" />
        <UserCard type="Teacher" />
        <UserCard type="Parents" />
        <UserCard type="Staffs" />
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default Admin;

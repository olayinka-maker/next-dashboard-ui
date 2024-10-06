import Announcement from "@/components/Announcement";
import BigCalendar from "@/components/Bigcalendar";
import { EventCalendar } from "@/components/Calendar";
import React from "react";

const Students = () => {
  return (
    <div className=" flex gap-4 flex-col justify-center md:flex-row p-4">
      {/* LEFT */}

      <div className="w-full lg:w-2/3 flex  flex-col bg-white rounded-xl gap-8">
        <BigCalendar />
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

export default Students;

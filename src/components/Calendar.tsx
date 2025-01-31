"use client";
import { useState } from "react";
import Calendar from "react-calendar";
// import "../app/globals.css";
import "react-calendar/dist/Calendar.css";

//Temporary
const events = [
  {
    id: 1,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
  {
    id: 2,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
  {
    id: 3,
    title: "Lorem Ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit ammaet lorem trice jnl",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export function EventCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <Event />
    </div>
  );
}

import React from "react";
import Image from "next/image";

const Event = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      <div className=" flex flex-col gap-4">
        {events.map((data) => (
          <div
            className=" p-5 rounded-md border-gray-100 border-t-4 odd:border-t-purple-200 even:border-t-yellow-200 "
            key={data.id}
          >
            <div className=" flex items-center justify-between">
              <h1 className=" font-semibold text-gray-600">{data.title}</h1>
              <span className=" text-xs text-gray-400">{data.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

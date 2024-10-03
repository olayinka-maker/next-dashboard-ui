"use client";
import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    present: 80,
    absent: 20,
  },
  {
    name: "Tue",
    present: 60,
    absent: 40,
  },
  {
    name: "Wed",
    present: 50,
    absent: 50,
  },
  {
    name: "Thurs",
    present: 30,
    absent: 10,
  },
  {
    name: "Fri",
    present: 100,
    absent: 20,
  },
];
const Attendance = () => {
  return (
    <div className=" h-full">
      {/* LEFT */}
      <div className="relative bg-white  flex  flex-col justify-between  rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="  text-lg font-semibold">Attendance</h1>
          <Image src={"/more.png"} alt="more" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Legend
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
                align="left"
                verticalAlign="top"
              />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="name"
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
              />
              <YAxis tick={{ fill: "#d1d5db" }} />
              <Tooltip />
              <Bar dataKey="present" fill="#FAE27C" radius={[10, 10, 0, 0]} />
              <Bar dataKey="absent" fill="#C3EBFA" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Attendance;

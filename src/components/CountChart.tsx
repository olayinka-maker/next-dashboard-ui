"use client";
import Image from "next/image";
import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Total",
    count: 100,
    fill: "#ffff",
  },
  {
    name: "Girls",
    count: 50,
    fill: "#FAE27C",
  },
  {
    name: "Boys",
    count: 53,
    fill: "#C3EBFA",
  },
];
const CountChart = () => {
  return (
    <div className="h-full">
      {/* LEFT */}
      <div className="relative bg-white rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="  text-lg font-semibold">Students</h1>
          <Image src={"/more.png"} alt="more" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="60%"
              outerRadius="100%"
              barSize={50}
              data={data}
            >
              <RadialBar
                label={{ position: "insideStart", fill: "#fff" }}
                background
                dataKey="count"
              />
              {/* <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                // wrapperStyle={style}
              /> */}
            </RadialBarChart>
          </ResponsiveContainer>
          <Image
            src="/maleFemale.png"
            width={50}
            height={50}
            alt="male&female"
            className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* Bottom section */}
        <div className="flex justify-center gap-16">
          <div className=" flex  flex-col gap-1">
            <div className="w-5 h-5 bg-blue-200 rounded-full" />
            <h1 className=" font-bold">1,234</h1>
            <h2 className=" text- text-gray-300">Boys [55%]</h2>
          </div>
          <div className=" flex  flex-col gap-1">
            <div className="w-5 h-5 bg-yellow-200 rounded-full" />
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

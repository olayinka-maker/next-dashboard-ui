"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expenses: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expenses: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expenses: 3908,
  },
  {
    name: "May",
    income: 1890,
    expenses: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expenses: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Sept",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Oct",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expenses: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expenses: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className=" h-full">
      {/* LEFT */}
      <div className="relative bg-white  flex  flex-col justify-between  rounded-xl w-full h-full p-4">
        {/* TITLE */}
        <div className="flex items-center justify-between">
          <h1 className="  text-lg font-semibold">Finance</h1>
          <Image src={"/more.png"} alt="more" width={20} height={20} />
        </div>
        {/* CHART */}
        <div className="relative w-full h-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                tick={{ fill: "#d1d5db" }}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis tick={{ fill: "#d1d5db" }} />
              <Tooltip />
              <Legend
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "20px" }}
                align="center"
                verticalAlign="top"
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#FAE27C"
                strokeWidth={5}
              />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#C3EBFA"
                strokeWidth={5}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinanceChart;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={` h-screen ${inter.className}`}>
      {/* left */}
      <div className=" w-1/6 bg-red-200 ">left</div>
      {/* right */}
      <div className="w-5/6 bg-green-200"> right</div>
      {children}
    </main>
  );
}

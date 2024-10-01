import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

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
    <main className={`  flex h-screen  ${inter.className}`}>
      {/* left */}
      <div className=" p-4 w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  ">
        <Link
          className=" gap-2 lg:justify-start flex items-center justify-center"
          href={"/"}
        >
          <Image src={"/logo.png"} alt="logo" width={32} height={32} />
          <span className="hidden lg:block">Schoolify</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="w-[86%]  md:w-[92%] lg:w-[84%] xl:w-[86%]  bg-[#F7F8FA] overflow-y-scroll ">
        <Navbar />
        {children}
      </div>
    </main>
  );
}

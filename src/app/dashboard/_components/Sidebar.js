"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LayoutDashboard, Shield, UserCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const menuList = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Upgrade",
    icon: Shield,
    path: "/dashboard/upgrade",
  },

  {
    name: "Profile",
    icon: UserCircle2,
    path: "/dashboard/profile",
  },
];
const Sidebar = () => {
  const path = usePathname();
  console.log("path", path);
  return (
    <div className="h-screen shadow">
      <div className="flex items-center p-1">
        <Image width={40} height={40} alt="logo " src={"/logo.svg"} />
        <h2 className="text-2xl font-bold">Crack InterView</h2>
      </div>
      <div className="m-1">
        <Link href={'/create'} >
        <Button className="w-full mb-3"> + Create Content </Button>
        </Link>
        <div>
          {menuList.map((menu, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer hover:bg-slate-300 ${
                path == menu.path && "bg-slate-300"
              }  `}
            >
              <menu.icon />
              {menu.name}
            </div>
          ))}
        </div>
      </div>

              <div className="absolute items-center justify-center w-[90%] p-3 rounded-lg bg-slate-100 bottom-10" >
              <h2 className="text-xl font-bold" >Available Credits : 5</h2>
              <Progress value={30} />
              <p>1 out of 5 credits is used</p>
              <Link href={'/upgrade'} >upgrade to create more</Link>
              </div>
      
    </div>
  );
};

export default Sidebar;

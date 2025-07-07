"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const LeftSideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="m-4 md:hidden">
            <LayoutDashboard />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[250px] h-screen" side="left">
          <SheetHeader>
            <SheetTitle>
              <Link href="/">
                <h3 className="font-bold text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  BlogZone
                </h3>
              </Link>
            </SheetTitle>
            <DashBoardSideBar closeSheet={() => setOpen(false)} />
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex-col hidden md:flex md:flex-col w-[250px] p-4 border-r border-gray-200 h-screen">
        <Link href="/">
          <h3 className="font-bold text-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            BlogZone
          </h3>
        </Link>
        <DashBoardSideBar closeSheet={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default LeftSideBar;

const DashBoardSideBar = ({ closeSheet }: { closeSheet: () => void }) => {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <Link href={"/dashboard"}>
        <Button
          onClick={closeSheet}
          className="w-full cursor-pointer flex justify-start text-sm"
          variant={"ghost"}
        >
          <LayoutDashboard />
          Overview
        </Button>
      </Link>
      <Link href={"/articles"}>
        <Button
          onClick={closeSheet}
          className="w-full cursor-pointer flex justify-start text-sm"
          variant={"ghost"}
        >
          <FileText />
          Articles
        </Button>
      </Link>
      <Link href={"/comments"}>
        <Button
          onClick={closeSheet}
          className="w-full cursor-pointer flex justify-start text-sm"
          variant={"ghost"}
        >
          <MessageCircle />
          Comments
        </Button>
      </Link>
      <Link href={"/analytics"}>
        <Button
          onClick={closeSheet}
          className="w-full cursor-pointer flex justify-start text-sm"
          variant={"ghost"}
        >
          <BarChart />
          Analytics
        </Button>
      </Link>
      <Link href={"/settings"}>
        <Button
          onClick={closeSheet}
          className="w-full cursor-pointer flex justify-start text-sm"
          variant={"ghost"}
        >
          <Settings />
          Settings
        </Button>
      </Link>
    </div>
  );
};

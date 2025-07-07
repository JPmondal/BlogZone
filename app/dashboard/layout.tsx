import LeftSideBar from "@/components/dashboard/left-sidebar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <LeftSideBar />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default layout;

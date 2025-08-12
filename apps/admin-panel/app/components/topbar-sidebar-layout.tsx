"use client";

import React, { useState } from "react";
import Topbar from "./topbar";
import SideBar from "./side-bar";

const TopbarSidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsOpen(false)} // close sidebar on click outside
        />
      )}
      <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />
      <SideBar isOpen={isOpen} />
    </div>
  );
};

export default TopbarSidebarLayout;

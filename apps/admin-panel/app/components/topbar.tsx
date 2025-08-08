"use client";

import React, { useState } from "react";
import { FaBell, FaMoon, FaRegBell, FaRegMoon, FaSun } from "react-icons/fa";

const Topbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className=" bg-card-background p-6 py-7  flex items-center sticky top-0 right-0 justify-between">
      <div className="font-medium text-lg text-font-primary">
        Welcome Back, <span className="text-blue">User</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <FaBell className="text-gray-400" />
        </div>
        <div
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            document.documentElement.classList.toggle("dark");
          }}
          className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-300"
        >
          {isDarkMode ? (
            <FaMoon className="text-gray-400" />
          ) : (
            <FaSun className="text-gray-400" />
          )}
        </div>
        <div className="h-7 w-px rounded-full bg-gray-400"></div>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-300"></div>
          <div>
            <p className="text-sm leading-none mb-1 text-font-primary font-bold">
              Burhan Shah
            </p>
            <p className="leading-none text-font-light text-xs tracking-widest uppercase">
              Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

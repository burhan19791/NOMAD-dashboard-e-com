"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  FaBell,
  FaMoon,
  FaRegBell,
  FaRegMoon,
  FaSearch,
  FaSun,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import CustomSearch from "./custom-search";

type Props = {
  toggleSidebar: () => void;
};

const Topbar = ({ toggleSidebar }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="lg:ml-20 xl:ml-64 bg-card-background p-6 py-7  flex items-center  justify-between">
      <div className="font-medium text-lg text-font-primary flex items-center gap-4">
        {isDarkMode ? (
          <Image
            className="block lg:hidden"
            src={"/images/Nomad-logo-white.png"}
            alt="Logo"
            width={30}
            height={30}
          />
        ) : (
          <Image
            className="block lg:hidden"
            src={"/images/Nomad-logo-black.png"}
            alt="Logo"
            width={30}
            height={30}
          />
        )}
        <div className="hidden text-medium md:block">
          Welcome Back, <span className="text-purple font-bold">Burhan</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CustomSearch />
        <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-inner-card flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <FaBell className="text-gray-400" />
        </div>
        <div
          onClick={() => {
            setIsDarkMode(!isDarkMode);
            document.documentElement.classList.toggle("dark");
          }}
          className="w-9 h-9 rounded-full bg-gray-100 flex dark:bg-inner-card items-center justify-center cursor-pointer hover:bg-gray-300"
        >
          {isDarkMode ? (
            <FaMoon className="text-gray-400" />
          ) : (
            <FaSun className="text-gray-400" />
          )}
        </div>
        <div className="h-7 w-px rounded-full bg-gray-400 lg:hidden"></div>
        <div className="w-9 h-9 rounded-full bg-gray-100 text-font-light dark:bg-inner-card flex items-center justify-center cursor-pointer hover:bg-gray-300 lg:hidden ">
          <GiHamburgerMenu onClick={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;

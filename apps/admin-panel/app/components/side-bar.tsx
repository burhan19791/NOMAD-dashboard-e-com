"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCalendar, FaShoppingBag, FaShoppingCart } from "react-icons/fa";
import { RiSpyFill } from "react-icons/ri";
import {
  TbLayoutDashboardFilled,
  TbLayoutKanban,
  TbLayoutKanbanFilled,
} from "react-icons/tb";
import ProductsHoverCard from "./navbar-expandable-link";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosSettings } from "react-icons/io";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import ProductsHover from "./navbar-expandable-link";
import SideBarExpandableLink from "./navbar-expandable-link";
import { IoPeople, IoPerson } from "react-icons/io5";

type Props = {
  isOpen: boolean;
};

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<string>("dashboard");
  const [logoutOpen, setLogoutOpen] = useState(false);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav
        className={`flex-col fixed top-0  lg:translate-x-0 font-medium min-h-screen hidden lg:flex lg:w-20 xl:w-64 pt-7 bg-card-background w-64 p-4 xl:pl-5 xl:p-10
          //isOpen ? "translate-x-0" : "-translate-x-full"
        `}
      >
        {/* logo small show thing */}
        <div className="flex items-center gap-1.5 mb-10">
          <div className="w-8 h-8 lg:w-12 lg:h-12 relative xl:w-8 xl:h-8  mt-0.5 top-0 right-0 ">
            {isDark ? (
              <Image src={"/images/Nomad-logo-white.png"} alt="Logo" fill />
            ) : (
              <Image src={"/images/Nomad-logo-black.png"} alt="Logo" fill />
            )}
          </div>
          <h1 className="text-3xl hidden xl:block font-bold text-font-primary">
            NOMAD
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-font-light font-regular">
          <div>
            <Link
              href="/"
              onClick={() => setActiveLink("dashboard")}
              className={clsx(
                "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-purple transition-all",
                activeLink === "dashboard" &&
                  "text-white bg-purple hover:text-white"
              )}
            >
              <TbLayoutDashboardFilled className="text-lg hidden md:block md:text-2xl xl:text-lg" />
              <p className="hidden xl:block">Dashboard</p>
            </Link>
          </div>
          <SideBarExpandableLink
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            mainLabel="Products"
            mainIcon={<FaShoppingBag />}
            items={[
              { label: "List View", route: "/products/list" },
              { label: "Grid View", route: "/products/grid" },
              { label: "Overview", route: "/products/overview" },
              { label: "Create Product", route: "/products/create" },
            ]}
          />
          <SideBarExpandableLink
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            mainLabel="Orders"
            mainIcon={<FaShoppingCart />}
            items={[
              { label: "List View", route: "/orders/list" },
              { label: "OverView", route: "/orders/overview" },
            ]}
          />
          <div>
            <Link
              href="/customers"
              onClick={() => setActiveLink("customers")}
              className={clsx(
                "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-purple transition-all",
                activeLink === "customers" &&
                  "text-white bg-purple hover:text-white"
              )}
            >
              <IoPerson className="text-lg hidden md:block md:text-2xl xl:text-lg" />
              <p className="hidden xl:block">Customers</p>
            </Link>
          </div>
          <div>
            <Link
              href="/sellers"
              onClick={() => setActiveLink("sellers")}
              className={clsx(
                "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-purple transition-all",
                activeLink === "sellers" &&
                  "text-white bg-purple hover:text-white"
              )}
            >
              <RiSpyFill className="text-lg hidden md:block md:text-2xl xl:text-lg" />
              <p className="hidden xl:block">Sellers</p>
            </Link>
          </div>
          <div>
            <Link
              href="/calendar"
              onClick={() => setActiveLink("calendar")}
              className={clsx(
                "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-purple transition-all",
                activeLink === "calendar" &&
                  "text-white bg-purple hover:text-white"
              )}
            >
              <FaCalendar className="text-lg hidden md:block md:text-2xl xl:text-lg" />
              <p className="hidden xl:block">Calendar</p>
            </Link>
          </div>

          <div>
            <Link
              href="/kanban"
              onClick={() => setActiveLink("kanban")}
              className={clsx(
                "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-purple transition-all",
                activeLink === "kanban" &&
                  "text-white bg-purple hover:text-white"
              )}
            >
              <TbLayoutKanbanFilled className="text-lg hidden md:block md:text-2xl xl:text-lg" />
              <p className="hidden xl:block">Kanban</p>
            </Link>
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2.5 rounded-md mt-auto focus:outline-none hover:bg-gray-100 dark:hover:bg-inner-card flex items-center gap-2 dark:bg-inner-card">
              <div className="min-w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700 flex-shrink-0" />

              <div className="flex items-center justify-between w-full">
                <div className="text-left hidden xl:flex flex-col">
                  <p className="text-sm leading-none mb-1 text-font-primary font-bold">
                    Burhan Shah
                  </p>
                  <p className="leading-none text-font-light text-xs tracking-widest uppercase">
                    Owner
                  </p>
                </div>
                <HiOutlineChevronUpDown className="text-xl text-font-light hidden xl:block" />
              </div>
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="top" // dropdown appears above the trigger
            align="start" // align right edge of dropdown to right edge of trigger
            sideOffset={10} // 8px gap from the trigger
            alignOffset={50}
            className="w-56 bg-inner-card border border-gray-200 dark:border-inner-card px-2.5 py-2"
          >
            <div className="flex items-center gap-2 p-2">
              <div className="min-w-8 h-8 rounded-lg bg-gray-300 dark:bg-gray-700"></div>
              <div className="text-left">
                <p className="text-sm leading-none mb-1 text-font-primary font-bold">
                  Burhan Shah
                </p>
                <p className="leading-none text-font-light text-xs tracking-widest uppercase">
                  Owner
                </p>
              </div>
            </div>

            <DropdownMenuGroup className="text-font-primary">
              <DropdownMenuItem className="-mb-1 mt-2 text-xs" disabled>
                My Account
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Preferences
              </DropdownMenuItem>

              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="-mb-1 mt-2 text-xs" disabled>
                App Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Privacy
              </DropdownMenuItem>
              <DropdownMenuItem className="-mb-1 mt-2 text-xs" disabled>
                Team And Collaboration
              </DropdownMenuItem>
              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Manage Members
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Invite People
              </DropdownMenuItem>
              <DropdownMenuItem className="-mb-1 mt-2 text-xs" disabled />
              <DropdownMenuSeparator className="border-gray-200 dark:border-gray-700" />
              <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-card-background">
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </>
  );
};

export default SideBar;

"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import {
  FaCalendar,
  FaChevronDown,
  FaChevronRight,
  FaShoppingBag,
  FaShoppingCart,
  FaSignOutAlt,
} from "react-icons/fa";
import { RiSpyFill } from "react-icons/ri";
import clsx from "clsx";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState<string>("dashboard");
  const [productsOpen, setProductsOpen] = useState(false); // new state

  return (
    <nav className="lg:flex flex-col min-h-screen fixed hidden pt-7 bg-card-background w-64 p-10 pl-6">
      {/* Logo */}
      <div className="flex items-center gap-1.5 mb-10">
        <div className="w-8 h-8 relative mt-0.5">
          <Image src={"/images/Nomad-logo-black.png"} alt="Logo" fill />
        </div>
        <h1 className="text-3xl font-bold text-font-primary">Oxyfit</h1>
      </div>

      {/* Sidebar links */}
      <div className="flex flex-col gap-4 text-font-light">
        <SidebarLink
          href="/"
          label="Dashboard"
          icon={<TbLayoutDashboardFilled className="text-lg" />}
          isActive={activeLink === "dashboard"}
          onClick={() => setActiveLink("dashboard")}
        />

        {/* Expandable Products Section */}
        <div>
          <button
            onClick={() => setProductsOpen(!productsOpen)}
            className={clsx(
              "flex items-center w-full gap-2.5 p-2.5 pl-3 rounded-md transition-all"
            )}
          >
            <FaShoppingBag className="text-lg" />
            Products
            {productsOpen ? (
              <FaChevronDown className="text-xs text-font-light" />
            ) : (
              <FaChevronRight className="text-xs text-font-light" />
            )}
          </button>

          {productsOpen && (
            <div className="ml-10 mt-1 flex flex-col gap-3 text-sm text-font-light">
              <Link
                href="/products"
                onClick={() => setActiveLink("products/list")}
                className={clsx(
                  "transition",
                  activeLink === "products/list"
                    ? "text-blue"
                    : "hover:text-blue"
                )}
              >
                List View
              </Link>
              <Link
                href="/products/add"
                onClick={() => setActiveLink("products/add")}
                className={clsx(
                  "transition",
                  activeLink === "products/add"
                    ? "text-blue"
                    : "hover:text-blue"
                )}
              >
                Grid View
              </Link>
              <Link
                href="/products/create"
                onClick={() => setActiveLink("products/create")}
                className={clsx(
                  "transition",
                  activeLink === "products/create"
                    ? "text-blue"
                    : "hover:text-blue"
                )}
              >
                Create Product
              </Link>
            </div>
          )}
        </div>

        <SidebarLink
          href="/"
          label="Orders"
          icon={<FaShoppingCart className="text-lg" />}
          isActive={activeLink === "orders"}
          onClick={() => setActiveLink("orders")}
        />
        <SidebarLink
          href="/"
          label="Calendar"
          icon={<FaCalendar className="text-lg" />}
          isActive={activeLink === "calendar"}
          onClick={() => setActiveLink("calendar")}
        />
        <SidebarLink
          href="/"
          label="Sellers"
          icon={<RiSpyFill className="text-xl" />}
          isActive={activeLink === "sellers"}
          onClick={() => setActiveLink("sellers")}
        />
      </div>

      {/* Logout */}
      <div className="mt-auto text-gray-500">
        <SidebarLink
          href="/"
          label="Logout"
          icon={<FaSignOutAlt className="text-lg" />}
          isActive={activeLink === "logout"}
          onClick={() => setActiveLink("logout")}
        />
      </div>
    </nav>
  );
};

export default SideBar;

// ✅ Reusable Sidebar Link Component
type SidebarLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
};

const SidebarLink = ({
  href,
  label,
  icon,
  isActive,
  onClick,
}: SidebarLinkProps) => (
  <div>
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2.5 p-2.5 pl-3 rounded-md hover:text-blue transition-all",
        isActive && "text-blue bg-blue-light"
      )}
    >
      {icon}
      {label}
    </Link>
  </div>
);

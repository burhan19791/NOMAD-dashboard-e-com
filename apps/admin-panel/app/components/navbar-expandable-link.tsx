"use client";

import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

type MenuItem = {
  label: string;
  route: string;
};

type HoverMenuProps = {
  activeLink: string;
  setActiveLink: (link: string) => void;
  mainLabel: string; // top-level label e.g. "Products"
  mainIcon?: React.ReactNode; // optional icon to display next to label
  items: MenuItem[];
};

const SideBarExpandableLink = ({
  activeLink,
  setActiveLink,
  mainLabel,
  mainIcon,
  items,
}: HoverMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );
  const [subLinkSelected, setSubLinkSelected] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setPortalContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  const isMdLg = () => {
    if (typeof window === "undefined") return false;
    const width = window.innerWidth;
    return width >= 768 && width < 1280;
  };

  const handleMouseEnter = () => {
    if (!isMdLg()) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMdLg()) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const buttonRect = buttonRef.current?.getBoundingClientRect();

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={() => setActiveLink(mainLabel.toLowerCase())}
        className="p-2.5 w-full pl-3 rounded-md transition-all hover:text-purple"
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-purple flex items-center gap-2.5 text-font-light"
        >
          {mainIcon && (
            <span className="text-lg hidden md:flex md:text-2xl xl:text-lg">
              {mainIcon}
            </span>
          )}
          <div className="hidden xl:flex xl:items-center xl:gap-3">
            {mainLabel}
            {isOpen ? (
              <FaChevronDown className="text-xs" />
            ) : (
              <FaChevronRight className="text-xs" />
            )}
          </div>
        </div>

        {isOpen && (
          <div className="ml-7 mt-3 hidden text-sm xl:flex xl:flex-col xl:gap-2 text-left text-font-light">
            {items.map((item) => (
              <div
                key={item.label}
                onClick={() => {
                  setSubLinkSelected(item.label.toLowerCase());
                  router.push(item.route);
                }}
                className={clsx(
                  "hover:text-purple",
                  subLinkSelected === item.label.toLowerCase() &&
                    "text-purple font-semibold"
                )}
              >
                {item.label}
              </div>
            ))}
          </div>
        )}
      </button>

      {isOpen && portalContainer && buttonRect
        ? createPortal(
            <div
              style={{
                position: "absolute",
                top: buttonRect.top + window.scrollY + "px",
                left: buttonRect.right + 8 + window.scrollX + "px",
                zIndex: 999999,
                minWidth: "160px",
              }}
              className="hidden md:flex lg:flex xl:hidden bg-inner-card p-4 rounded-md shadow-xl flex-col gap-3 text-font-light"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute -left-1 top-3 w-3 h-3 bg-card-background rotate-45 shadow-md"></div>
              <div className="xl:hidden flex text-font-primary text-sm font-medium">
                {mainLabel}
              </div>

              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.route}
                  onClick={() => setActiveLink(item.route)}
                  className={clsx(
                    "transition hover:text-purple",
                    activeLink === item.route && "text-purple font-semibold"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>,
            portalContainer
          )
        : null}
    </div>
  );
};

export default SideBarExpandableLink;

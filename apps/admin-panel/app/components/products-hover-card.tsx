"use client";

import {
  FaChevronCircleRight,
  FaChevronDown,
  FaChevronRight,
  FaShoppingBag,
} from "react-icons/fa";
import Link from "next/link";
import clsx from "clsx";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

type ProductsHoverProps = {
  activeLink: string;
  setActiveLink: (link: string) => void;
};

const ProductsHover = ({ activeLink, setActiveLink }: ProductsHoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null
  );

  const [subLinkSelected, setSubLinkSelected] = useState<string>("");

  const router = useRouter();

  // Create portal container div once on mount
  useEffect(() => {
    const el = document.createElement("div");
    document.body.appendChild(el);
    setPortalContainer(el);
    return () => {
      document.body.removeChild(el);
    };
  }, []);

  // Helper: check if viewport is md or lg (768 <= width < 1280)
  const isMdLg = () => {
    if (typeof window === "undefined") return false;
    const width = window.innerWidth;
    return width >= 768 && width < 1280;
  };

  // Only open hover on md/lg screens
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

  // Button classes for sm & xl: normal link style with hover bg-purple + white text
  // For md/lg: normal + hover card
  const buttonClass = clsx(
    " p-2.5 w-full pl-3 rounded-md transition-all hover:text-purple"
  );

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={() => {
          setActiveLink("products");
        }}
        className={buttonClass}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="hover:text-purple flex items-center gap-2.5 text-font-light"
        >
          <FaShoppingBag className="text-lg  hidden md:flex md:text-2xl xl:text-lg" />
          <div className="hidden xl:flex xl:items-center xl:gap-3">
            Products
            {isOpen ? (
              <FaChevronDown className="text-xs" />
            ) : (
              <FaChevronRight className="text-xs" />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="ml-7 mt-3 hidden text-sm  xl:flex xl:flex-col xl:gap-2  text-left text-font-light">
            <div
              onClick={() => {setSubLinkSelected("list view"); router.push("/products/list")}}
              className={clsx(
                "hover:text-purple",
                subLinkSelected === "list view" && "text-purple font-semibold"
              )}
            >
              List View
            </div>
            <div
              onClick={() => {setSubLinkSelected("grid view"); router.push("/products/grid")}}
              className={clsx(
                "hover:text-purple",
                subLinkSelected === "grid view" && "text-purple font-semibold"
              )}
            >
              Grid View
            </div>
            <div
              onClick={() => {setSubLinkSelected("create product");  router.push("/products/create")}}
              className={clsx(
                "hover:text-purple",
                subLinkSelected === "create product" &&
                  "text-purple font-semibold"
              )}
            >
              Create Product
            </div>
          </div>
        )}
      </button>

      {/* Show hover card only on md/lg */}
      {isOpen && portalContainer && buttonRect
        ? createPortal(
            <div
              style={{
                position: "absolute",
                top: buttonRect.top + window.scrollY + "px",
                left: buttonRect.right + 8 + window.scrollX + "px",
                transform: "translateY(0)",
                zIndex: 999999,
                minWidth: "160px",
              }}
              className="hidden md:flex lg:flex xl:hidden bg-inner-card p-4 rounded-md shadow-xl flex-col gap-3 text-font-light"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Arrow */}
              <div className="absolute -left-1 top-3 w-3 h-3 bg-card-background rotate-45 shadow-md"></div>

              <Link
                href="/products"
                onClick={() => setActiveLink("products/list")}
                className={clsx(
                  "transition hover:text-purple",
                  activeLink === "products/list" && "text-purple font-semibold"
                )}
              >
                List View
              </Link>
              <Link
                href="/products/add"
                onClick={() => setActiveLink("products/add")}
                className={clsx(
                  "transition hover:text-purple",
                  activeLink === "products/add" && "text-purple font-semibold"
                )}
              >
                Grid View
              </Link>
              <Link
                href="/products/create"
                onClick={() => setActiveLink("products/create")}
                className={clsx(
                  "transition hover:text-purple",
                  activeLink === "products/create" &&
                    "text-purple font-semibold"
                )}
              >
                Create Product
              </Link>
            </div>,
            portalContainer
          )
        : null}
    </div>
  );
};

export default ProductsHover;

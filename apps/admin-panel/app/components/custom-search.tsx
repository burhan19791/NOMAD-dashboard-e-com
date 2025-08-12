"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";

const CustomSearch = () => {
  return (
    <div className="flex items-center rounded-lg border border-inner-card-border bg-inner-card px-3 py-2 text-font-light dark:text-font-primary w-fit">
      <FaSearch className="text-xs text-font-primary" />

      {/* Only show input from md and above */}
      <input
        type="text"
        placeholder="Search..."
        className="ml-2 hidden placeholder:text-font-primary md:inline-block bg-transparent outline-none w-44 text-sm"
      />
    </div>
  );
};

export default CustomSearch;

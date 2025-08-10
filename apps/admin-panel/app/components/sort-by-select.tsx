import React from "react";
import CustomDropdown from "./custom-select";

const SortBySelect = () => {
  const sortOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "weekly", label: "Weekly" },
    { value: "daily", label: "Daily" },
  ];

  return <CustomDropdown options={sortOptions} placeholder="Sort By" />;
};

export default SortBySelect;

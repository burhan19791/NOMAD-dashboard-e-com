"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  placeholder?: string;
  onChange?: (selected: Option) => void;
};

export default function CustomSelect({
  options,
  placeholder = "Select...",
  onChange,
}: CustomSelectProps) {
  const [selected, setSelected] = useState<Option | null>(null);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setOpen((prev) => !prev);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setOpen(false);
    if (onChange) onChange(option);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative  inline-block  text-font-primary"
    >
      <button
        onClick={toggleOpen}
        className="w-full inline-flex justify-between items-center rounded-md border border-inner-card-border bg-inner-card px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-900 "
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {open && (
        <ul
          className="absolute z-10 mt-1 max-h-60 hover:bg-gray-100 dark:hover:bg-card-background  min-w-max max-w-xs overflow-auto rounded-md border border-inner-card-border bg-inner-card text-font-primary text-sm shadow-lg focus:outline-none"
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className="bg-inner-card px-2 hover:bg-gray-100 dark:hover:bg-card-background"
            >
              <li
                className={` hover:bg-gray-100 dark:hover:bg-card-background cursor-pointer whitespace-nowrap px-3 py-2  ${
                  selected?.value === option.value ? "font-semibold" : ""
                }`}
                role="option"
                aria-selected={selected?.value === option.value}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

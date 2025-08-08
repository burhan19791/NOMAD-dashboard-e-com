"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import Image from "next/image";
import { FaSearch, FaStar } from "react-icons/fa";
import CardTitle from "./card-title";
import { IoFilterSharp } from "react-icons/io5";
import { MdSort } from "react-icons/md";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const data = [
  {
    id: 1,
    image: "/product1.jpg",
    title: "Product A",
    category: "Electronics",
    rating: 4.5,
    price: 29.99,
    availability: "In Stock",
    created_at: "2025-08-01T12:34:56Z",
  },
];

const columnHelper = createColumnHelper<any>();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("image", {
    header: "Image",
    cell: (info) => (
      <Image
        src={info.getValue()}
        alt="Product"
        width={50}
        height={50}
        className="rounded"
      />
    ),
  }),
  columnHelper.accessor("title", { header: "Title" }),
  columnHelper.accessor("category", { header: "Category" }),
  columnHelper.accessor("rating", {
    header: "Rating",
    cell: (info) => (
      <span className="flex items-center gap-1">
        {info.getValue()} <FaStar className="text-yellow-400" />
      </span>
    ),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => `$${info.getValue()}`,
  }),
  columnHelper.accessor("availability", {
    header: "Availability",
    cell: (info) => {
      const val = info.getValue();
      return (
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded ${
            val === "In Stock"
              ? "bg-green-100 text-green-800"
              : val === "Low Stock"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {val}
        </span>
      );
    },
  }),
  columnHelper.accessor("created_at", {
    header: "Created",
    cell: (info) =>
      new Date(info.getValue()).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  }),
];

export default function ProductsTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto rounded-2xl col-span-9 bg-card-background dark:bg-dark-background p-5 mt-4">
      <div className="flex items-center justify-between">
        <CardTitle title="Products" />

        <div className="flex items-center gap-2 text-gray-500">
          <div className="w-56 h-9 bg-white border border-gray-200 rounded-lg flex mb-6 items-center pl-4 pr-2">
            <FaSearch className="text-xs text-gray-700" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 text-sm bg-transparent outline-none w-full"
            />
          </div>
          <div className="h-9 bg-white border gap-2  border-gray-200 text-sm rounded-lg flex mb-6 items-center px-4">
            Filter <IoFilterSharp className="text-sm" />
          </div>
          <div className="h-9 bg-white border gap-2 border-gray-200 text-sm rounded-lg flex mb-6 items-center px-4">
            Sort <MdSort className="text-sm" />
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-dark-card dark:text-gray-300">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th scope="col" key={header.id} className="px-6 py-3">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="bg-white border-b border-b-gray-200 dark:bg-dark-card dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

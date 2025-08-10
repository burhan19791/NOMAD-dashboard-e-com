"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableRow,
  TableHead,
  TableHeadCell,
  TableBody,
  TableCell,
  Badge,
  Pagination,
} from "flowbite-react";
import { Eye, MoreHorizontal, Pencil, Trash } from "lucide-react";
import CardTitle from "../../card-title";
import { FaSearch } from "react-icons/fa";
import CustomDropdown from "../../custom-select";
import SortBySelect from "../../sort-by-select";
import { useState } from "react";
import { TiStar } from "react-icons/ti";

export default function StockReportTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const products = [
    {
      id: "#1001",
      name: "Black Hoodie",
      updated_at: "2025-08-05",
      amount: "$120.99",
      rating: "4.5",
      status: "In Stock",
      quantity: "41",
    },

    {
      id: "#1003",
      name: "Eyes On You Hoodie",
      updated_at: "2025-10-29",
      amount: "$109.50",
      rating: "4.9",
      status: "Out of Stock",
      quantity: "0",
    },
    {
      id: "#1002",
      name: "T-Shirt",
      updated_at: "2025-06-09",
      amount: "$89.99",
      rating: "4.5",
      status: "In Stock",
      quantity: "50",
    },
    {
      id: "#1004",
      name: "Jacket",
      updated_at: "2025-12-15",
      amount: "$34.99",
      rating: "3.7",
      status: "Low Stock",
      quantity: "13",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "processing", label: "In Stock" },
    { value: "Low Stock", label: "Low Stock" },
    { value: "Out of Stock", label: "Out of Stock" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In Stock":
        return (
          <Badge className="bg-success-light text-success py-1.5 dark:bg-success-light hover:bg-success-light dark:text-success rounded-md  w-fit">
            {status}
          </Badge>
        );
      case "Low Stock":
        return (
          <Badge className="bg-yellow-light text-yellow dark:bg-yellow-light hover:bg-yellow-light dark:text-yellow py-1.5 rounded-md w w-fit">
            {status}
          </Badge>
        );
      case "Out of Stock":
        return (
          <Badge className="bg-error-light text-error dark:bg-error-light dark:text-error hover:bg-error-light py-1.5 rounded-md w-fit">
            {status}
          </Badge>
        );

      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="p-5 bg-card-background rounded-2xl">
      {/* Header stays fixed */}
      <div className="flex justify-between items-center mb-6">
        <CardTitle title="Stock Report" />
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="w-44 h-9 bg-inner-card border border-inner-card-border rounded-lg flex items-center pl-4 pr-2 text-font-light dark:text-font-primary">
            <FaSearch className="text-xs text-font-light dark:text-font-primary" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 text-sm bg-transparent outline-none w-full placeholder:text-font-light dark:placeholder:text-font-primary"
            />
          </div>

          {/* Status Select */}
          <CustomDropdown placeholder="Status" options={statusOptions} />

          {/* Sort By Select */}
          <SortBySelect />
        </div>
      </div>

      {/* Only table scrolls horizontally */}
      <div className="overflow-x-auto">
        <div className="min-w-[900px]">
          <Table className="rounded-t-none" hoverable>
            <TableHead className="bg-inner-card border-b border-inner-card-border">
              <TableRow>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Product ID
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Product Name
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Updated Date
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Amount
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Rating
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Status
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Quantity
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Actions
                </TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody className="divide-y divide-inner-card-border">
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  className="hover:dark:bg-inner-card transition"
                >
                  <TableCell className="whitespace-nowrap text-blue underline">
                    {product.id}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {product.name}
                  </TableCell>
                  <TableCell className="text-font-light">
                    {product.updated_at}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-purple">
                    {product.amount}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-font-light">
                    <span className="flex items-center gap-1">
                      {product.rating}
                      <TiStar className="text-yellow text-lg" />
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {getStatusBadge(product.status)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-purple">
                    {product.quantity}
                  </TableCell>

                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-muted transition">
                          <MoreHorizontal className="h-5 w-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-36 bg-inner-card border border-inner-card-border"
                      >
                        <DropdownMenuItem className="text-font-light flex items-center gap-2">
                          <Eye className="h-4 w-4 text-muted-foreground" /> View
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-font-light flex items-center gap-2">
                          <Pencil className="h-4 w-4 text-muted-foreground" />{" "}
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 focus:text-red-600 flex items-center gap-2">
                          <Trash className="h-4 w-4 text-red-600" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="mt-4">
        <Pagination
          className="flex justify-between items-center"
          layout="table"
          itemsPerPage={10}
          totalItems={100}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}

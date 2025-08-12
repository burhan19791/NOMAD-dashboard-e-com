"use client";

import CardTitle from "@/app/components/card-title";
import SortBySelect from "@/app/components/sort-by-select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CustomSelect from "@/app/components/custom-select";

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

import { useState } from "react";
import { FaSearch, FaSlidersH, FaStar } from "react-icons/fa";
import CustomSearch from "@/app/components/custom-search";

export default function ProductsTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const products = [
    {
      id: "P1001",
      title: "Black Hoodie",
      description: "Comfortable black hoodie...",
      category: "Apparel",
      price: 49.99,
      rating: 4.5,
      stock: 25,
      createdAt: "2025-07-20",
      updatedAt: "2025-08-01",
    },
    {
      id: "P1002",
      title: "Nomad Cap",
      description: "Stylish cap for...",
      category: "Accessories",
      price: 19.99,
      rating: 4.1,
      stock: 100,
      createdAt: "2025-06-15",
      updatedAt: "2025-07-28",
    },
    {
      id: "P1003",
      title: "Cargo Pants",
      description: "Durable cargo pants...",
      category: "Apparel",
      price: 59.99,
      rating: 4.7,
      stock: 0,
      createdAt: "2025-05-30",
      updatedAt: "2025-07-25",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "in-stock", label: "In Stock" },
    { value: "low-stock", label: "Low Stock" },
    { value: "out-of-stock", label: "Out of Stock" },
  ];

  const getStockBadge = (stock: number) => {
    if (stock === 0)
      return (
        <Badge color="failure" className="py-1.5 text-nowrap rounded-md w-fit">
          Out of Stock
        </Badge>
      );
    if (stock < 10)
      return (
        <Badge color="warning" className="py-1.5 text-nowrap rounded-md w-fit">
          Low Stock
        </Badge>
      );
    return (
      <Badge color="success" className="py-1.5 text-nowrap rounded-md w-fit">
        In Stock
      </Badge>
    );
  };

  return (
    <div className="p-5 bg-card-background rounded-2xl">
      {/* Header with search, status filter, and sort */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          {/* Search */}
          <CustomSearch />
          <div className="flex items-center gap-2 md:gap-4">
            {/* Stock Status Select */}
            <CustomSelect
              placeholder="Stock Status"
              smIcon={<FaSlidersH />}
              options={statusOptions}
            />

            {/* Sort By Select */}
            <SortBySelect />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-inner-card border-b border-inner-card-border">
            <TableRow>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Product ID
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Title
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Description
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Category
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Price
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Rating
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Stock
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Created At
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Updated At
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
                <TableCell className="whitespace-nowrap text-purple underline cursor-pointer">
                  {product.id}
                </TableCell>
                <TableCell className="text-font-light ">
                  {product.title}
                </TableCell>
                <TableCell className="text-font-light">
                  {product.description}
                </TableCell>
                <TableCell className="text-font-light">
                  {product.category}
                </TableCell>
                <TableCell className="text-purple whitespace-nowrap">
                  ${product.price.toFixed(2)}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  <span className="flex items-center gap-2">
                    {product.rating.toFixed(1)}
                    <FaStar className="text-yellow" />
                  </span>
                </TableCell>
                <TableCell>{getStockBadge(product.stock)}</TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {product.createdAt}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {product.updatedAt}
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

      <div className="mt-4">
        <Pagination
          className="flex justify-between items-center"
          layout="table"
          itemsPerPage={10}
          totalItems={products.length}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}

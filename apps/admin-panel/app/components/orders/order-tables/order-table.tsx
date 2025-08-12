"use client";

import CardTitle from "@/app/components/card-title";
import SortBySelect from "@/app/components/sort-by-select";
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

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import CustomSearch from "../../custom-search";

export default function OrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  // Sample order data, replace with real data later
  const orders = [
    {
      id: "O20250801",
      customerName: "Sarah Khan",
      orderDate: "2025-08-01",
      status: "Pending",
      paymentMethod: "Credit Card",
      totalAmount: 149.99,
      deliveryDate: "2025-08-05",
    },
    {
      id: "O20250730",
      customerName: "Ali Raza",
      orderDate: "2025-07-30",
      status: "Completed",
      paymentMethod: "PayPal",
      totalAmount: 89.5,
      deliveryDate: "2025-08-02",
    },
    {
      id: "O20250729",
      customerName: "Hina Malik",
      orderDate: "2025-07-29",
      status: "Refunded",
      paymentMethod: "Cash on Delivery",
      totalAmount: 49.99,
      deliveryDate: "2025-08-03",
    },
  ];

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "warning";
      case "completed":
        return "success";
      case "refunded":
        return "failure";
      case "cancelled":
        return "dark";
      default:
        return "info";
    }
  };

  return (
    <div className="p-5 bg-card-background rounded-2xl">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <CustomSearch />
        <SortBySelect />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table hoverable>
          <TableHead className="bg-inner-card border-b border-inner-card-border">
            <TableRow>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Order ID
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Customer Name
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Order Date
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Status
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Payment Method
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Total Amount
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Delivery Date
              </TableHeadCell>
              <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                Actions
              </TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y divide-inner-card-border">
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="hover:dark:bg-inner-card transition"
              >
                <TableCell className="whitespace-nowrap text-purple underline cursor-pointer">
                  {order.id}
                </TableCell>
                <TableCell className="text-font-light">
                  {order.customerName}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.orderDate}
                </TableCell>
                <TableCell>
                  <Badge
                    color={statusColor(order.status)}
                    className="py-1.5 rounded-md w-fit"
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.paymentMethod}
                </TableCell>
                <TableCell className="text-purple whitespace-nowrap">
                  ${order.totalAmount.toFixed(2)}
                </TableCell>
                <TableCell className="text-font-light whitespace-nowrap">
                  {order.deliveryDate}
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
                      <DropdownMenuItem className="text-font-light flex items-center gap-2 cursor-pointer">
                        <Eye className="h-4 w-4 text-muted-foreground" /> View
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-font-light flex items-center gap-2 cursor-pointer">
                        <Pencil className="h-4 w-4 text-muted-foreground" />{" "}
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600 focus:text-red-600 flex items-center gap-2 cursor-pointer">
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

      {/* Pagination */}
      <div className="mt-4">
        <Pagination
          className="flex justify-between items-center"
          layout="table"
          itemsPerPage={10}
          totalItems={orders.length}
          onPageChange={onPageChange}
          currentPage={currentPage}
          showIcons
        />
      </div>
    </div>
  );
}

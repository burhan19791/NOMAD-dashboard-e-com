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
import { FaSearch, FaSlidersH } from "react-icons/fa";
import CustomDropdown from "../../custom-select";
import SortBySelect from "../../sort-by-select";
import { useState } from "react";
import CustomTextSelect from "../../custom-text-select";
import CustomSearch from "../../custom-search";

export default function RecentOrdersTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  const orders = [
    {
      id: "#1001",
      products: "Black Hoodie, Nomad Cap",
      customer: "Alex Johnson",
      amount: "$89.99",
      orderDate: "2025-08-05",
      deliveryDate: "2025-08-09",
      paymentMethod: "Credit Card",
      status: "Processing",
    },
    {
      id: "#1002",
      products: "Oversized Tee",
      customer: "Samantha Lee",
      amount: "$39.99",
      orderDate: "2025-08-06",
      deliveryDate: "2025-08-10",
      paymentMethod: "PayPal",
      status: "Out for Delivery",
    },
    {
      id: "#1003",
      products: "Nomad Cargo Pants",
      customer: "David Kim",
      amount: "$59.99",
      orderDate: "2025-08-02",
      deliveryDate: "2025-08-07",
      paymentMethod: "Cash on Delivery",
      status: "Delivered",
    },
    {
      id: "#1004",
      products: "Graphic Hoodie",
      customer: "Emily Carter",
      amount: "$74.99",
      orderDate: "2025-08-01",
      deliveryDate: "2025-08-05",
      paymentMethod: "Credit Card",
      status: "Canceled",
    },
  ];

  const statusOptions = [
    { value: "all", label: "All" },
    { value: "processing", label: "Processing" },
    { value: "out-for-delivery", label: "Out for Delivery" },
    { value: "delivered", label: "Delivered" },
    { value: "canceled", label: "Canceled" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Processing":
        return (
          <Badge className="bg-yellow-light text-yellow dark:bg-yellow-light py-1.5 rounded-md hover:bg-yellow-light dark:text-yellow w-fit">
            {status}
          </Badge>
        );
      case "Out for Delivery":
        return (
          <Badge className="bg-green-light text-green dark:bg-green-light py-1.5 rounded-md hover:bg-green-light dark:text-green w-fit">
            {status}
          </Badge>
        );
      case "Delivered":
        return (
          <Badge className="bg-success-light text-success dark:bg-success-light py-1.5 hover:bg-success-light rounded-md dark:text-success w-fit">
            {status}
          </Badge>
        );
      case "Canceled":
        return (
          <Badge className="bg-error-light text-error dark:bg-error-light py-1.5 hover:bg-error-light rounded-md dark:text-error w-fit">
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
        <CardTitle title="Recent Orders" />
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search */}
          <CustomSearch />

          {/* Status Select */}
          <div>
            <CustomDropdown
              placeholder="Status"
              smIcon={<FaSlidersH />}
              options={statusOptions}
            />
          </div>

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
                  Order ID
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Products
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Customer
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Amount
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Order Date
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Delivery Date
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Payment Method
                </TableHeadCell>
                <TableHeadCell className="whitespace-nowrap text-font-light bg-white dark:bg-inner-card">
                  Status
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
                  <TableCell className="whitespace-nowrap text-blue underline">
                    {order.id}
                  </TableCell>
                  <TableCell className="text-font-light">
                    {order.products}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-font-light">
                    {order.customer}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-purple">
                    {order.amount}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-font-light">
                    {order.orderDate}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-font-light">
                    {order.deliveryDate}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-font-light">
                    {order.paymentMethod}
                  </TableCell>
                  <TableCell className="whitespace-nowrap">
                    {getStatusBadge(order.status)}
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

"use client";

import CardTitle from "@/app/components/card-title";
import ProductsTable from "@/app/components/products/productsList/product-tables.tsx/products-table";
import ProductsOverviewCard from "@/app/components/products/productsList/products-overview-cards/products-overview-cards";
import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-react";
import {
  FaBox,
  FaDollarSign,
  FaDownload,
  FaExclamationTriangle,
  FaPrint,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { MdPrint } from "react-icons/md";

const ProductsList = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Total Revenue"
            description="Revenue from products"
            mainValue="1,234,567"
            percentageChange="+12%"
            percentageColor="success"
            icon={<FaDollarSign className="text-2xl" />}
            color="purple-gradient"
          />
        </div>

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Total Products"
            description="Number of products"
            mainValue={342}
            percentageChange="+8%"
            percentageColor="success"
            icon={<FaBox className="text-xl" />}
          />
        </div>

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Out of Stock"
            description="Products fully out of stock"
            mainValue={12}
            percentageChange="-5%"
            percentageColor="danger"
            icon={<FaExclamationTriangle className="text-xl" />}
          />
        </div>

        <div className="col-span-12 xl:col-span-3 md:col-span-6">
          <ProductsOverviewCard
            title="Inventory Value"
            description="Value of current stock"
            mainValue="450,000"
            icon={<FaWallet className="text-xl" />}
          />
        </div>
        {/* <div className="col-span-12">
          <TableSortingCard />
        </div>   */}

        <div className="col-span-12 flex justify-between items-center">
          <CardTitle title="Products List" />
          <div className="flex items-center md:gap-4 gap-2">
            <Button
              className="bg-white gap-2 dark:hover:bg-inner-card py-2 px-3 md:py-5 md:px-4 hover:bg-gray-200 border border-gray-300  dark:border-inner-card dark:bg-inner-card text-font-primary"
            >
              <FaDownload />
              <div className="hidden md:flex">Download</div>
            </Button>
            <Button
              className="bg-white gap-2 dark:hover:bg-inner-card py-2 px-3 md:py-5 md:px-4 hover:bg-gray-200 border border-gray-300  dark:border-inner-card dark:bg-inner-card text-font-primary"
            >
              <MdPrint className="text-lg"/>
              <div className="hidden md:flex">Print</div>
            </Button>
           <Button
              className="bg-purple dark:bg-purple dark:hover:bg-purple-700 gap-2 py-2 px-3 md:py-5 md:px-4 hover:bg-purple-700  text-white"
            >
              <TiPlus className="text-lg"/>
              <div className="hidden md:flex">Add New Product</div>
            </Button>
          </div>
        </div>
        <div className="col-span-12">
          <ProductsTable />
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

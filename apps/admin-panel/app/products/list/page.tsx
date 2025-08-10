"use client";

import ProductsOverviewCard from "@/app/components/products/productsList/products-overview-cards/products-overview-cards";
import ProductsOverviewCards from "@/app/components/products/productsList/products-overview-cards/products-overview-cards";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import {
  FaBox,
  FaDollarSign,
  FaExclamationTriangle,
  FaShoppingBag,
  FaWallet,
} from "react-icons/fa";

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
        <div className="lg:col-span-3 sm:col-span-6 col-span-12 md:col-span-6">
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

        <div className="lg:col-span-3 sm:col-span-6 col-span-12 md:col-span-6">
          <ProductsOverviewCard
            title="Total Products"
            description="Number of products"
            mainValue={342}
            percentageChange="+8%"
            percentageColor="success"
            icon={<FaBox className="text-xl" />}
          />
        </div>

        <div className="lg:col-span-3 sm:col-span-6 col-span-12 md:col-span-6">
          <ProductsOverviewCard
            title="Out of Stock"
            description="Products fully out of stock"
            mainValue={12}
            percentageChange="-5%"
            percentageColor="danger"
            icon={<FaExclamationTriangle className="text-xl" />}
          />
        </div>

        <div className="lg:col-span-3 sm:col-span-6 col-span-12 md:col-span-6">
          <ProductsOverviewCard
            title="Inventory Value"
            description="Value of current stock"
            mainValue="450,000"
            icon={<FaWallet className="text-xl" />}
          />
        </div>
        <div className="col-span-12">
            
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

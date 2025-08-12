"use client";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";

const ProductOverview = () => {
  return (
    <div className="lg:ml-20 xl:ml-64 p-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">List View</BreadcrumbItem>
      </Breadcrumb>
      <div className="bg-card-background p-5 rounded-2xl">
        <div className="flex items-start gap-7">
          <div className="flex flex-col items-start md:flex-row gap-4">
            <div className="flex flex-row md:flex-col gap-5">
              <div className="bg-gray-200 w-15 h-15 lg:w-20 lg:h-20" />
              <div className="bg-gray-200 w-15 h-15 lg:w-20 lg:h-20" />
              <div className="bg-gray-200 w-15 h-15 lg:w-20 lg:h-20" />
              <div className="bg-gray-200 w-15 h-15 lg:w-20 lg:h-20" />
            </div>
            <div className="bg-gray-200 w-64 h-64 lg:w-96 lg:h-96" />
          </div>
          <div>
            <div className="text-font-primary">
              Order Id
              <span className="underline text-purple font-bold ml-1">
                123456
              </span>
            </div>
            <div className="mt-10">
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className="text-yellow" />
                </div>
                <span>4</span>
                <span className="text-font-light text-xs">(204)</span>
              </div>
              <div className="font-medium text-2xl text-font-primary">
                NØMAD Urban Explorer Hoodie
              </div>

              {/* <div className="mt-6">
                <div className="text-sm text-font-light mb-1">Colors</div>
                <div className="flex items-center gap-1.5">
                  <div className="rounded-full w-6 h-6 dark:border dark:border-white bg-blue-400" />
                  <div className="rounded-full w-6 h-6 dark:border dark:border-white bg-black" />
                  <div className="rounded-full w-6 h-6 dark:border dark:border-white bg-green-500" />
                  <div className="rounded-full w-6 h-6 dark:border dark:border-white bg-red-400" />
                </div>
              </div> */}
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="font-bold text-font-light line-through">
                $70.00
              </div>
              <div className="font-bold text-font-primary text-lg">$49.99</div>
            </div>
            <div className="text-sm text-font-light mt-4">Sizes</div>
            <div className="flex flex-wrap mt-2 gap-4 font-semibold text-sm">
              <div className="bg-gray-200 dark:bg-inner-card rounded-full px-4 py-1 items-center">
                S
              </div>

              <div className="bg-gray-200 dark:bg-inner-card rounded-full px-4 py-1 items-center">
                M
              </div>
              <div className="bg-gray-200 dark:bg-inner-card rounded-full px-4  py-1 items-center">
                L
              </div>
              <div className="bg-gray-200 dark:bg-inner-card rounded-full px-4 py-1 items-center">
                XL
              </div>
              <div className="bg-gray-200 dark:bg-inner-card rounded-full py-1 px-4 items-center">
                XXL
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

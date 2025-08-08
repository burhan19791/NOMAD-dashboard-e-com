"use client";

import CardTitle from "@/app/components/card-title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileInput,
  Select,
  TabItem,
  Tabs,
  Textarea,
  TextInput,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiLink, HiUpload } from "react-icons/hi";

const CreateProduct = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");

  const imageSrc = file
    ? URL.createObjectURL(file)
    : url.startsWith("http")
    ? url
    : "";

  return (
    <div className="lg:ml-64 p-6">
      <div className="bg-card-background rounded-lg p-5">
        <CardTitle title="Create Product" />
        <form className="mt-8">
          <div className="gap-10 flex flex-col lg:max-w-4xl ">
            {/* Title */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Title</h3>
                <p className="text-font-light text-sm">
                  Enter the title of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <TextInput
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Description</h3>
                <p className="text-font-light text-sm">
                  Enter the description of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <Textarea
                  id="description"
                  className="h-32 w-full"
                  placeholder="Description"
                />
              </div>
            </div>

            {/* Category */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Category</h3>
                <p className="text-font-light text-sm">
                  Select the category of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <Select
                  id="category"
                  className="text-gray-500 w-full"
                  theme={{
                    field: {
                      select: {
                        base: "w-full rounded-lg border text-sm p-2.5",
                        colors: {
                          gray: "bg-gray-50 text-gray-500 border-gray-300",
                        },
                      },
                    },
                  }}
                  color="gray"
                  required
                >
                  <option hidden>Category</option>
                  <option>Juices</option>
                  <option>Water</option>
                  <option>Carbonated Drink</option>
                </Select>
              </div>
            </div>

            {/* Stock */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Stock</h3>
                <p className="text-font-light text-sm">
                  Enter the stock of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <TextInput
                  id="stock"
                  type="number"
                  placeholder="Stock"
                  required
                  className="w-full"
                />
              </div>
            </div>

            {/* Price */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Price</h3>
                <p className="text-font-light text-sm">
                  Enter the price of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <TextInput
                  type="number"
                  id="price"
                  placeholder="Price"
                  className="w-full"
                />
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 w-full px-2 md:px-4">
              <div className="md:max-w-[50%] md:pr-4">
                <h3 className="text-base text-font-primary">Image</h3>
                <p className="text-font-light text-sm">
                  Enter or upload the image of your product
                </p>
              </div>
              <div className="w-full md:w-96">
                <Tabs aria-label="Image input method" color="default">
                  {/* Upload Tab */}
                  <TabItem active title="Upload" icon={HiUpload}>
                    <FileInput
                      onChange={(e) => setFile(e.target.files?.[0] || null)}
                      accept="image/*"
                      className="w-full"
                    />
                  </TabItem>

                  {/* URL Tab */}
                  <TabItem title="URL" icon={HiLink}>
                    <TextInput
                      placeholder="Paste image URL"
                      value={url}
                      onChange={(e) => {
                        setFile(null);
                        setUrl(e.target.value);
                      }}
                    />
                  </TabItem>
                </Tabs>
              </div>
            </div>
          </div>
          <div className="flex  items-end justify-end max-w-4xl mt-8 gap-4   w-full px-2 md:px-4">
            <Link
              href={"/products"}
              className="text-error underline text-sm cursor-pointer"
            >
              Cancel
            </Link>
            <Button className="bg-blue hover:bg-blue-600 text-white">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;

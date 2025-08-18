'use client';

import { Breadcrumb, BreadcrumbItem, Button, Badge } from 'flowbite-react';
import React, { useState } from 'react';
import {
  FaShoppingBag,
  FaStar,
  FaEdit,
  FaTrash,
  FaCopy,
  FaEye,
  FaArrowLeft,
  FaArrowRight,
  FaBox,
  FaDollarSign,
  FaChartLine,
  FaCalendar,
  FaTag,
  FaWeight,
  FaRuler,
  FaCalendarAlt,
  FaEye as FaEyeIcon,
  FaHeart,
  FaShare,
  FaCheck,
} from 'react-icons/fa';
import { TbLayoutGrid } from 'react-icons/tb';

const ProductOverview = () => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Navy Blue');

  // Mock product data - in real app this would come from props/API
  const products = [
    {
      id: 'P1001',
      name: 'Samsung Galaxy Tab A9+',
      description:
        'Samsung Galaxy Tab A9+ Tablet 11" 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite',
      price: 199.99,
      stock: 45,
      category: 'Electronics',
      rating: 4.2,
      reviewCount: 203,
      status: 'in-stock',
      sku: 'SM-X110NZAAXAR',
      weight: '1.2 lbs',
      dimensions: '10.1" x 6.4" x 0.3"',
      createdAt: '2024-01-15',
      lastUpdated: '2024-01-20',
      brand: 'Samsung',
      model: 'Galaxy Tab A9+',
      color: 'Graphite',
      storage: '64GB',
      screenSize: '11"',
      warranty: '1 Year',
      colors: ['Graphite', 'Silver', 'Pink Gold'],
      storageOptions: ['32GB', '64GB', '128GB'],
    },
    {
      id: 'P1002',
      name: 'Nomad Premium Hoodie',
      description:
        'Premium quality hoodie made from sustainable materials, perfect for outdoor adventures and everyday comfort. Features advanced moisture-wicking technology and durable construction.',
      price: 89.99,
      stock: 23,
      category: 'Apparel',
      rating: 4.7,
      reviewCount: 156,
      status: 'low-stock',
      sku: 'NMD-HD-001',
      weight: '0.8 lbs',
      dimensions: 'One Size Fits All',
      createdAt: '2024-01-10',
      lastUpdated: '2024-01-18',
      brand: 'Nomad',
      model: 'Premium Hoodie',
      color: 'Navy Blue',
      material: 'Sustainable Cotton',
      size: 'One Size',
      warranty: '30 Days',
      colors: ['Navy Blue', 'Forest Green', 'Charcoal Gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    },
    {
      id: 'P1003',
      name: 'Adventure Backpack 45L',
      description:
        'Large capacity adventure backpack perfect for hiking, travel, and outdoor activities. Features multiple compartments, water-resistant material, and comfortable shoulder straps.',
      price: 129.99,
      stock: 0,
      category: 'Outdoor Gear',
      rating: 4.5,
      reviewCount: 89,
      status: 'out-of-stock',
      sku: 'ADV-BP-045',
      weight: '2.1 lbs',
      dimensions: '28" x 14" x 12"',
      createdAt: '2024-01-05',
      lastUpdated: '2024-01-22',
      brand: 'Adventure Gear',
      model: 'Explorer 45L',
      color: 'Forest Green',
      capacity: '45L',
      material: 'Water-resistant Nylon',
      warranty: '2 Years',
      colors: ['Forest Green', 'Ocean Blue', 'Desert Tan'],
      capacities: ['30L', '45L', '60L'],
    },
  ];

  // Mock reviews data
  const mockReviews = [
    {
      id: 1,
      author: 'Sarah M.',
      rating: 5,
      date: '2 days ago',
      comment:
        'Absolutely love this product! The quality is outstanding and it exceeded my expectations. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      author: 'Mike R.',
      rating: 4,
      date: '1 week ago',
      comment:
        'Great product overall. The design is sleek and functionality is top-notch. Only giving 4 stars because shipping took longer than expected.',
      verified: true,
    },
    {
      id: 3,
      author: 'Jennifer L.',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Perfect for my needs. The customer service was also excellent when I had questions. Will definitely buy again!',
      verified: false,
    },
    {
      id: 4,
      author: 'David K.',
      rating: 3,
      date: '3 weeks ago',
      comment:
        'Good product but could be better. The quality is decent for the price, though I expected a bit more durability.',
      verified: true,
    },
  ];

  const currentProduct = products[currentProductIndex];

  const navigateProduct = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && currentProductIndex > 0) {
      setCurrentProductIndex(currentProductIndex - 1);
    } else if (
      direction === 'next' &&
      currentProductIndex < products.length - 1
    ) {
      setCurrentProductIndex(currentProductIndex + 1);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'in-stock':
        return (
          <Badge color="success" className="py-1.5">
            In Stock
          </Badge>
        );
      case 'low-stock':
        return (
          <Badge color="warning" className="py-1.5">
            Low Stock
          </Badge>
        );
      case 'out-of-stock':
        return (
          <Badge color="failure" className="py-1.5">
            Out of Stock
          </Badge>
        );
      default:
        return (
          <Badge color="gray" className="py-1.5">
            Unknown
          </Badge>
        );
    }
  };

  const renderProductAttributes = () => {
    if (currentProduct.category === 'Apparel') {
      return (
        <div className="space-y-4">
          {/* Size Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedSize === size
                      ? 'border-purple bg-purple text-white'
                      : 'border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Color
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.colors?.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`rounded-md border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selectedColor === color
                      ? 'border-purple bg-purple text-white'
                      : 'border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple hover:text-white'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    } else if (currentProduct.category === 'Electronics') {
      return (
        <div className="flex items-center gap-8">
          {/* Storage Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Storage
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.storageOptions?.map((storage) => (
                <button
                  key={storage}
                  className="border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Color
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.colors?.map((color) => (
                <button
                  key={color}
                  className="border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="space-y-4">
          {/* Capacity Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Capacity
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.capacities?.map((capacity) => (
                <button
                  key={capacity}
                  className="border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                >
                  {capacity}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h4 className="text-font-primary mb-2 text-sm font-semibold">
              Color
            </h4>
            <div className="flex flex-wrap gap-2">
              {currentProduct.colors?.map((color) => (
                <button
                  key={color}
                  className="border-inner-card-border bg-card-background text-font-primary hover:border-purple hover:bg-purple rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:text-white"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="p-6 lg:ml-20 xl:ml-64">
      <Breadcrumb className="mb-6">
        <BreadcrumbItem href="#" icon={FaShoppingBag}>
          Products
        </BreadcrumbItem>
        <BreadcrumbItem href="#">Overview</BreadcrumbItem>
      </Breadcrumb>

      {/* Product Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            onClick={() => navigateProduct('prev')}
            disabled={currentProductIndex === 0}
            className="bg-card-background dark:bg-inner-card dark:hover:bg-inner-card border-inner-card-border text-font-primary hover:bg-inner-card flex items-center gap-2 border"
          >
            <FaArrowLeft className="text-sm" />
            Previous
          </Button>
          <Button
            onClick={() => navigateProduct('next')}
            disabled={currentProductIndex === products.length - 1}
            className="bg-card-background dark:bg-inner-card dark:hover:bg-inner-card border-inner-card-border text-font-primary hover:bg-inner-card flex items-center gap-2 border"
          >
            Next
            <FaArrowRight className="text-sm" />
          </Button>
        </div>
        <div className="text-font-light text-sm">
          Product {currentProductIndex + 1} of {products.length}
        </div>
      </div>

      {/* Main Product Section */}
      <div className="bg-card-background border-inner-card-border mb-6 rounded-2xl border p-6">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Left Side - Product Image */}
          <div className="w-full flex-shrink-0 lg:w-auto">
            <div className="mx-auto h-[350px] w-full max-w-[450px] rounded-xl bg-gray-200 lg:h-[450px] lg:w-[450px]">
              <div className="flex h-full w-full items-center justify-center">
                <TbLayoutGrid className="text-6xl text-gray-400" />
              </div>
            </div>
          </div>

          {/* Right Side - Product Details */}
          <div className="flex-1 space-y-6">
            {/* Product Header */}
            <div>
              <div className="text-font-light text-sm">
                Product ID:
                <span className="text-purple font-semibold">
                  {currentProduct.id}
                </span>
              </div>
              <h1 className="text-font-primary mt-2 text-3xl font-bold">
                {currentProduct.name}
              </h1>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <FaStar className="text-yellow text-lg" />
                  <span className="text-font-primary font-medium">
                    {currentProduct.rating}
                  </span>
                  <span className="text-font-light">
                    ({currentProduct.reviewCount} reviews)
                  </span>
                </div>
                {getStatusBadge(currentProduct.status)}
              </div>
            </div>

            {/* Product Description */}
            <div>
              <h3 className="text-font-primary mb-3 text-lg font-semibold">
                Description
              </h3>
              <p className="text-font-light leading-relaxed">
                {currentProduct.description}
              </p>
            </div>

            {/* Key Details */}
            <div className="flex items-center gap-12">
              <div>
                <div className="text-font-light text-xs tracking-wide uppercase">
                  Price
                </div>
                <div className="text-font-primary mt-1 text-xl font-bold">
                  ${currentProduct.price}
                </div>
              </div>
              <div>
                <div className="text-font-light text-xs tracking-wide uppercase">
                  Stock
                </div>
                <div className="text-font-primary mt-1 text-xl font-bold">
                  {currentProduct.stock}
                </div>
              </div>
            </div>

            {/* Product Attributes (Size, Color, etc.) */}
            {renderProductAttributes()}
          </div>
        </div>
      </div>

      {/* Reviews Section - Like the Dribbble Design */}
      <div className="bg-card-background border-inner-card-border mb-6 rounded-2xl border p-6">
        <div className="mb-6">
          <h3 className="text-font-primary text-2xl font-bold">
            Customer Reviews
          </h3>
          <p className="text-font-light mt-2">
            See what customers are saying about this product
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mb-8 flex items-center gap-8">
          <div className="text-center">
            <div className="text-font-primary text-5xl font-bold">
              {currentProduct.rating}
            </div>
            <div className="mb-2 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`text-xl ${
                    i < Math.floor(currentProduct.rating)
                      ? 'text-yellow'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-font-light text-sm">
              {currentProduct.reviewCount} reviews
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="flex-1 space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = Math.floor(Math.random() * 50) + 10; // Mock data
              const percentage = Math.floor(
                (count / currentProduct.reviewCount) * 100,
              );
              return (
                <div key={rating} className="flex items-center gap-3">
                  <div className="flex w-16 items-center gap-1">
                    <span className="text-font-light text-sm">{rating}</span>
                    <FaStar className="text-yellow text-sm" />
                  </div>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="bg-yellow h-full rounded-full transition-all duration-300"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-font-light w-12 text-right text-sm">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reviews List */}
        <div className="space-y-4">
          {mockReviews.map((review) => (
            <div
              key={review.id}
              className="border-inner-card-border rounded-lg border p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`text-sm ${
                          i < review.rating ? 'text-yellow' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-font-primary font-medium">
                    {review.author}
                  </span>
                  {review.verified && (
                    <Badge color="success" size="sm" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
                <span className="text-font-light text-sm">{review.date}</span>
              </div>
              <p className="text-font-light text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Specifications */}
      <div className="bg-card-background border-inner-card-border rounded-2xl border p-6">
        <h3 className="text-font-primary mb-6 text-2xl font-bold">
          Product Specifications
        </h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-font-primary font-semibold">
              Basic Information
            </h4>
            <div className="space-y-3">
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Brand</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.brand}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Model</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.model}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Category</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.category}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">SKU</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.sku}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-font-primary font-semibold">
              Physical Details
            </h4>
            <div className="space-y-3">
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Weight</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.weight}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Dimensions</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.dimensions}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Color</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.color}
                </span>
              </div>
              <div className="border-inner-card-border flex justify-between border-b py-2">
                <span className="text-font-light">Warranty</span>
                <span className="text-font-primary font-medium">
                  {currentProduct.warranty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;

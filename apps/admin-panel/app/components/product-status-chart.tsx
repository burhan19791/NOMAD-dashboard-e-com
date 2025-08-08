"use client";

import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

// Dynamically import Chart to disable SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartOptions: ApexOptions = {
  chart: {
    type: "donut" as const,
  },
  labels: ["Processing", "Out for Delivery", "Cancelled", "Delivered"],
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
    // Fix: Place labels inside the ring
    style: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    dropShadow: {
      enabled: false,
    },
  },
  colors: ["#4b93ff", "#1ea6d3", "#f1be46", "#7c6bff"],
  plotOptions: {
    pie: {
      expandOnClick: true,
      donut: {
        size: "70%",
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "16px",
            fontWeight: 600,
            offsetY: -10,
          },
          value: {
            show: true,
            fontSize: "20px",
            fontWeight: 700,
            offsetY: 10,
          },
          total: {
            show: true,
            label: "Total",
            fontSize: "16px",
            fontWeight: 600,
            formatter: function (w) {
              return w.globals.seriesTotals.reduce(
                (a: number, b: number) => a + b,
                0
              );
            },
          },
        },
      },
    },
  },
};

// Dummy order status data — update these numbers based on your real data
const series = [15, 10, 5, 20]; // [Processing, Out for Delivery, Cancelled, Delivered]

const OrderStatusChart = () => {
  return (
    <div className="max-w-sm mx-auto">
      <Chart options={chartOptions} series={series} type="donut" height={300} />
    </div>
  );
};

export default OrderStatusChart;

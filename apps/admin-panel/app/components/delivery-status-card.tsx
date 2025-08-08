import React from "react";
import CartTitle from "./card-title";
import ApexCharts from "apexcharts";
import RadialChart from "./product-status-chart";
import OrderStatusChart from "./product-status-chart";

const DeliveryStatusCard = () => {
  return (
    <div className="overflow-x-auto rounded-2xl col-span-3 bg-card-background p-5 mt-4">
      <CartTitle title="Delivery Status" />
      <div className="flex flex-col gap-6">
        <div>
          <OrderStatusChart />  
        </div>
      </div>
    </div>
  );
};

export default DeliveryStatusCard;

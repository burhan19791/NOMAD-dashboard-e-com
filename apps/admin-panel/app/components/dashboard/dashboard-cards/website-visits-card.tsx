import CartTitle from "../../card-title";
import OrderStatusChart from "../dashboard-charts/website-visits-chart";
import SortBySelect from "../../sort-by-select";

const WebsiteVisitsCard = () => {
  return (
    <div className="rounded-2xl bg-card-background p-5">
      <div className="flex items-center justify-between mb-4">
        <CartTitle title="Website Visits" />
        <SortBySelect />
      </div>
      <div>
        <div>
          <OrderStatusChart />
        </div>
      </div>
    </div>
  );
};

export default WebsiteVisitsCard;

import DashboardSummaryCard from "./components/dashboard-summary-cards";
import Topbar from "./components/topbar";
import ProductsTable from "./components/products-table";
import DeliveryStatusCard from "./components/delivery-status-card";
import SideBar from "./components/sidebar.cmp";

export default function Home() {
  return (
    <>
      
      <div className="lg:ml-64 p-6">
        <DashboardSummaryCard />
        <div className="grid grid-cols-12  gap-6">
          <ProductsTable />
          <DeliveryStatusCard />
        </div>
        <div className="min-h-screen"></div>
      </div>
    </>
  );
}

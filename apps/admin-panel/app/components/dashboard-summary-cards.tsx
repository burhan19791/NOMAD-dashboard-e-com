import { TbCoinFilled } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { BsFillBoxFill } from "react-icons/bs";

const cards = [
  {
    title: "175,000 AED",
    subHeading: "Total Earnings",
    icon: <TbCoinFilled className="text-4xl text-blue" />,
    stat: "+12%",
    primary: "bg-blue-light",
    secondary: "text-blue",
  },
  {
    title: "127,000 AED",
    subHeading: "Total Expenses",
    icon: <FaMoneyBillWave className="text-3xl text-green" />,
    stat: "-12  %",
    primary: "bg-green-light",
    secondary: "text-green",
  },
  {
    title: "72",
    subHeading: "Total Orders",
    icon: <FaCartShopping className="text-3xl text-yellow" />,
    stat: "+6%",
    primary: "bg-yellow-light",
    secondary: "text-yellow",
  },
  {
    title: "13",
    subHeading: "Total Products",
    icon: <BsFillBoxFill className="text-3xl text-purple" />,
    stat: "+13%",
    primary: "bg-purple-light",
    secondary: "text-purple",
  },
];

const DashboardSummaryCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-card-background p-4 py-8 rounded-2xl flex items-center gap-3 relative"
        >
          <div
            className={`${card.primary} rounded-full w-16 h-16 flex items-center justify-center`}
          >
            <div>{card.icon}</div>
          </div>
          <div>
            <h2 className="text-lg text-nowrap font-semibold text-font-primary leading-none mb-1 mr-12">
              {card.title}
            </h2>
            <p className="text-sm text-nowrap text-font-light">
              {card.subHeading}
            </p>
          </div>
          <div>
            <p
              className={`text-xs absolute bottom-4 right-4 ${card.secondary}`}
            >
              {card.stat}
            </p>
            <div
              className={`w-5 h-5 flex items-center absolute top-4 right-4 justify-center ${card.primary} ${card.secondary} rounded-full text-xs`}
            >
              ?
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardSummaryCard;

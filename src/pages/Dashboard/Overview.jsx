import { useEffect, useState } from "react";
import {
  EggIcon,
  TruckIcon,
  ShoppingCartIcon,
  UserIcon,
  PackageIcon,
} from "lucide-react"; // Import relevant icons
import CountUp from "react-countup";
import { Link, useOutletContext } from "react-router-dom";
import PageLoader from "../../components/PageLoader";
import SideBar from "../../components/SideBar";
import Topbar from "../../components/TopBar";

const Overview = () => {
  const [data, setData] = useState({
    products: 0, // Products (Poultry and other items)
    orders: 0, // Total Orders placed by consumers
    farmers: 0, // Registered farmers on the platform
    consumers: 0, // Registered consumers
    suppliers: 0, // Suppliers of poultry feed and logistics
  });
  const [isLoading, setIsLoading] = useState(false);
  const profile = {};

  const getPreviewLink = () => {
    if (!profile) return "/preview/default";

    return `/preview/${profile.userName}`;
  };

  const getData = async () => {
    setIsLoading(true);
    try {
      // Simulated API calls for poultry ecommerce data
      const [
        totalProducts,
        totalOrders,
        totalFarmers,
        totalConsumers,
        totalSuppliers,
      ] = await Promise.all([
        apiGetProducts(), // Fetch total products
        apiGetOrders(), // Fetch total orders
        apiGetFarmers(), // Fetch total farmers
        apiGetConsumers(), // Fetch total consumers
        apiGetSuppliers(), // Fetch total suppliers (logistics, feed)
      ]);

      const newData = {
        products: totalProducts.data.Products.length ?? 0,
        orders: totalOrders.data.Orders.length ?? 0,
        farmers: totalFarmers.data.Farmers.length ?? 0,
        consumers: totalConsumers.data.Consumers.length ?? 0,
        suppliers: totalSuppliers.data.Suppliers.length ?? 0,
      };

      setData(newData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div className="flex h-screen overflow-hidden">
          <SideBar />
          <div className="flex-grow flex flex-col">
            <Topbar />
          <div className="p-10 flex flex-col gap-y-10 ms-[240px]">
            <Link
              to={getPreviewLink()}
              className="bg-coralRed text-white ml-auto px-6 py-3 rounded-lg"
            >
              View Preview
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: <EggIcon className="h-8 w-8 text-coralRed" />,
                  text: "Products",
                  id: "products",
                },
                {
                  icon: <ShoppingCartIcon className="h-8 w-8 text-coralRed" />,
                  text: "Orders",
                  id: "orders",
                },
                {
                  icon: <UserIcon className="h-8 w-8 text-coralRed" />,
                  text: "Farmers",
                  id: "farmers",
                },
                {
                  icon: <UserIcon className="h-8 w-8 text-coralRed" />,
                  text: "Consumers",
                  id: "consumers",
                },
                {
                  icon: <TruckIcon className="h-8 w-8 text-coralRed" />,
                  text: "Suppliers",
                  id: "suppliers",
                },
              ].map(({ icon, text, id }, index) => (
                <div
                  key={index}
                  className="h-40 shadow-md bg-white p-6 flex flex-col justify-between"
                >
                  <div className="flex justify-between">
                    <span>{icon}</span>
                    <span className="text-lg font-semibold">{text}</span>
                  </div>
                  <CountUp
                    className="text-2xl font-semibold"
                    start={0}
                    end={data[id]}
                  />
                </div>
              ))}
            </div>
          </div>
          </div>

          
        </div>
      )}
    </>
  );
};

export default Overview;

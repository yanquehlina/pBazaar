import { createBrowserRouter, Route, Router, RouterProvider, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Terms from "./pages/Privacy/Terms";
import Privacy from "./pages/Privacy/Privacy";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import Overview from "./pages/Dashboard/Overview";
import Profile from "./pages/Profiles/Profile";
import OrderPage from "./pages/Dashboard/Order";
import LandingPage from "./pages/Landing";
import HomePage from "./pages/Home";
import ProfileUpdate from "./pages/Profiles/ProfileUpdate";
import ConsumerDashboard from "./pages/Dashboard/ConsumerDashboard";
import FarmerDashboard from "./pages/Dashboard/FarmerDashboard";
import SupplierDashboard from "./pages/Dashboard/SupplierDashboard";
import ProductList from "./pages/ProductMgtFarmer/ProductList";
import AddProduct from "./pages/ProductMgtFarmer/AddProduct";
import EditProduct from "./pages/ProductMgtFarmer/EditProduct";
import OrderList from "./pages/OrderMgtFarmer/OrderList";
import OrderDetails from "./pages/OrderMgtFarmer/OrderDetails";
import ConsumerOrderList from "./pages/OrderMgtConsumer/ConsumerOrderList";
import ProductDetails from "./pages/Dashboard/ProductDetails";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/Others/About";
import Contact from "./pages/Others/Contact";
import Notifications from "./pages/Others/Notifications";
import SMESupport from "./pages/Others/SmeSupport";
import Settings from "./pages/Others/Settings";

function App () {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          element: <Overview/>
        },
        {
          path: "admin",
          element: <AdminDashboard/>
        },
        {
          path: "farmer",
          element: <FarmerDashboard/>
        },
        {
          path: "consumer",
          element: <ConsumerDashboard/>
        },
        {
          path: "supplier",
          element: <SupplierDashboard/>
        }
      ]
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/profile-update",
      element: <ProfileUpdate />
    },
    {
      path: "/notifications",
      element: <Notifications />
    },
    {
      path: "/farmer/product-list",
      element: <ProductList />
    },
    {
      path: "/order",
      element: <OrderPage />,
    },
    {
      path: "/product-detail",
      element: <ProductDetails />
    },
    {
      path: "/farmer/order-list",
      element: <OrderList />
    },
    {
      path: "/farmer/order-details",
      element: <OrderDetails />
    },
    {
      path: "/consumer/order-list",
      element: <ConsumerOrderList />
    },
    {
      path: "/sme-support",
      element: <SMESupport/>
    },
    {
      path: "/settings",
      element: <Settings/>
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/privacy",
      element: <Privacy />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

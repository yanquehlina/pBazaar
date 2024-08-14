import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import Landing from "./pages/Landing";
import Terms from "./pages/Privacy/Terms";
import Privacy from "./pages/Privacy/Privacy";
import AdminDashboard from "./pages/Dashboard/Admin";
import Overview from "./pages/Dashboard/Overview";
import Profile from "./pages/Profiles/Profile";
import OrderPage from "./pages/Dashboard/Order";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "dashboard",
      element: <Overview />,
    },
    {
      path: "profile",
      element: <Profile />,
    },
    {
      path: "/admindashboard",
      element: <AdminDashboard />,
    },

    {
      path: "order",
      element: <OrderPage />,
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

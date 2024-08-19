import React from "react";
import SideBar from "../../components/SideBar";
import Topbar from "../../components/TopBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* <SideBar /> */}
      <div className="flex-grow flex flex-col">
        <Topbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;

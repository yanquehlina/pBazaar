import React from "react";
import SideBar from "../../components/SideBar";
import Topbar from "../../components/TopBar";

function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
        <SideBar />
      <div className="flex-grow flex flex-col">
        <Topbar />
      <div className="bg-backgroundColor text-textPrimaryColor min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Product Management</h2>
           
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Management</h2>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

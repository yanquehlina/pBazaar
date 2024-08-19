import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FilePlus, List, CreditCard, Settings, Info, HelpCircle, LogOut } from 'lucide-react';

const SideBar = () => {
  const role = localStorage.getItem("role");
  return (
    <div className="w-[240px] bg-[#2C3E50] text-white rounded-br-xl p-5 flex flex-col h-full fixed">
      <div>
        <div className="mb-12 mt-8">
          <h1 className="text-xl font-semibold">Menu</h1>
          <Link to="/dashboard" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Home className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Dashboard</span>
          </Link>
          <Link to="/create-request" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <FilePlus className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Create Request</span>
          </Link>
        {role === "farmer" &&  <Link to="/order" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <List className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Orders</span>
          </Link>}
          <Link to="/all-payments" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <CreditCard className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">All Payments</span>
          </Link>
        </div>

        <div className="mb-8 mt-24">
          <Link to="/settings" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Settings className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Settings</span>
          </Link>
          <Link to="/sme-support" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Info className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">SMEs Support</span>
          </Link>
          <Link to="/help" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <HelpCircle className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Help</span>
          </Link>
          <Link to="/" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md mt-20 gap-7">
            <LogOut className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

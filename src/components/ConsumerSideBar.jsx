import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ShoppingCart, Heart, List, Bell, MessageSquare, Settings, HelpCircle, LogOut, FilePlus } from 'lucide-react';

const ConsumerSideBar = () => {
  return (
    <div className="w-[240px] bg-[#2C3E50] text-white rounded-br-xl p-5 flex flex-col h-full fixed">
      <div>
        <div className="mb-12 mt-8">
          <h1 className="text-xl font-semibold">Consumer Menu</h1>
          
          <Link to="/dashboard" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Home className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Dashboard Overview</span>
          </Link>
          
          <Link to="/product-catalog" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <ShoppingCart className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Browse Products</span>
          </Link>
          
          <Link to="/favorites" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Heart className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Favorite Products</span>
          </Link>

          <Link to="/my-orders" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <List className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">My Orders</span>
          </Link>

          <Link to="/order-history" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <List className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Order History</span>
          </Link>

          <Link to="/notifications" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Bell className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Notifications</span>
          </Link>

          <Link to="/messages" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <MessageSquare className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Messages</span>
          </Link>
        </div>

        <div className="mb-8 mt-24">
          <Link to="/settings" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <Settings className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Settings</span>
          </Link>
          
          <Link to="/sme-support" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <FilePlus className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">SMEs Support</span>
          </Link>

          <Link to="/help" className="flex items-center p-3 hover:bg-[#F39C12] rounded-md">
            <HelpCircle className="mr-2 h-[20px] w-[20px]" />
            <span className="text-sm">Help & Support</span>
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

export default ConsumerSideBar;

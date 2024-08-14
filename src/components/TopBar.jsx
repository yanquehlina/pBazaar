import React from 'react';
import { Bell, Search, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b-[0.5px] border-[#E6E6E6] w-full h-[80px]">
      <div className="flex">
          <h1 className="text-2xl font-bold text-[#E74C3C]">P-Bazzar</h1>
          <span>
            <Sparkles className="text-[#F39C12]" />
          </span>
        </div>
      <div className="flex items-center space-x-4">
        <button className="bg-[#E74C3C] text-white px-4 py-2 rounded-md">
          <p className="text-sm">Complete Your Purchase</p>
        </button>
        <div className="relative flex items-center bg-gray-100 rounded-full px-4 py-2 w-[328px] h-[40px]">
          <Search className="text-gray-500 mr-2 w-[20px] h-[20px]" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-[#34495E]"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/profile">
          <User className="text-[#34495E] h-[40px] w-[40px] rounded-full" />
          </Link>
          
          <div className="relative">
            <Bell className="text-[#F39C12] h-[30px] w-[30px]" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-[#E74C3C] rounded-full">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

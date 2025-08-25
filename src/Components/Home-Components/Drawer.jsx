import React from 'react';

const Drawer = ({ closeDrawer }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black bg-opacity-50">
      <div className="w-64 bg-white h-full shadow-lg relative">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center p-4 border-b">
          <img
            src='logo-yellow.webp' // Replace with the correct path to your logo
            alt="Logo"
            className="w-32 h-auto" // Adjust size as needed
          />
          
          {/* Close Button */}
          <button 
            onClick={closeDrawer} 
            className="absolute top-4 right-4 text-amber-500"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Search Section */}
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 text-sm text-amber-500 border-none rounded-lg ring-amber-500"
          />
        </div>

        {/* Menu Items */}
        <div className="p-4">
          <ul className="space-y-6">
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">HOTEL & RESORTS</a></li>
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">DINING</a></li>
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">GALLERY</a></li>
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">SPECIAL DEALS</a></li>
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">ABOUT US</a></li>
            <li><a href="#" className="text-amber-500 hover:text-amber-500 text-xs px-4 font-semibold">Book Direct</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;

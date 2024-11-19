import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../Context/AuthContect';
import { FaRocket, FaChartBar, FaUser, FaSignOutAlt } from 'react-icons/fa'; 

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const {signout}=useAuth()

  const handleMenuClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 bg-white fixed top-0 left-0 w-full z-50 shadow-md space-x-4">
        {/* Sidebar Menu Button */}
        <button
          className="p-4 bg-blue-600 text-white"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          {/* Hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Title next to the menu button on small screens */}
        <div className="text-2xl font-bold text-blue-600">
          SRU <span className="text-lg">CS-AI</span>
        </div>
        <div> navbar</div>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-48 h-screen bg-white shadow-md p-6 fixed z-40 border-r-2 border-gray-200 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="text-2xl font-extrabold text-blue-600 text-center mb-10">
          SRU <span className="text-xs md:inline hidden">CS-AI</span>
        </div>

        {/* Sliding Pointer */}
        <div
          className="absolute left-0 w-1 mt-9 rounded-md bg-blue-600 transition-all duration-300"
          style={{ top: `${activeIndex * 60 + 60}px`, height: '50px' }} 
        ></div>

<nav className="space-y-8">
          <ul className="text-center font-medium text-lg space-y-10">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center justify-center space-x-4 ${
                  isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                }`
              }
              onClick={() => handleMenuClick(0)}
            >
              <FaRocket className="text-1xl" />
              <span>Launchpad</span>
            </NavLink>

            <NavLink
              to="/myreports"
              className={({ isActive }) =>
                `flex items-center justify-center space-x-4 ${
                  isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                }`
              }
              onClick={() => handleMenuClick(1)}
            >
              <FaChartBar className="text-1xl" />
              <span>My Reports</span>
            </NavLink>

            <NavLink
              to="/myaccount"
              className={({ isActive }) =>
                `flex items-center justify-center space-x-4 ${
                  isActive ? 'text-blue-600 font-bold' : 'text-gray-600'
                }`
              }
              onClick={() => handleMenuClick(2)}
            >
              <FaUser className="text-1xl" />
              <span>My Account</span>
            </NavLink>
          </ul>
        </nav>
        <button
            onClick={() => signout()} // Replace with your actual logout function
            className="flex items-center space-x-3  mt-56 text-gray-500 hover:text-red-600"
          >
            <FaSignOutAlt className="text-2xl" />
          <span className="text-lg font-semibold">Logout</span>
        </button>
      </aside>

      {/* Overlay to close the sidebar on smaller screens */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;

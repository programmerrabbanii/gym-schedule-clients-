import navlog from '../assets/navlog.jpg'
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4 w-11/12 ">
      
        <div className="text-xl font-bold">
          <NavLink to="/"> <img className='h-20 rounded-full' src={navlog} alt="" /></NavLink>
        </div>

        {/* Path Names */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allschedule"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-gray-300"
              }
            >
              All Schedule
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/addschedule"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "hover:text-gray-300"
              }
            >
              Add Schedule
            </NavLink>
          </li>
         
        </ul>

        {/* Login & Register */}
        <div className="space-x-4">
          <NavLink to="/login">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Register
            </button>
          </NavLink>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => console.log("Toggle Mobile Menu")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

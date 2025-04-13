import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { RiHome3Line, RiSearchEyeLine, RiRoadMapLine } from 'react-icons/ri';
import { FaMagic, FaShoppingCart, FaPuzzlePiece } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';
import { PiChats } from 'react-icons/pi';
import { CgFeed } from 'react-icons/cg';
import { IoIosChatbubbles } from 'react-icons/io';



const Leftbar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className="hidden lg:block w-[20%] h-full fixed left-0"
        style={{ backgroundColor: 'var(--main-bg-color)', color: 'var(--text-color)' }}
      >
        <ul className="flex flex-col gap-4 mt-10 ml-[50px]">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <RiHome3Line className="inline position mt-[-8px]" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentors"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <RiSearchEyeLine className="inline position mt-[-8px]" /> Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentors"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <FaMagic className="inline position mt-[-8px]" /> Mentors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mentorship"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <MdRocketLaunch className="inline position mt-[-8px]" /> Ask
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feed"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <RiRoadMapLine className="inline position mt-[-8px]" /> Roadmaps
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/roadmaps"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <PiChats className="inline position mt-[-8px]" /> Chats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/communities"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <CgFeed className="inline position mt-[-8px]" /> Feed
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/communities"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <IoIosChatbubbles className="inline position mt-[-8px]" /> Sessions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/communities"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <FaPuzzlePiece className="inline position mt-[-8px]" /> Problems
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/communities"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              <FaShoppingCart className="inline position mt-[-8px]" /> Digital Products
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="lg:ml-[20%] w-full h-full">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Leftbar;
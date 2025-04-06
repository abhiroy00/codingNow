import React, { useState } from 'react';
import { GoMoon, GoSun } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom'; // Import NavLink

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`p-4 flex justify-around items-center text-white bg-black`}>
      <button onClick={toggleMenu} className="flex md:hidden">
        {isMenuOpen ? <RxCross2 size={30} /> : <IoMenu size={30} />}
      </button>

      <div className="text-2xl font-bold text-blue-600">Coding Now</div>

      <ul className="hidden md:flex md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mentors"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Mentors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/mentorship"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Mentorship
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/roadmaps"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Roadmaps
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/communities"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-500 font-semibold text-lg'
                : 'hover:text-gray-400 text-lg'
            }
          >
            Communities
          </NavLink>
        </li>
      </ul>

      <div className="flex space-x-4 items-center justify-center">
        <button className="text-xl flex">
          <GoSun /> <GoMoon />
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login
        </button>
      </div>
      <div>
        <ul
          className="absolute top-16 left-0 w-full h-auto bg-black text-start text-white flex flex-col space-y-4 md:hidden"
          style={{ display: isMenuOpen ? 'flex' : 'none' }}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-500 font-semibold text-lg ml-[20px]'
                  : 'hover:text-gray-400 text-lg ml-[20px]'
              }
            >
              Home
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
              Mentors
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
              Mentorship
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
              Feed
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
              Roadmaps
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
              Communities
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
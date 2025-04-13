import React from 'react'
import { useState, useEffect } from 'react';
import { GoMoon, GoSun } from 'react-icons/go';
import { MdRocketLaunch } from 'react-icons/md'
import { FaRegClock } from 'react-icons/fa'
import { LuMedal } from 'react-icons/lu'
import { FaGraduationCap } from 'react-icons/fa'
import { RiRoadMapLine } from 'react-icons/ri'
import {HiOutlineLightBulb} from 'react-icons/hi'
import { RiPagesLine } from 'react-icons/ri'

const Nav = () => {
  const [theme, setTheme] = useState('light-theme');



  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="p-4 flex justify-between items-center z-50 sticky top-0 " style={{
      backgroundColor: 'var(--main-bg-color)',
      color: 'var(--text-color)',
    }}>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-blue-600 md:mx-[50px]">Coding Now</h1>
        <div className="relative group">
          {/* Mentorship Div */}
          <div className="hidden md:block lg:ml-[150px] px-3 py-2 border-b-2 border-b-gray-300 hover:border-b-blue-500 hover:text-blue-500">
            <MdRocketLaunch className="inline" /> Mentorship
          </div>

          {/* Dropdown Content */}
          <div className="absolute left-0 w-[500px] hidden group-hover:block bg-white shadow-lg rounded-md lg:ml-[150px] mt-2 p-4" style={{ backgroundColor: 'var(--main-bg-color)', color: 'var(--text-color)' }}>
            <h3 className='font-bold'>Mentorship Categories</h3>
            <p style={{ color: 'var(--p-color)' }}>Your one stop solution for every problem.</p>
            <a href='' className='block my-3 font-bold'><LuMedal className='inline text-yellow-500' /> 1:1 One Time Mentorship </a>
            <a href='' className='block my-3 font-bold'><FaRegClock className='inline text-green-500' /> 1:1 Full Time Mentorship </a>
          </div>
        </div>
        <div className="relative group">
          {/* Resources Div */}
          <div className="hidden md:block ml-[20px] px-3 py-2 border-b-2 border-b-gray-300 hover:border-b-blue-500 hover:text-blue-500">
          <FaGraduationCap className='inline'/> Resources
          </div>

          {/* Dropdown Content */}
          <div className="absolute left-0 w-[500px] hidden group-hover:block bg-white shadow-lg rounded-md lg:ml-[150px] mt-2 p-4" style={{ backgroundColor: 'var(--main-bg-color)', color: 'var(--text-color)' }}>
            <h3 className='font-bold'>Resources</h3>
            <p style={{ color: 'var(--p-color)' }}>Empowering your career with the best opportunities.</p>
            <a href='' className='block my-3 font-bold'><RiRoadMapLine className='inline text-red-500' />Roadmaps</a>
            <a href='' className='block my-3 font-bold'><RiPagesLine className='inline text-green-500' />Q&A</a>
            <a href='' className='block my-3 font-bold'><HiOutlineLightBulb className='inline text-yellow-500' />Problems of the day</a>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 items-center justify-center">
        <button className="text-xl flex" onClick={toggleTheme}>
          {theme === 'light-theme' ? <GoMoon /> : <GoSun />}
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login
        </button>
      </div>

    </div>
  )
}

export default Nav
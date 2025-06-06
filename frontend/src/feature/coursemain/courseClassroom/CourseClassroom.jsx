import React from 'react'
import './CourseClassroom.css'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom';

export default function CourseClassroom() {
  return (
    <div className="bg-gray-100 p-3"> 
      <div className="md:flex bg-white rounded-md">
        <div className=' md:w-4/5 p-4 '>
          <h1 className='text-2xl font-semibold'>Classroom</h1>
          <p>Use this space to join live classes, check class schedule and watch recording of past classes.</p>
        </div>
        <div className='2xl:w-1/5 md:w-2/5 p-4 ml-3'>
          <button className='sm:w-[200px] py-2 m-1 text-white border-red-600 border-2 bg-red-600 rounded-md md:float-right'>Access Live Classroom</button> 
          <button className='sm:w-[200px] py-2 m-1 bg-white text-red-600 border-red-600 border-2 rounded-md md:float-right'>Cohort Leaderboard</button>
        </div>
      </div>
      <div className='bg-white h-10'>
        <ul className='flex gap-8'>
        <NavLink to={'upcoming'} className={({ isActive }) => isActive ? ' text-red-500 border-b-4 border-red-500' : 'text-gray-500'}><li className='pb-3 hover:text-red-400 mx-2'>Upcoming</li></NavLink>
        <NavLink to={'Completed'} className={({ isActive }) => isActive ? ' text-red-500 border-b-4 border-red-500' : 'text-gray-500'}><li className='pb-3 hover:text-red-400 mx-2'>Completed</li></NavLink>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

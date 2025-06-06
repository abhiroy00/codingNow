import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default function Mentorship() {
  return (
    <div>
      <div className="bg-white h-14 flex justify-between items-center border-t-2 border-b-2 border-gray-300">
        <ul className='flex justify-start pt-4'>
          <NavLink to={'Book_a_session'} className={({ isActive }) => isActive ? ' text-red-500 border-b-4 border-red-500' : 'text-gray-500'}><li className='pb-3 hover:text-red-400 mx-2'>Book a Session</li></NavLink>
          <NavLink to={'Manage_Booking'} className={({ isActive }) => isActive ? ' text-red-500 border-b-4 border-red-500' : 'text-gray-500'}><li className='pb-3 hover:text-red-400 mx-2'>Manage Bookings</li></NavLink>
          <NavLink to={'Previous_Booking'} className={({ isActive }) => isActive ? ' text-red-500 border-b-4 border-red-500' : 'text-gray-500'}><li className='pb-3 hover:text-red-400 mx-2'>Previous Bookings</li></NavLink>
        </ul>
        <div className='bg-blue-300 text-blue-600 rounded-md py-1 px-2 w-24 md:mr-24'>Guidelines</div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className='mt-10'>

      </div>
    </div>
  )
}


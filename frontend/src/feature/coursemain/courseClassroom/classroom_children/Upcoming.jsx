import React from 'react'
import { SlCalender } from "react-icons/sl";
export default function upcoming() {
  return (
    <div className='bg-gray-100 p-3 h-[80vh]'>
        <div className='text-red-500 mt-4 bg-white w-[150px] text-center py-2 font-semibold'>Next 7 days <SlCalender className='inline'/></div>
        <p className='text-gray-500 text-center mt-10'>No classes are scheduled for today.</p>
        <p className='text-gray-500 text-center'>Please check upcoming classes by changing the time period from the filter above</p>
    </div>
  )
}

import React from 'react'

export default function Manage_Booking() {
  return (
    <div>
        <div className='bg-gray-100 h-[700px] flex py-20'>
        <div className='flex justify-center items-center h-full w-4/5'>
          <div className='text-center'>
            <img src="https://grow.almabetter.com/static/media/desertImg.0be9f5b6.png" alt="" className='w-32 mx-auto' />
            <h3 className='my-4 font-bold '>No Booking Found</h3>
            <button style={{ background: "rgba(19,79,92,1)" }} className='text-white px-3 py-2 rounded-md'>Create another Booking</button>
          </div>
        </div>
        <div className='w-1/5  mr-10'>
          <div className='border-2 border-gray-400 rounded-md'>
            <div className='bg-gray-300 text-xl px-3 py-2 '>FILTER</div>
            <div className='bg-white border-1 border-gray-400 text-lg px-3 py-1 '>Status</div>
            <div className='bg-white border-1 border-gray-400 text-lg px-3 py-1 '>Session Type</div>
          </div>
          <div className='border-2 border-gray-400 rounded-md mt-10'>
            <div className='bg-gray-300 text-xl px-3 py-2 '>SORT</div>
            <div className='bg-white text-lg px-3 py-1 '>Sort By Dates</div>
            <div className='bg-white text-lg px-3 py-1 '><input type="checkbox" name="" id="" /> Latest First</div>
            <div className='bg-white text-lg px-3 py-1'><input type="checkbox" name="" id="" /> Earliest First</div>
          </div>
        </div>
      </div>
    </div>
  )
}

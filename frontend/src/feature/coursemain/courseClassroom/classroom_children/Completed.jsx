import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";

export default function Completed() {
    return (
        <div>
            <div className='text-red-500 mt-4 bg-white w-[150px] text-center py-2 font-semibold flex justify-between p-2'>All <SlCalender className='inline' /></div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <h1 className='inline text-2xl font-semibold'>Time Series Analysis II</h1><span className='p-2 bg-red-100 text-red-500 mx-4 rounded-md'>Live class</span>
                <p className='text-gray-500'>Module: Machine Learning</p>
                <p className='text-gray-400 text-sm mt-10 mb-2'>Session scheduled at</p>
                <div className='flex gap-8 pb-4 border-b-2 border-gray-100'>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'>Date: 25th Jan, 8:00 PM - 10:00 PM</p>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'><span class="bg-blue-200 p-2 rounded-full mr-4" style={{ width: "2.5rem", height: "2.5rem" }}><span className="uppercase font-bold text-blue-500" style={{ fontSize: "1.25rem" }}>A</span></span>Arnav Kundu</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-gray-500'><FaRegClock className='inline'/> Duration: 120mins</p>
                    <button className='px-4 py-2 bg-white text-red-500 border-2 border-red-500'>View Recording</button>
                </div>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <h1 className='inline text-2xl font-semibold'>Time Series Analysis I</h1><span className='p-2 bg-red-100 text-red-500 mx-4 rounded-md'>Live class</span>
                <p className='text-gray-500'>Module: Machine Learning</p>
                <p className='text-gray-400 text-sm mt-10 mb-2'>Session scheduled at</p>
                <div className='flex gap-8 pb-4 border-b-2 border-gray-100'>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'>Date: 24th Jan, 8:00 PM - 10:00 PM</p>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'><span class="bg-blue-200 p-2 rounded-full mr-4" style={{ width: "2.5rem", height: "2.5rem" }}><span className="uppercase font-bold text-blue-500" style={{ fontSize: "1.25rem" }}>P</span></span>Pinak kapalay</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-gray-500'><FaRegClock className='inline'/> Duration: 120mins</p>
                    <button className='px-4 py-2 bg-white text-red-500 border-2 border-red-500'>View Recording</button>
                </div>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <h1 className='inline text-2xl font-semibold'>Recommender Systems - Content Based Filtering</h1><span className='p-2 bg-red-100 text-red-500 mx-4 rounded-md'>Live class</span>
                <p className='text-gray-500'>Module: Machine Learning</p>
                <p className='text-gray-400 text-sm mt-10 mb-2'>Session scheduled at</p>
                <div className='flex gap-8 pb-4 border-b-2 border-gray-100'>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'>Date: 23th Jan, 8:00 PM - 10:00 PM</p>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'><span class="bg-blue-200 p-2 rounded-full mr-4" style={{ width: "2.5rem", height: "2.5rem" }}><span className="uppercase font-bold text-blue-500" style={{ fontSize: "1.25rem" }}>A</span></span>Arnav Kundu</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-gray-500'><FaRegClock className='inline'/> Duration: 120mins</p>
                    <button className='px-4 py-2 bg-white text-red-500 border-2 border-red-500'>View Recording</button>
                </div>
            </div>
            <div className='bg-white p-4 rounded-md mt-3'>
                <h1 className='inline text-2xl font-semibold'>Recommender Systems - Collaborative Filtering</h1><span className='p-2 bg-red-100 text-red-500 mx-4 rounded-md'>Live class</span>
                <p className='text-gray-500'>Module: Machine Learning</p>
                <p className='text-gray-400 text-sm mt-10 mb-2'>Session scheduled at</p>
                <div className='flex gap-8 pb-4 border-b-2 border-gray-100'>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'>Date: 22th Jan, 8:00 PM - 10:00 PM</p>
                    <p className='text-center text-black bg-gray-100 md:w-1/3 py-2 text-lg'><span class="bg-blue-200 p-2 rounded-full mr-4" style={{ width: "2.5rem", height: "2.5rem" }}><span className="uppercase font-bold text-blue-500" style={{ fontSize: "1.25rem" }}>S</span></span>Sankalp Jain</p>
                </div>
                <div className='flex justify-between mt-3'>
                    <p className='text-gray-500'><FaRegClock className='inline'/> Duration: 120mins</p>
                    <button className='px-4 py-2 bg-white text-red-500 border-2 border-red-500'>View Recording</button>
                </div>
            </div>
        </div>
    )
}

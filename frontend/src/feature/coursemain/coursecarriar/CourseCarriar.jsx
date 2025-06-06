import React from 'react'
import progressbar from '../Images/progressbar.png'
import { FaChevronDown } from "react-icons/fa";
export default function CourseCarriar() {
    return (
        <>
        <div className='bg-gray-100 h-[80vh] p-3'>
            <div className='flex bg-white p-4 rounded-md'>
                <div className='w-4/5 p-4'>
                    <h1 className='text-2xl font-semibold mb-4'>AlmaX Career Track</h1>
                    <p >AlmaX Placement Program is an intensive 12-week program where we work hard with you relentlessly to make you industry and job ready while parallelly working on your core technical skills.</p>

                </div>
                <div className='w-1/5 p-4 ml-3'>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/011/431/474/small_2x/businessmen-climb-growth-column-graph-career-and-personality-development-careerbuilder-career-planning-progress-concept-on-white-background-flat-modern-illustration-vector.jpg" alt="" className='w-full h-full' />
                </div>
            </div>
            <h1 className='text-xl font-semibold my-4'>AlmaX Selection</h1>
            <div className='bg-white flex p-4 rounded-md'>
                <div className='px-4 py-1 bg-blue-200 rounded-sm max-h-9'>Step 1</div>
                <div className='w-4/5 mx-4'>
                    <p className='text-gray-500'>Almax Eligibility Criteria</p>
                    <img src={progressbar} alt="" className='w-full ' />
                </div>
                <FaChevronDown className='text-2xl mt-3 ml-8' />
            </div>
            <div className='bg-white flex p-4 pb-10 rounded-md my-4'>
                <div className='px-4 py-1 bg-blue-200 rounded-sm'>Step 2</div>
                <div className='w-4/5 mx-4 flex justify-between'>
                    <p className='text-gray-500'>AlmaBetter Comprehensive Assesment Test (AB-CAT)</p>
                    <p className='p-1 bg-red-100 text-red-500 text-sm'>Expired on 05 Feb 2023</p>
                </div>
                <FaChevronDown className='text-2xl  ml-8' />
            </div>
           
        </div>

       <div className='mt-32'>
      
       </div>
       
       
        </>
    )
}

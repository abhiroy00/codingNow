import React from 'react'
import { FcFilledFilter } from 'react-icons/fc';
import { FaGoogle, FaMicrosoft, FaAmazon, FaApple } from 'react-icons/fa';
import { BsMeta } from 'react-icons/bs';
import { RiNetflixFill } from 'react-icons/ri';
import { FaSearch } from 'react-icons/fa';
import mentor from '../assets/Mentors-cuate.svg'
import { GiLightningHelix } from 'react-icons/gi';
import { IoIosChatbubbles } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';
import { RiBuilding2Line } from 'react-icons/ri';
import { GoGoal } from 'react-icons/go';
import { GiStarShuriken } from 'react-icons/gi';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { FaRegAddressCard } from 'react-icons/fa';
import { PiUploadSimpleDuotone } from 'react-icons/pi';

const Mentor = () => {
  return (
    <div className='flex'>
      <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} className=' min-h-[100vh] w-full'>
        <div className='w-full lg:w-[75%] p-5 h-[500px]'>
          <h1 className='font-bold text-2xl'>Our Mentors</h1>
          <p style={{ color: 'var(--p-color)' }}>Discover the latest additions to our Mentors community! Meet the fresh faces ready to guide and inspire you on your journey.</p>
          <div className="sticky top-[72px] z-30 w-full my-4">
            <div className="flex w-full flex-col items-center gap-4 sm:flex-row">
              <form id="search" className="border w-[100%] h-10 rounded-full cursor-text" style={{ backgroundColor: 'var(--bg-color)' }}>
                <FaSearch className="relative top-3 left-3" />
                <input className="relative bottom-2.5 left-10 w-[80%]" id="search" placeholder="Search here..." type="text" />
              </form>
            </div>
          </div>
          <div className='block xl:flex w-full h-auto p-2.5 rounded-lg my-10' style={{ backgroundColor: 'var(--main-bg-color)' }}>
            <div className='xl:w-[70%] w-full h-full'>
              <div className='flex p-2 gap-2'>
                <div className='w-[20%]'>
                <img src={mentor} alt="" className='w-[50px] h-[50px] md:w-[100px] md:h-[100px] ratio mx-auto rounded-full border'/>
                <p className='text-xs text-yellow-500 text-center mt-1'><FaStar className='inline'/> rating</p>
                <p className='text-xs text-green-500 text-center mt-1'><IoIosChatbubbles className='inline'/>Sessions</p>
                </div>
                <div>
                  <h1 className='text-xl font-semibold'>Mentor Name</h1>
                  <p className='text-sm text-blue-500'>mentor designation</p>
                  <p className='text-sm '>mentor experience</p>
                  <p className='text-sm '><GiLightningHelix className='text-yellow-500 inline'/>transitioned to FAANG</p>
                  <div className='flex mt-2 gap-2'>
                    <span className='text-sm md:text-[15px] md:px-1 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}><RiBuilding2Line className='inline'/>Microsoft</span>
                    <span className='text-sm md:text-[15px] md:px-1 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}><RiBuilding2Line className='inline'/>Microsoft</span>
                    <span className='text-sm md:text-[15px] md:px-1 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}><RiBuilding2Line className='inline'/>Microsoft</span>
                  </div>
                </div>
              </div>
              <div className='border-y-1  border-dashed py-2'>
                <p className='text-xs' style={{color: 'var(--p-color)'}}>I am a Senior Software Engineer at Microsoft with over 17+ years of experience in Software Development, I am currently responsible for designing and developing solutions, building proofs of concept on new frameworks and technologies, conducting performance analysis, and mentoring team members in agile methodologies.</p>
                <div className='flex mt-2 gap-3'>
                    <span className=' p-2 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}>Python</span>
                    <span className=' p-2 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}>Python</span>
                    <span className=' p-2 rounded-full' style={{backgroundColor: 'var(--card-bg-color)'}}>Python</span>
                   
                  </div>
              </div>
              <p className='text-sm font-semibold'><GoGoal className='inline'/> Core Domains: Basic Programming, Programming Fundamentals, Data / Big Data Engineer</p>
            </div>
            <div className='xl:w-[30%] h-full border-l-1 border-dashed p-2 '>
              <h4 className='font-semibold '><GiStarShuriken className='inline'/>what I Offer!</h4>
              <p className='text-sm my-2' style={{color: 'var(--p-color)'}}><MdOutlineWifiCalling3 className='inline text-yellow-500'/> Audio/Video Sessions</p>
              <p className='text-sm my-2' style={{color: 'var(--p-color)'}}><GoGoal className='inline text-red-500'/> Goal Setting</p>
              <p className='text-sm my-2' style={{color: 'var(--p-color)'}}><FaRegAddressCard className='inline text-green-500'/> Resume Reviews</p>
              <button className='w-full border rounded-md h-10 my-2'><GiStarShuriken className='inline'/> View Profile</button>
              <div className='font-bold text-center w-full bg-blue-500 h-15 p-2 rounded-md'>
                Book 1:1 Session Now!
                <p className='text-sm w-[100%] rounded-b-md mx-auto' style={{ backgroundColor: 'var(--main-bg-color)' }}>Starts @ 499</p>
              </div>
              <div className='border-t-1 border-dashed mt-2 text-center font-semibold'>
              <PiUploadSimpleDuotone className='inline'/>No cost EMI available.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block w-[20%] h-full fixed right-0">
        <div
          className="no-scrollbar sticky top-[4.5rem] h-[calc(100vh-9rem)] overflow-y-auto border-l-[1px] border-grey-200 p-[16px]"
          style={{
            backgroundColor: 'var(--main-bg-color)',
            color: 'var(--text-color)',
          }}
        >
          <div className="flex flex-col gap-[12px]">
            <div className="flex gap-[8px] border-b-[1px] border-dashed border-grey-200 pb-[12px] dark:border-grey-800">
              <FcFilledFilter />
              <p className="text-sm font-semibold text-grey-800 dark:text-grey-200">Filter by</p>
            </div>
            {/* Add more filter sections here */}
            <div className="mt-4">
              <h3 className="font-bold text-lg">Popular Filters</h3>
              <ul className="mt-2 space-y-2">
                <li className="block cursor-pointer">
                  Domain
                  <input type="text" placeholder='search for Domain' className='block border w-full h-10 rounded-b-md' style={{ backgroundColor: 'var(--card-bg-color)' }} />
                  <div className='grid grid-cols-2 gap-2'>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Fullstack-Developer</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>App-Development</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Product-Manager</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Data-Engineer</div>
                  </div>
                </li>
                <li className="block cursor-pointer">
                  Company
                  <input type="text" placeholder='search for company' className='block border w-full h-10 rounded-b-md' style={{ backgroundColor: 'var(--card-bg-color)' }} />
                  <div className='grid grid-cols-2 gap-2'>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><FaGoogle className='inline' /> Google</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><FaMicrosoft className='inline' /> Microsoft</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><FaAmazon className='inline' /> Amazon</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><BsMeta className='inline' /> Meta</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><FaApple className='inline' /> Apple</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}><RiNetflixFill className='inline' /> Netfix</div>
                  </div>
                </li>
                <li className="block cursor-pointer">
                  Skills
                  <input type="text" placeholder='Enter your skills' className='block border w-full h-10 rounded-b-md' style={{ backgroundColor: 'var(--card-bg-color)' }} />
                  <div className='grid grid-cols-2 gap-2'>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Algorithms</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Data structures</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>Python</div>
                    <div className='px-2 py-1 mt-6 xl:rounded-full' style={{ backgroundColor: 'var(--card-bg-color)' }}>DBMS</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentor
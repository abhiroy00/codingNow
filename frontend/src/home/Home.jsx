import React from 'react'
import community from '../assets/community.svg'
import rafiki from '../assets/rafiki.svg'
import mentor from '../assets/Mentors-cuate.svg'
import feed from '../assets/cuate.svg'
import roadmap from '../assets/big-card-2.svg'
import problem from '../assets/big-card-1.svg'
import { FaArrowRight } from 'react-icons/fa'
import { BsStars } from "react-icons/bs";

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='min-h-[100vh] md:flex relative xl:px-50 z-[-20] max-w-[100vw]' style={{
        backgroundColor: 'var(--bg-color)',
        color: 'var(--text-color)',
      }}>
        <div className="absolute -left-40 -top-40 h-96 w-96 rotate-180 rounded-full bg-blue-700 opacity-40 blur-[120px] z-[-10]"></div>
        <div className="absolute -bottom-40 -right-40 z-[-100] h-96 w-96 rounded-full bg-green-500 opacity-40 blur-[120px]"></div>
        <div className='w-[100vw]  md:w-[50vw] h-auto min-h-[100vh] md:p-10 p-5 text-center md:text-left'>
          <h1 className='text-3xl md:text-6xl font-bold'>Your one step solution for <br /><span className='text-blue-500'>skill-based learning</span></h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 w-11/12 md:-mt-4 md:w-1/2 mx-auto md:mx-0"><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path></svg>
          <div className="mx-auto grid w-fit grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full p-3 bg-main-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#467BFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.135 11.437 3.33 4.629c-.437-.783-.656-1.175-.619-1.495a1 1 0 0 1 .41-.697c.26-.189.71-.189 1.606-.189h2.235c.333 0 .5 0 .65.048a1 1 0 0 1 .357.205c.118.104.202.248.372.535L12 9.248l3.659-6.212c.169-.287.254-.43.37-.535a1 1 0 0 1 .359-.205c.15-.048.316-.048.65-.048h2.234c.897 0 1.345 0 1.607.189a1 1 0 0 1 .41.697c.036.32-.183.712-.62 1.495l-3.805 6.808M10.5 14.248l1.5-1v5m-1.25 0h2.5m3.346-7.096a6.5 6.5 0 1 1-9.192 9.192 6.5 6.5 0 0 1 9.192-9.192"></path></svg>
              </div><p className="text-base font-medium text-grey-700 dark:text-grey-400">Connect with peers for jobs, projects and much more</p></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full p-3 bg-success-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#0F6D39" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.124 15.093 4.878 7.155m-7.121-7.155-4.879 7.155m8-8.8a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm3.149-8.668L5.367 7.938c-.27.072-.406.109-.495.189a.5.5 0 0 0-.155.268c-.025.117.011.252.084.523l.88 3.284c.072.27.109.406.189.495a.5.5 0 0 0 .268.154c.117.025.252-.011.523-.084L18.445 9.61l-1.294-4.83Zm4.644 4.968c-1.082.29-1.623.434-2.093.335a2 2 0 0 1-1.07-.618c-.322-.357-.466-.898-.756-1.98l-.156-.58c-.29-1.082-.435-1.623-.335-2.092a2 2 0 0 1 .618-1.07c.357-.322.898-.467 1.98-.757.27-.072.406-.109.523-.084a.5.5 0 0 1 .268.155c.08.09.116.224.189.495l1.397 5.216c.073.27.11.406.084.523a.5.5 0 0 1-.154.268c-.09.08-.225.116-.495.189m-18.29 2.83 1.351-.362c.27-.073.406-.109.495-.19a.5.5 0 0 0 .155-.267c.025-.117-.011-.253-.084-.523L5.06 9.884c-.073-.27-.109-.406-.19-.495a.5.5 0 0 0-.267-.155c-.117-.025-.253.011-.523.084l-1.352.362c-.27.073-.406.109-.495.19a.5.5 0 0 0-.155.267c-.025.117.011.253.084.523l.362 1.352c.073.27.109.406.19.495a.5.5 0 0 0 .267.155c.117.025.253-.012.523-.084Z"></path></svg>
              </div><p className="text-base font-medium text-grey-700 dark:text-grey-400">Build connections that help you grow!</p></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full p-3 bg-accent-1-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#FFAF3A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 5.248 3-3m0 0 3 3m-3-3v6m3 4v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 19.968 2 19.128 2 17.448v-10.4c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311c.642-.327 1.482-.327 3.162-.327H12M2.146 20.174A4.002 4.002 0 0 1 6 17.248h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78m-4-12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path></svg>
              </div><p className="text-base font-medium text-grey-700 dark:text-grey-400">Network with peers for projects, interview preparation</p></div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full p-3 bg-grey-200"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" fill="none"><path stroke="#334155" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 20.248H5a2 2 0 0 1-2-2v-14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5m-5.5-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0h.021L8.83 22.44 6 19.612l3.02-3.02M12 19.249l3.193 3.193 2.828-2.829-3.02-3.02M9 6.249h6m-8 3.5h10"></path></svg>
              </div><p className="text-base font-medium text-grey-700 dark:text-grey-400">Expert advice a one click away for jobs, mock interviews</p></div>
          </div>
          <button className='my-10 py-2 px-4 bg-blue-500 text-white font-bold rounded-full'>Join Now</button>
        </div>
        <div className="flex flex-col gap-6 w-[80%] mx-auto lg:w-5/12 text-black md:p-10 p-5">
          <div className="grid grid-cols-2 gap-6">
            <div className="grid grid-rows-2 gap-6">
              <a
                className="flex justify-between overflow-hidden rounded-xl p-4 duration-300 h md:p-6 hover:-translate-y-1 bg-green-50"
                href="/feed"
                aria-label="Community"
              >
                <div className="flex flex-col text-grey-800">
                  <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                    Community
                  </p>
                  <p className="text-xs md:text-sm">
                    <span>Connect with</span>
                    <br />
                    <span>1 Lakh+ peers</span>
                  </p>
                </div>
                <img src={community} alt="" className='w-[90%] mx-auto mb-4' />
              </a>
              <a
                className="flex justify-between overflow-hidden rounded-xl p-4 duration-300 hover:-translate-y-1 md:p-6 bg-[#FFCCF7]"
                href="/ask/step2?commType=one-time"
                aria-label="Ask Anything"
              >
                <div className="flex flex-col text-grey-800">
                  <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                    Ask Anything
                  </p>
                  <p className="text-xs md:text-sm">
                    & we find you a mentor!
                  </p>
                </div>
                <img src={rafiki} alt="" className='w-[90%] mx-auto mb-4' />
              </a>
            </div>
            <a
              className="flex flex-col justify-between gap-2 rounded-xl duration-300 hover:-translate-y-1 bg-amber-50"
              href="/propeers"
              aria-label="Mentors"
            >
              <div className="flex flex-col px-4 pt-4 text-grey-800 md:px-6 md:pt-6">
                <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                  Mentors
                </p>
                <p className="text-xs md:text-sm">
                  300+ Mentors, 5000+ Queries Resolved
                </p>
              </div>
              <img src={mentor} alt="" className='w-[90%] mx-auto mb-4' />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <a
              className="flex flex-col justify-between gap-2 rounded-xl duration-300 hover:-translate-y-1 bg-red-100"
              href="/roadmaps"
              aria-label="Roadmaps"
            >
              <div className="flex flex-col px-4 pt-4 text-grey-800 md:px-6 md:pt-6">
                <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                  Roadmaps
                </p>
                <p className="text-xs md:text-sm">Solve skill-based roadmaps</p>
              </div>
              <img src={roadmap} alt="" className='w-[90%] mx-auto mb-4' />
            </a>
            <div className="grid grid-rows-2 gap-6">
              <a
                className="flex justify-between overflow-hidden rounded-xl p-4 duration-300 hover:-translate-y-1 md:p-6 bg-gray-300"
                href="/potds"
                aria-label="Problems"
              >
                <div className="flex flex-col text-grey-800">
                  <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                    Problems
                  </p>
                  <p className="text-xs md:text-sm">Daily Problem Challenges</p>
                </div>
                <img src={problem} alt="" className='w-[90%] mx-auto mb-4' />
              </a>
              <a className="flex justify-between overflow-hidden rounded-xl p-4 duration-300 hover:-translate-y-1 md:p-6 bg-gray-400"
                href="/feed"
                aria-label="Feed"
              >
                <div className="flex flex-col text-grey-800">
                  <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                    Feed
                  </p>
                  <p className="text-xs md:text-sm">Skill-Based Posts</p>
                </div>
                <img src={feed} alt="" className='w-[90%] mx-auto mb-4' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[100vh] p-5 md:p-10 text-center'
        style={{
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
        }}
      >
        <style>
          {`
          @keyframes slide {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-slide {
            display: flex;
            animation: slide 10s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}
        </style>
        <div
          className="min-h-[100vh] p-5 md:p-10 text-center"
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
          }}
        >
          <h1 className="text-2xl md:text-4xl font-bold mt-5">
            Meet Our <span className="text-blue-500">Inspirational Mentors</span>
          </h1>
          <p style={{ color: 'var(--p-color)' }}>
            Discover the Mentors who are ready to guide, inspire, and empower you.
            Get to know our accomplished experts and find the perfect Mentors to
            help you reach your goals.
          </p>
          <div className="overflow-hidden relative">
            <div className="animate-slide">
              {/* Card 1 */}
              <div
                style={{ backgroundColor: 'var(--card-bg-color)' }}
                className="w-[300px] h-auto p-5 mx-5 rounded-lg mt-10"
              >
                <div
                  style={{
                    backgroundImage: 'var(--card-bg-banner)',
                    backgroundPosition: 'center',
                  }}
                  className="relative top-[-38px] left-[-20px] rounded-t-lg max-h-[200px] w-[300px]"
                >
                  <img
                    src={mentor}
                    alt=""
                    className="w-[80px] h-[80px] rounded-full mx-auto my-5 border-1 relative top-4"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">John Doe</h1>
                  <p>Software Engineer</p>
                </div>
                <p className="text-blue-500">designation</p>
                <p style={{ color: 'var(--p-color)' }}>experience</p>
                <button className="flex mx-auto border-2 rounded-full px-3 py-1 mt-2">
                  View Profile <FaArrowRight className="mt-1.5 ml-2" />
                </button>
              </div>

              {/* Repeat the same structure for other cards */}
              <div
                style={{ backgroundColor: 'var(--card-bg-color)' }}
                className="w-[300px] h-auto p-5 mx-5 rounded-lg mt-10"
              >
                <div
                  style={{
                    backgroundImage: 'var(--card-bg-banner)',
                    backgroundPosition: 'center',
                  }}
                  className="relative top-[-38px] left-[-20px] rounded-t-lg max-h-[200px] w-[300px]"
                >
                  <img
                    src={mentor}
                    alt=""
                    className="w-[80px] h-[80px] rounded-full mx-auto my-5 border-1 relative top-4"
                  />
                </div>
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">Jane Smith</h1>
                  <p>Data Scientist</p>
                </div>
                <p className="text-blue-500">designation</p>
                <p style={{ color: 'var(--p-color)' }}>experience</p>
                <button className="flex mx-auto border-2 rounded-full px-3 py-1 mt-2">
                  View Profile <FaArrowRight className="mt-1.5 ml-2" />
                </button>
              </div>
            </div>
            <button className='flex mx-auto px-4 py-2 bg-blue-500 rounded-md font-bold text-white my-15'>Explore all mentors <FaArrowRight className='relative top-1.5 left-2' /></button>
          </div>
          <div className='w-[100%] h-auto p-5 md:p-10 text-center'>
            <h1 className='mx-auto md:text-4xl font-bold text-2xl'>Find your Mentor with AI <BsStars className='inline text-blue-500' /></h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 hidden scale-90 md:block mx-auto"><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path></svg>
            <div className="mx-auto flex w-full flex-col gap-6 md:w-10/12">
              <div id="search-box" className="flex w-full flex-row items-center justify-between gap-2 rounded-full border border-grey-200 bg-grey-100 p-3 pl-6 ">
                <input
                  placeholder='Try "I am looking for a data engineer from Amazon"'
                  className="w-full bg-transparent text-grey-900 outline-none"
                  type="text"
                  
                />
                <button type="submit" className="flex items-center justify-center px-4 py-2 gap-x-2 flex-row gap-1 rounded-full bg-main-06  font-semibold text-grey-50 false"><span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" className="stroke-white stroke-2"><path d="m19.25 19.25-3.988-3.988M10.083 5.5a4.583 4.583 0 0 1 4.584 4.583m2.75 0a7.333 7.333 0 1 1-14.667 0 7.333 7.333 0 0 1 14.667 0"></path></svg></span>
                  <span><span>Search</span></span>
                </button>
              </div>
              <div className="mx-auto grid w-full gap-6 md:w-11/12 md:grid-cols-2">
                <div className="flex cursor-pointer flex-row items-center gap-3 rounded-md border border-grey-300 bg-grey-200 p-4 dark:border-grey-800 dark:bg-grey-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 30 30"><path stroke="#F5BE58" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2.5v1.25M3.75 15H2.5m4.375-8.125-.75-.75m17 .75.75-.75M27.5 15h-1.25M12.5 16.875h5m-2.5 0v6.25m4.375-2.033a7.5 7.5 0 1 0-8.75 0V23.5c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h.75c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-2.408"></path></svg>
                  <span>Try "I need some help learning DSA"</span>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 rounded-md border border-grey-300 bg-grey-200 p-4 dark:border-grey-800 dark:bg-grey-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 30 30"><path stroke="#F5BE58" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2.5v1.25M3.75 15H2.5m4.375-8.125-.75-.75m17 .75.75-.75M27.5 15h-1.25M12.5 16.875h5m-2.5 0v6.25m4.375-2.033a7.5 7.5 0 1 0-8.75 0V23.5c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h.75c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-2.408"></path></svg>
                  <span>Try "Need advice on microservices."</span>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 rounded-md border border-grey-300 bg-grey-200 p-4 dark:border-grey-800 dark:bg-grey-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 30 30"><path stroke="#F5BE58" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2.5v1.25M3.75 15H2.5m4.375-8.125-.75-.75m17 .75.75-.75M27.5 15h-1.25M12.5 16.875h5m-2.5 0v6.25m4.375-2.033a7.5 7.5 0 1 0-8.75 0V23.5c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h.75c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-2.408"></path></svg>
                  <span>Try "Help with DSA."</span>
                </div>
                <div className="flex cursor-pointer flex-row items-center gap-3 rounded-md border border-grey-300 bg-grey-200 p-4 dark:border-grey-800 dark:bg-grey-900"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 30 30"><path stroke="#F5BE58" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2.5v1.25M3.75 15H2.5m4.375-8.125-.75-.75m17 .75.75-.75M27.5 15h-1.25M12.5 16.875h5m-2.5 0v6.25m4.375-2.033a7.5 7.5 0 1 0-8.75 0V23.5c0 1.4 0 2.1.273 2.635a2.5 2.5 0 0 0 1.092 1.092c.535.273 1.235.273 2.635.273h.75c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092c.273-.535.273-1.235.273-2.635v-2.408"></path></svg>
                  <span>Try "Need Docker/Kubernetes help."</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
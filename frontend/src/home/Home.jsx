import React from 'react'
import community from '../assets/community.svg'
import rafiki from '../assets/rafiki.svg'
import mentor from '../assets/Mentors-cuate.svg'
import feed from '../assets/cuate.svg'
import roadmap from '../assets/big-card-2.svg'
import problem from '../assets/big-card-1.svg'
import { FaArrowRight } from 'react-icons/fa'
import { BsStars } from "react-icons/bs"
import jobref from '../assets/job-referrals.svg'
import goalset from '../assets/goalseting.svg'
import audiovideo from '../assets/audiovedio.svg'
import unofficial from '../assets/unofficial.svg'
import resumereview from '../assets/resumereview.svg'
import mockinter from '../assets/mockinter.svg'
import unlimitedchat from '../assets/unlimitedchat.svg'
import followup from '../assets/followup.svg'
import { LuPuzzle } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { FaFacebookSquare } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutubeSquare } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'
import { FaPlus } from 'react-icons/fa'
import { useState } from 'react'


const Home = () => {
  const [openItem, setOpenItem] = useState(null);
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };
  return (
    <div className='overflow-hidden'>
      <div className='min-h-[100vh] md:flex relative xl:px-20 z-[-20] max-w-[100vw]' style={{
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
        <div className="flex flex-col gap-6 w-[90%] mx-auto lg:w-5/12 text-black md:p-10 py-5">
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
                <img
                  src={community}
                  alt=""
                  className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
                />
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
                  <p className="text-xs md:text-sm">& we find you a mentor!</p>
                </div>
                <img
                  src={rafiki}
                  alt=""
                  className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
                />
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
              <img
                src={mentor}
                alt=""
                className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
              />
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
              <img
                src={roadmap}
                alt=""
                className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
              />
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
                <img
                  src={problem}
                  alt=""
                  className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
                />
              </a>
              <a
                className="flex justify-between overflow-hidden rounded-xl p-4 duration-300 hover:-translate-y-1 md:p-6 bg-gray-400"
                href="/feed"
                aria-label="Feed"
              >
                <div className="flex flex-col text-grey-800">
                  <p className="mb-1 text-sm font-semibold md:text-xl md:font-bold">
                    Feed
                  </p>
                  <p className="text-xs md:text-sm">Skill-Based Posts</p>
                </div>
                <img
                  src={feed}
                  alt=""
                  className="w-full h-auto object-contain max-h-[100px] md:max-h-[150px]"
                />
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
      @keyframes horizontal-scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }

      .animate-slide {
        display: flex;
        animation: horizontal-scroll 10s linear infinite;
      }
      .animate-slide-reverse {
        display: flex;
        animation: horizontal-scroll 10s linear infinite reverse;
      }
      .animate-slide-reverse:hover {
        animation-play-state: paused;
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
            <div className="flex space-x-5 overflow-x-scroll">
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

              {/* Repeat similar structure for other cards */}
            </div>
          </div>

          <div className='p-5 md:p-10 text-center lg:w-[80%] mx-auto'>
            <h1 className='md:text-4xl text-2xl font-semibold'>Get your personalized career guidance - <span className='text-blue-500'>Our mentorship offerings</span></h1>
            <p style={{ color: 'var(--p-color)' }}>Build meaningful connections and get expert advice and Insights from mentors. Book exclusive sessions with mentors to resolve your queries on a 1-1 Basis. Get access to skill-based webinars and group mentorship boot camps with industry experts</p>
            <div className='lg:w-[75%] mx-auto my-10 md:grid grid-cols-2 gap-6'>
              <div className="flex w-full flex-col items-center rounded-xl border my-2 md:flex-col-reverse ">
                <div className="flex flex-col space-y-2 p-6 text-left">
                  <h2 className="text-xl font-medium">Job Referrals 🌐</h2>
                  <p className="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Long-Term Mentorship also offers exclusive job referrals. Elevate your journey with personalized mentorship and direct access to exciting career opportunities 🌟</p>
                </div>
                <img alt="Job Referrals 🌐" loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={jobref} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border  my-2">
                <div className="flex flex-col space-y-2 p-6 h-3px">
                  <h2 className="text-xl font-medium">Personalized Goal Setting 🎯 🚀 </h2>
                  <p class="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Collaborate with your ProPeer to define and set personalized career goals. Receive guidance on creating a roadmap for professional growth, skill acquisition, and achieving milestones 🎯</p>
                </div>
                <img alt="Personalized Goal Setting 🎯 🚀 " loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={goalset} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border my-2 md:flex-col-reverse ">
                <div className="flex flex-col space-y-2 p-6 text-left">
                  <h2 className="text-xl font-medium">Audio/Video Session with ProPeer 🎤 🎥</h2>
                  <p className="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Elevate your mentorship experience with personalized audio or video sessions, fostering in-depth discussions on career strategies, skill development, and goal achievement. 🎤🎥</p>
                </div>
                <img alt="Job Referrals 🌐" loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={audiovideo} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border  my-2">
                <div className="flex flex-col space-y-2 p-6 h-3px">
                  <h2 className="text-xl font-medium">Unofficial Talk Sessions 🗨️ ☕</h2>
                  <p class="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Enjoy informal discussions with your mentor, gaining insights into their experiences, industry knowledge, and valuable tips and fostering a more holistic learning experience. 🗨️</p>
                </div>
                <img alt="Personalized Goal Setting 🎯 🚀 " loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={unofficial} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border my-2 md:flex-col-reverse ">
                <div className="flex flex-col space-y-2 p-6 text-left">
                  <h2 className="text-xl font-medium">Resume Reviews 📄 ✨</h2>
                  <p className="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Receive comprehensive feedback on your resume from your ProPeer mentor, ensuring that your professional document effectively showcases your skills and experiences, helping you stand out in the job market. 📄</p>
                </div>
                <img alt="Job Referrals 🌐" loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={resumereview} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border  my-2">
                <div className="flex flex-col space-y-2 p-6 h-3px">
                  <h2 className="text-xl font-medium">Mock Interviews 🎙️ 🔍 </h2>
                  <p class="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Boost Your Interview Confidence: Experience real-world scenarios with Mock Interviews, led by mentors, to enhance your skills for long-term growth.</p>
                </div>
                <img alt="Personalized Goal Setting 🎯 🚀 " loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={mockinter} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border my-2 md:flex-col-reverse ">
                <div className="flex flex-col space-y-2 p-6 text-left">
                  <h2 className="text-xl font-medium">Unlimited Chat with ProPeer 💬</h2>
                  <p className="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Engage in real-time text conversations with your ProPeer mentor to discuss challenges, seek advice, and receive timely guidance tailored to your professional journey 💬</p>
                </div>
                <img alt="Job Referrals 🌐" loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={unlimitedchat} />
              </div>
              <div className="flex w-full flex-col items-center rounded-xl border  my-2">
                <div className="flex flex-col space-y-2 p-6 h-3px">
                  <h2 className="text-xl font-medium">Regular Follow-Ups 📅 🤓</h2>
                  <p class="text-xs font-normal md:text-sm" style={{ color: 'var(--p-color)' }}>Engage in real-time text conversations with your ProPeer mentor to discuss challenges, seek advice, and receive timely guidance tailored to your professional journey 💬</p>
                </div>
                <img alt="Personalized Goal Setting 🎯 🚀 " loading="lazy" width="225" height="200" decoding="async" data-nimg="1" className="object-fit h-full w-full self-start" src={followup} />
              </div>

            </div>
          </div>
          <div className='lg:w-[80%] mx-auto my-10 '>
            <h1 className='text-left bg-gradient-to-r from-amber-200 to-amber-800 bg-clip-text text-transparent md:text-3xl font-bold text-2xl'>Resume Reviews</h1>
            <div className='flex flex-row overflow-x-scroll'>

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
            </div>
          </div>
          <div className='lg:w-[80%] mx-auto my-10'>
            <h1 className='text-left bg-gradient-to-r from-amber-200 to-amber-800 bg-clip-text text-transparent md:text-3xl font-bold text-2xl'>Mock Interview</h1>
            <div className='flex flex-row overflow-x-scroll'>

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
            </div>
          </div>
          <div className=' md:p-10 text-center lg:w-[80%] mx-auto'>
            <h1 className='md:text-4xl text-2xl font-semibold lg:w-[70%] mx-auto'>Structured Interview Preparation with <span className='text-blue-500'>Career Roadmaps</span></h1>
            <p style={{ color: 'var(--p-color)' }} className='lg:w-[75%] mx-auto'>Skill-based roadmaps are an excellent way to chart your professional development journey and ensure you're continually growing in areas relevant to your career goals. Get access to DSA, web development, company-based guides for interview preparation.</p>
            <div className='mx-auto my-10 md:grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">

                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">

                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">

                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">

                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative w-full rounded-lg border-2 px-3 py-4 hover:-translate-y-1 sm:px-5 sm:pb-5 sm:pt-6" style={{ backgroundColor: 'var(--main-bg-color)' }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex flex-col">
                      <div className="flex items-center space-x-2">
                        <div className="rounded-full p-2" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                          <LuPuzzle className="h-6 w-6 object-cover text-blue-500" />
                        </div>
                        <p className="text-sm font-semibold text-grey-800 dark:text-grey-50">
                          DSA-251 Roadmap
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-2 break-words text-xs leading-normal text-[#64748B] dark:text-grey-400">
                  A structured guide for interview prep, covering Arrays, Strings, Linked Lists, Stacks, Queues,
                  Trees, Binary Search, and Dynamic Programming. It helps you progress from basics to advanced
                  DSA skills. The roadmap is designed to improve problem-solving abilities with hands-on practice
                  and real-world examples.
                </p>
                <div className="mt-4 flex flex-col gap-4">
                  <div className="mt-1 flex w-full items-center gap-2 self-start">

                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                      <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                        <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                      </span>
                    </div>
                    <div className="flex w-full items-center gap-20">
                      <span className="text-xs font-medium " style={{ color: 'var(--p-color)' }}>
                        25.0K+ Peers
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <button rel="noopener noreferrer" className="flex items-center justify-center px-4 py-2 mx-auto rounded-full  text-sm font-medium w-[100%]" style={{ backgroundColor: 'var(--card-bg-color)' }}>
                      <span>View Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="flex mx-auto bg-blue-500 text-white font-semibold rounded-md px-3 py-3 mt-2">
                Explore Roadmaps <FaArrowRight className="mt-1.5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'var(--main-bg-color)', color: 'var(--text-color)' }} className="p-6 md:p-10 text-center">
        <h1 className='md:text-4xl text-2xl font-semibold'>Do you face any of these networking problems?</h1>
        <div className="flex flex-row items-center overflow-x-visible gap-2 mt-10 animate-slide">
          <div class="flex shrink-0 justify-around flex-row gap-4 ">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
          <div class="flex shrink-0 justify-around flex-row gap-4 ">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
          <div class="flex shrink-0 justify-around flex-row gap-4">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center overflow-x-visible gap-2 mt-10 animate-slide-reverse">
          <div class="flex shrink-0 justify-around flex-row gap-4 ">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
          <div class="flex shrink-0 justify-around flex-row gap-4 ">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
          <div class="flex shrink-0 justify-around flex-row gap-4">
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-green-50 text-green-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-yellow-50 text-yellow-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
            <div class="flex w-96 relative items-center shrink-0 justify-center gap-4 rounded-xl border p-4 " style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div class="flex items-center justify-center rounded-full p-3 bg-red-50 text-red-500">
                <IoBookOutline />
              </div>
              <p class="text-base font-medium text-grey-700 dark:text-grey-300">Not able to find the right resources?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-5 lg:p-10' style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <h2 className='md:text-4xl text-2xl font-semibold'>Don't worry ProPeers is right here to solve all your learning problems <BsStars className='inline text-blue-500' /></h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 hidden scale-90 md:block mx-auto"><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path></svg>
        <div className='flex lg:w-[60%] mx-auto'>
          <div className='flex border-r-2 border-gray-500 w-1/2 p-5 '>
            <div className='text-center'>
              <h3 className='text-2xl font-semibold py-3 border-b-2 border-gray-500 mx-auto'>Your Networking Problem</h3>
              <ul>
                <li className='text-lg  py-4' style={{ color: 'var(--p-color)' }}>Connect with like minded peers</li>
                <li className='text-lg  py-4' style={{ color: 'var(--p-color)' }}>Abundance of resources</li>
                <li className='text-lg  py-4' style={{ color: 'var(--p-color)' }}>Lack of Expert Advice</li>
                <li className='text-lg  py-4' style={{ color: 'var(--p-color)' }}>Limited Exposure</li>
                <li className='text-lg  py-4' style={{ color: 'var(--p-color)' }}>Frustrated because of irrelevant content on Social Media platforms</li>
              </ul>
            </div>
          </div>
          <div className='flex w-1/2 p-5'>
            <div className='text-center'>
              <h3 className='text-2xl font-semibold py-3 border-b-2 border-gray-500 mx-auto'>How ProPeers can help?</h3>
              <ul>
                <li className='text-lg  py-4' >Connect with like-minded peers based on skills with <span className='text-blue-500'>Find Your Peer</span> feature</li>
                <li className='text-lg  py-4' >Access to career <span className='text-blue-500'>Roadmaps</span></li>
                <li className='text-lg  py-4' >Get career advice from <span className='text-blue-500'>experts</span></li>
                <li className='text-lg  py-4' >Get your personalized career guidance from mentors</li>
                <li className='text-lg  py-4' >Find what peers are doing and collaborate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=' mt-10'>
          <h2 className='md:text-4xl text-2xl font-semibold'>Explore our diverse <span className='text-blue-500'>Professional Communities</span></h2>
          <p style={{ color: 'var(--p-color)' }}>Connect with like-minded peers, share knowledge, and grow together. Explore thriving communities tailored to your interests.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:w-[80%] mx-auto'>
            <div className="flex flex-col text-left items-center justify-start gap-3 w-full p-4 rounded-[12px] border" style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div className="flex items-center gap-3 w-full">
                <span className="relative flex  w-20 overflow-hidden rounded-full object-cover">
                  <img alt="Group Image" className=" w-full object-cover rounded-full border" src="https://cdn.propeers.in/group-image66604d0079ebab20eec4da731717601911418" />
                </span>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-lg font-semibold">ProPeers Devops</h3>
                  <p className="text-sm font-semibold text-gray-500">Hi everyone! Let's grow in public.</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <span className="text-sm font-normal " style={{ color: 'var(--p-color)' }}>785+ peers community!</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 rounded-[6px] border-[1px] text-sm font-medium text-blue-500 ">
                  View
                  <span className="icon-wrapper transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col text-left items-center justify-start gap-3 w-full p-4 rounded-[12px] border" style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div className="flex items-center gap-3 w-full">
                <span className="relative flex w-20 overflow-hidden rounded-full object-cover">
                  <img alt="Group Image" className=" w-full object-cover rounded-full border" src="https://cdn.propeers.in/group-image66604d0079ebab20eec4da731717601911418" />
                </span>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-lg font-semibold">Full Stack Mern Developers</h3>
                  <p className="text-sm font-semibold text-gray-500">Hi everyone! Let's grow in public.</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <span className="text-sm font-normal " style={{ color: 'var(--p-color)' }}>785+ peers community!</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 rounded-[6px] border-[1px] text-sm font-medium text-blue-500 ">
                  View
                  <span className="icon-wrapper transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col text-left items-center justify-start gap-3 w-full p-4 rounded-[12px] border" style={{ backgroundColor: 'var(--card-bg-color)' }}>
              <div className="flex items-center gap-3 w-full">
                <span className="relative flex w-20 overflow-hidden rounded-full object-cover">
                  <img alt="Group Image" className=" w-full object-cover rounded-full border" src="https://cdn.propeers.in/group-image66604d0079ebab20eec4da731717601911418" />
                </span>
                <div className="flex flex-col items-center gap-1">
                  <h3 className="text-lg font-semibold">ProPeers DSA Discussion</h3>
                  <p className="text-sm font-semibold text-gray-500">Hi everyone! Let's grow in public.</p>
                </div>
              </div>
              <div className="flex justify-between items-center gap-3 w-full">
                <div className="flex items-center gap-2">
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white ">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 2" src="https://lh3.googleusercontent.com/a/ACg8ocKJ3t51YvxnMKUzJvSKE67b44v_gsbgRes57XlMVkb5AhM=s96-c" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 3" src="https://cdn.propeers.in/peep-96.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <div className="h-[25px] w-[25px] rounded-full border-0 border-white -ml-4">
                    <span className="relative flex shrink-0 overflow-hidden h-[25px] w-[25px] rounded-full object-cover">
                      <img alt="Profile Picture 4" src="https://cdn.propeers.in/peep-8.png" className="h-full w-full object-cover rounded-full" />
                    </span>
                  </div>
                  <span className="text-sm font-normal " style={{ color: 'var(--p-color)' }}>785+ peers community!</span>
                </div>
                <button className="flex items-center gap-2 px-3 py-2 rounded-[6px] border-[1px] text-sm font-medium text-blue-500 ">
                  View
                  <span className="icon-wrapper transition-transform duration-300">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button className="flex mx-auto bg-blue-500 text-white font-semibold rounded-md px-3 py-3 mt-5">
            Explore Communities <FaArrowRight className="mt-1.5 ml-2" />
          </button>
        </div>
      </div>
      <div className='p-10 ' style={{ backgroundColor: 'var(--main-bg-color)', color: 'var(--text-color)' }}>
        <h2 className='md:text-4xl text-2xl font-semibold text-center'>Transforming skill-based learning <BsStars className='inline text-blue-500' /></h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="330" height="91" fill="none" className="-mt-8 hidden scale-90 md:block mx-auto"><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M24.73 72.829c92.366-28.309 213.505-43.554 301.076-20.515"></path><path stroke="#467BFF" stroke-linecap="round" stroke-width="6.83" d="M4.188 65.588c93.631-23.79 215.367-33.138 301.717-5.874"></path></svg>
        <div className='lg:flex lg:w-[70%] mx-auto'>
          <div className='flex mx-auto md:w-1/2  xl:w-1/3 p-10 rounded-2xl hover:p-7 ease-in-out' style={{ backgroundColor: 'var(--card-bg-color)' }}>
            <img src="https://www.propeers.in/images/parikh-jain.webp" alt="" className='rounded-2xl' />
          </div>
          <div className='flex lg:w-2/3 md:p-10'>
            <div className='text-justify'>
              <p className='my-2'>Hey there, I'm Parikh Jain, the founder of ProPeers. Having worked in both MNCs and startups for over 6 years, I've come to realize the undeniable importance of peer connections and timely query resolution for personal growth and success. It's not about where you come from; it's about having access to the right ProPeers and solutions. That's why I started ProPeers - to provide a platform where people can easily connect with the right ProPeers who can help solve their queries.</p>
              <p className='my-2'>With ProPeers taking care of the support, you can focus on what truly matters - your growth. Embrace this opportunity to expand your horizons and achieve remarkable success. Join us now and experience the power of seamless connections and limitless growth. Download the app and unlock your potential today!</p>
              <span>Follow me on:
                <FaLinkedin className='inline text-blue-500 mx-2 text-xl bg-white ' />
                <FaFacebookSquare className='inline text-blue-500 mx-2 text-xl bg-white ' />
                <FaYoutubeSquare className='inline text-blue-500 mx-2 text-xl bg-white ' />

              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-10 p-5 md:p-10' style={{ backgroundColor: 'var(--card-bg-color)', color: 'var(--text-color)' }}>
        <div className='md:flex lg:w-[70%] mx-auto gap-5'>
          <div className='w-full md:w-1/2 md:p-10 text-center'>
            <h3 className='text-2xl font-semibold '>Frequently Asked Questions</h3>
            <p className='' style={{ color: 'var(--p-color)' }}>Get answers to common queries about our platform and mentorship opportunities.</p>
            <img src="https://www.propeers.in/images/footer-illustration.png" alt="" />
          </div>
          <div className='w-full md:w-1/2 md:p-10'>
            <div className="mx-auto max-w-[600px] divide-main-11 lg:mx-0 lg:max-w-[unset]" data-orientation="vertical">
              {/* Accordion Item 1 */}
              <div className="border-b !border-b-main-07 py-2">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls="accordion-item-1"
                    aria-expanded={openItem === 1}
                    onClick={() => toggleItem(1)}
                    className="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base  md:text-base"
                  >
                    What is the primary goal of ProPeers?
                    {openItem === 1 ? <FaMinus /> : <FaPlus />}
                  </button>
                </h3>
                {openItem === 1 && (
                  <div
                    id="accordion-item-1"
                    role="region"
                    aria-labelledby="accordion-header-1"
                    className="overflow-hidden transition-all text-sm text-grey-500 dark:text-main-10 md:text-sm"
                  >
                    <div className="pb-4 pt-0">
                      Our platform's primary goal is to create a skill-based social network that also enables individuals to connect with experienced Mentors who can provide guidance, support, and knowledge to help them achieve their personal and professional goals.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="border-b !border-b-main-07 py-2">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls="accordion-item-2"
                    aria-expanded={openItem === 2}
                    onClick={() => toggleItem(2)}
                    className="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base  md:text-base"
                  >
                    How do I become a Mentor on ProPeers?
                    {openItem === 2 ? <FaMinus /> : <FaPlus />}
                  </button>
                </h3>
                {openItem === 2 && (
                  <div
                    id="accordion-item-2"
                    role="region"
                    aria-labelledby="accordion-header-2"
                    className="overflow-hidden transition-all text-sm text-grey-500 dark:text-main-10 md:text-sm"
                  >
                    <div className="pb-4 pt-0">
                      To become a Mentor on ProPeers, you can sign up on our platform and complete the mentor application process. Once approved, you can start mentoring others.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion Item 3 */}
              <div className="border-b !border-b-main-07 py-2">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls="accordion-item-3"
                    aria-expanded={openItem === 3}
                    onClick={() => toggleItem(3)}
                    className="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base  md:text-base"
                  >
                    Are there any fees associated with using your mentorship services?
                    {openItem === 3 ? <FaMinus /> : <FaPlus />}
                  </button>
                </h3>
                {openItem === 3 && (
                  <div
                    id="accordion-item-3"
                    role="region"
                    aria-labelledby="accordion-header-3"
                    className="overflow-hidden transition-all text-sm  md:text-sm"
                  >
                    <div className="pb-4 pt-0">
                      Some mentorship services may have associated fees, depending on the mentor and the type of service. Please check the details on the platform.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion Item 4 */}
              <div className="border-b !border-b-main-07 py-2">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls="accordion-item-4"
                    aria-expanded={openItem === 4}
                    onClick={() => toggleItem(4)}
                    className="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base  md:text-base"
                  >
                    How do I find the right Mentor for my needs?
                    {openItem === 4 ? <FaMinus /> : <FaPlus />}
                  </button>
                </h3>
                {openItem === 4 && (
                  <div
                    id="accordion-item-4"
                    role="region"
                    aria-labelledby="accordion-header-4"
                    className="overflow-hidden transition-all text-sm text-grey-500 dark:text-main-10 md:text-sm"
                  >
                    <div className="pb-4 pt-0">
                      You can use our platform's search and filter features to find mentors based on your specific needs and goals.
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion Item 5 */}
              <div className="border-b !border-b-main-07 py-2">
                <h3 className="flex">
                  <button
                    type="button"
                    aria-controls="accordion-item-5"
                    aria-expanded={openItem === 5}
                    onClick={() => toggleItem(5)}
                    className="group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left text-base  md:text-base"
                  >
                    What can I expect from a mentorship relationship?
                    {openItem === 5 ? <FaMinus /> : <FaPlus />}
                  </button>
                </h3>
                {openItem === 5 && (
                  <div
                    id="accordion-item-5"
                    role="region"
                    aria-labelledby="accordion-header-5"
                    className="overflow-hidden transition-all text-sm text-grey-500 dark:text-main-10 md:text-sm"
                  >
                    <div className="pb-4 pt-0">
                      A mentorship relationship provides guidance, support, and insights to help you achieve your personal and professional goals.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
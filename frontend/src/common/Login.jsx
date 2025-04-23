import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="lg:flex">
      {/* Animated Container */}
      <div
        style={{
          backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/053/390/260/small_2x/3d-blue-concentric-circle-pattern-background-vector.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        className="h-[100vh] w-[50%] hidden lg:flex overflow-hidden relative">
        <style>
        {`
          @keyframes slider {
            0% { transform: translateX(0); }
            25% { transform: translateX(0); } /* Pause for 2 seconds */
            33% { transform: translateX(-100%); }
            58% { transform: translateX(-100%); } /* Pause for 2 seconds */
            66% { transform: translateX(-200%); }
            91% { transform: translateX(-200%); } /* Pause for 2 seconds */
            100% { transform: translateX(0); }
          }

          .animate-slider {
            animation: slider 12s infinite;
          }
        `}
      </style>
        <div className="w-full h-full flex animate-slider">

          <div className="w-full shrink-0 flex flex-col items-center justify-center">
            <img src="https://www.propeers.in/_next/static/media/onboarding-slider-1.9f7ca4f2.png" alt="" className="w-[40%] mx-auto" />
            <p className="w-[30%] text-center mx-auto text-white font-semibold text-lg">Discover a world of expertise and inspiration with ProPeers - your gateway to connecting with knowledgeable experts and amazing peers!</p>
          </div>
          <div className="w-full shrink-0 flex flex-col items-center justify-center">
            <img src="https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png" alt="" className="w-[40%] mx-auto" />
            <p className="w-[30%] text-center mx-auto text-white font-semibold text-lg">Explain the mission and purpose of your mentorship platform. Share your organization's background and what inspired you to create the platform.</p>
          </div>
          <div className="w-full shrink-0 flex flex-col items-center justify-center">
            <img src="https://www.propeers.in/_next/static/media/onboarding-slider-3.fe1c55ed.png" alt="" className="w-[40%] mx-auto" />
            <p className="w-[30%] text-center mx-auto text-white font-semibold text-lg">That's why I started ProPeers - to provide a platform where people can easily connect with the right Mentors who can help solve their queries.</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: 'var(--bg-color)', color: 'var(--text-color)'}} className='w-[100vw] lg:w-[50vw] h-[100vh]'>
        <h1 className='text-blue-500 text-2xl lg:text-4xl text-center mt-[20%] font-bold'>Coding Now</h1>
        <div className='w-[90%] md:w-[65%]  mx-auto rounded-md mt-5 p-5 md:p-10' style={{backgroundColor: 'var(--card-bg-color'}}>
        <h1 className='text-2xl lg:text-4xl text-left font-bold '>Hey!👋<br />Welcome to <span className='text-blue-500'>Coding Now</span></h1>
        <p style={{color: 'var(--p-color)'}} className='my-2'>Simplify your login process with one-click Google access.</p>
        <div className='flex justify-center items-center mt-5'>
          <button className=' font-bold py-2 px-4 rounded-md w-full border flex items-center justify-center' style={{backgroundColor: 'var(--btn-bg-color)', color: 'var(--btn-text-color)'}}>
            <FcGoogle  className='w-[20px] h-[20px] mr-2' />
            Continue with Google
          </button>
        </div>
        <p className='text-center mt-5' style={{color: 'var(--p-color)'}}>or Continue with</p>
        <form action="">
        <p className='text-left mt-5' style={{color: 'var(--p-color)'}}>Email Address / Phone Number</p>
        <div>
            <input type="text" placeholder='Enter your email or phone number' className='w-full border rounded-md p-2 mt-2' style={{backgroundColor: 'var(--input-bg-color)', color: 'var(--input-text-color)'}}/>
        </div>
        <button className='w-full rounded-md bg-blue-500 text-white p-2 my-2'>Continue</button>
        </form>
        
        <p className='text-center' style={{color: 'var(--p-color)'}}>Don't have an account? <span className='text-blue-500'>Sign Up</span></p>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
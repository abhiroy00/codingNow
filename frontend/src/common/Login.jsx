import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const carouselItems = [
  {
    image: "https://www.propeers.in/_next/static/media/onboarding-slider-1.9f7ca4f2.png",
    text: "Discover a world of expertise and inspiration with Coding Now - your gateway to connecting with knowledgeable experts and amazing peers!",
  },
  {
    image: "https://www.propeers.in/_next/static/media/onboarding-slider-2.af4d6eed.png",
    text: "Join a community of passionate developers sharing knowledge and building the future of technology together.",
  },
  {
    image: "https://www.propeers.in/_next/static/media/onboarding-slider-3.fe1c55ed.png",
    text: "That's why we started Coding Now - to provide a platform where people can easily connect with the right mentors who can help solve their coding challenges.",
  },
];

export default function Login() {
  const [input, setInput] = useState('');

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Inline animation styles */}
      <style>
        {`
          @keyframes slider {
            0%, 25% { transform: translateX(0); }
            33%, 58% { transform: translateX(-100%); }
            66%, 91% { transform: translateX(-200%); }
            100% { transform: translateX(0); }
          }
          .animate-slider {
            animation: slider 12s infinite ease-in-out;
          }
        `}
      </style>

      {/* Left Carousel */}
      <div className="hidden lg:flex lg:w-1/2 h-full bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/053/390/260/small_2x/3d-blue-concentric-circle-pattern-background-vector.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="w-full h-full flex animate-slider">
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full shrink-0 flex flex-col items-center justify-center px-8">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="w-2/3 max-w-xs mx-auto mb-8 drop-shadow-xl"
              />
              <p className="text-center text-white font-medium text-lg max-w-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Login Form */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-blue-500 text-3xl md:text-4xl text-center font-bold mb-10">
            Coding Now
          </h1>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Hey! 👋<br />Welcome to <span className="text-blue-500">Coding Now</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Simplify your login process with one-click Google access.
            </p>

            <button className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-md hover:bg-gray-100 transition-colors mb-6">
              <FcGoogle className="w-5 h-5 mr-3" />
              Continue with Google
            </button>

            <div className="relative flex items-center justify-center mb-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-3 text-gray-500 text-sm">or Continue with</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <form>
              <label
                htmlFor="email-phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address / Phone Number
              </label>
              <input
                id="email-phone"
                type="text"
                placeholder="Enter your email or phone number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full border border-gray-300 rounded-md py-3 px-4 mb-4 bg-white text-gray-800"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Continue
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

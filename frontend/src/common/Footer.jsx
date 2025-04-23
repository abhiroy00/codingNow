import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-10" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="container mx-auto px-5 lg:px-20">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-xl font-bold mb-4 text-blue-500">Coding Now</h2>
            <p className="text-sm " style={{ color: 'var(--p-color)' }}>
              Coding Now is your one-stop solution for skill-based learning. Join our community to connect with peers, mentors, and resources to accelerate your career growth.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--p-color)' }}>
              <li><a href="/about" className="hover:text-blue-500">Mentorship</a></li>
              <li><a href="/roadmaps" className="hover:text-blue-500">Roadmaps</a></li>
              <li><a href="/mentors" className="hover:text-blue-500">Mentors</a></li>
              <li><a href="/community" className="hover:text-blue-500">Community</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Feed</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-500 ">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-400 ">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-pink-500 ">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-blue-700 ">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-red-500">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm " style={{ color: 'var(--p-color)' }}>
          <p>&copy; {new Date().getFullYear()} Coding Now. All rights reserved.</p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li><a href="/privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-blue-500">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Main Footer Content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm max-w-7xl mx-auto px-4">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Glowing Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit enim necessitatibus
            repellendus ipsa. Tempora totam voluptate eaque veniam voluptates! Optio ipsa
            distinctio qui recusandae. Tempore autem incidunt illum iure reprehenderit.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>0318-xxxxxx</li>
            <li>Broken@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-100 py-6 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-center lg:text-left">
            &copy; 2025 Glowing.com All Rights Reserved
          </p>

          {/* Social Icons */}
          <ul className="flex space-x-4 text-xl text-gray-600">
            <li>
              <a href="#" className="hover:text-indigo-600">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-600">
                <IoLogoYoutube />
              </a>
            </li>
          </ul>

          {/* Logo and Payment Image */}
          <div className="flex items-center gap-6">
            <img
              src={assets.logo}
              alt="Glowing"
              width={179}
              height={26}
              className="w-32 object-contain"
              loading="lazy"
            />
            <img
              src={assets.pay}
              alt="Available payment methods"
              width={313}
              height={28}
              className="object-contain w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

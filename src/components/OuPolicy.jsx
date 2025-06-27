import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OuPolicy = () => {
  return (
    <div className="py-20 px-4 text-center text-gray-700 bg-white">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
        Why Shop with Glowing
      </h2>

      {/* Policy Cards */}
      <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-base">
        <div>
          <img
            src={assets.exchange_icon}
            className="w-12 m-auto mb-5"
            alt="Exchange Policy"
          />
          <p className="font-semibold">Easy Exchange Policy</p>
          <p className="text-gray-400">
            We Offer hassle Free Exchange Policy
          </p>
        </div>

        <div>
          <img
            src={assets.quality_icon}
            className="w-12 m-auto mb-5"
            alt="Return Policy"
          />
          <p className="font-semibold">7 Days Return Policy</p>
          <p className="text-gray-400">
            We Offer 7 days Free Exchange Policy
          </p>
        </div>

        <div>
          <img
            src={assets.support_img}
            className="w-12 m-auto mb-5"
            alt="Customer Support"
          />
          <p className="font-semibold">Best Customer Support</p>
          <p className="text-gray-400">We provide 24/7 Service</p>
        </div>
      </div>
    </div>
  );
};

export default OuPolicy;

import React, { useEffect, useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import { motion } from 'framer-motion';

const SpecialOffer = () => {
  // Countdown calculation
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-07-01T00:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const countdownBox = (value, label) => (
    <motion.div
      key={label}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border px-4 py-2 rounded-lg text-lg font-bold shadow-md"
    >
      {value}
    </motion.div>
  );

  return (
    <section className="py-20 px-4" id="offer" aria-label="offer">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Animated Product Images */}
        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex gap-4 w-full lg:w-1/2 justify-center"
        >
          {[assets.offer_banner1, assets.offer_banner2].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ rotateX: 10, rotateY: -10, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
              style={{
                perspective: '1000px',
              }}
            >
              <motion.img
                src={src}
                alt={`Offer Product ${index + 1}`}
                className="object-cover rounded-xl shadow-xl hover:shadow-indigo-400 transition duration-300"
                style={{
                    width: index === 0 ? '220px' : '320px',
                  }}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'reverse',
                  duration: 3 + index,
                }}
              />
              {/* Glow Border */}
              <div className="absolute inset-0 rounded-xl pointer-events-none border border-indigo-400 opacity-20 blur-md"></div>
            </motion.div>
          ))}
        </motion.figure>

        {/* Offer Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-lg font-semibold text-indigo-600 mb-2">
            <span className="mr-2">Special Offer</span>
            <span className="inline-block bg-red-500 text-white text-sm px-2 py-1 rounded-full animate-pulse">
              -20%
            </span>
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Mountain Pine Bath Oil
          </motion.h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
            Made using clean, non-toxic ingredients, our products are designed for everyone.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center lg:justify-start gap-4 text-center mb-6">
            {countdownBox(timeLeft.days, 'Days')}
            {countdownBox(timeLeft.hours, 'Hours')}
            {countdownBox(timeLeft.minutes, 'Minutes')}
            {countdownBox(timeLeft.seconds, 'Seconds')}
          </div>

          {/* Call to Action Button */}
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(99,102,241,0.6)' }}
            href="#"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Get Only $39.00
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;

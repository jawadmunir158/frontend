import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const cardsData = [
  {
    title: 'Summer Collection',
    text: 'Starting at $17.99',
    button: 'Shop Now',
    image: assets.collection1,
  },
  {
    title: 'What’s New?',
    text: 'Get the glow',
    button: 'Discover Now',
    image: assets.collection2,
  },
  {
    title: 'Buy 1 Get 1',
    text: 'Starting at $7.99',
    button: 'Discover Now',
    image: assets.collection3,
  },
];

const Cards = () => {
  return (
    <section id="collection" className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <ul className="grid md:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <li key={index}>
              <div className="relative group overflow-hidden rounded-2xl shadow-lg h-96">
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition duration-300 z-10" />

                {/* Text content */}
                <div className="relative z-20 p-6 flex flex-col justify-end h-full text-white">
                  <h2 className="text-2xl font-bold mb-1">{card.title}</h2>
                  <p className="text-sm">{card.text}</p>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-white hover:underline"
                  >
                    {card.button}
                    <ion-icon name="arrow-forward" class="text-lg"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;

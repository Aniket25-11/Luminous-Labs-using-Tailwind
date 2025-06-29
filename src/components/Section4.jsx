import React from 'react';
import MomCard from './MomCard'; // Import the new MomCard component
import mom from '../assets/Section4.png'; // You can pass different images as well
import man from '../assets/Section4-2.png';
import beauty from '../assets/Section4-3.png';
import activegirl from '../assets/Section4-4.png';
import gym from '../assets/Section4-5.png';

function Section4() {
  // Array of card data to render multiple cards
  const cardData = [
    {
      image: mom,
      title: "Optimized female health",
      text: "Red light therapy can effectively support your fertility in the long-term."
    },
    {
      image: man,
      title: "Enhanced Reproductive Support",
      text: "Therapy can improve blood flow, which helps support optimal reproductive health."
    },
    {
      image: beauty,
      title: "Holistic Health Boost",
      text: "A natural solution for boosting tissue regeneration and hormone balance."
    },
    {
      image: activegirl,
      title: "Long-Term Wellness",
      text: "Supports overall health by nurturing the uterus and ovaries naturally."
    },
    {
      image: gym,
      title: "Enhanced Reproductive Support",
      text: "Therapy can improve blood flow, which helps support optimal reproductive health."
    },
  ];

  return (
    <div className=' min-h-screen flex flex-col justify-center'>
      <div className='text-center'>
        <p className='text-xl text-gray-500 mt-20'>Benefits</p>
        <h3 className='text-3xl font-bold mb-16'>Feel the difference in every aspect</h3>
        
        {/* Render multiple cards by mapping over the cardData array */}
        {cardData.map((card, index) => (
          <MomCard 
            key={index} 
            image={card.image} 
            title={card.title} 
            text={card.text} 
          />
        ))}
      </div>
    </div>
  );
}

export default Section4;

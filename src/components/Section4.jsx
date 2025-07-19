import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mom from '../assets/Section4.png';
import man from '../assets/Section4-2.png';
import beauty from '../assets/Section4-3.png';
import activegirl from '../assets/Section4-4.png';
import gym from '../assets/Section4-5.png';

gsap.registerPlugin(ScrollTrigger);

function Section4() {
  const sectionRef = useRef();
  const cardsRef = useRef([]);

  // Filtered to match the reference image (5 cards → 1 card)
  const cardData = [
    {
      image: mom,
      title: "Optimized female health",
      text: "Red light therapy can effectively support your fertility in the long-term.",
      details: [
        "Improves ovarian function",
        "Supports menstrual regularity",
        "Boosts overall hormonal health"
      ]
    },
    {
      image: man,
      title: "Enhanced Reproductive Support",
      text: "Therapy can improve blood flow, which helps support optimal reproductive health.",
      details: [
        "Better circulation",
        "Supports male fertility",
        "Boosts energy and vitality"
      ]
    },
    {
      image: beauty,
      title: "Holistic Health Boost",
      text: "A natural solution for boosting tissue regeneration and hormone balance.",
      details: [
        "Accelerates cell repair and regeneration",
        "Improves skin and tissue health",
        "Balances endocrine system functions"
      ]
    },
    {
      image: activegirl,
      title: "Long-Term Wellness",
      text: "Supports overall health by nurturing the uterus and ovaries naturally.",
      details: [
        "Reduces inflammation",
        "Enhances long-term reproductive function",
        "Supports immune resilience"
      ]
    },
    {
      image: gym,
      title: "Enhanced Reproductive Support",
      text: "Therapy can improve blood flow, which helps support optimal reproductive health.",
      details: [
        "Increases vascular activity in reproductive organs",
        "Improves nutrient delivery",
        "Boosts stamina and vitality"
      ]
    }
  ];

  useGSAP(() => {
    // Section title animation
    gsap.from(sectionRef.current.querySelectorAll('p, h3'), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    // Card animation
    gsap.fromTo(cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Hover effects
    cardsRef.current.forEach(card => {
      gsap.set(card, { transformPerspective: 1000 });

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -5,
          scale: 1.02,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: 'none',
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className='min-h-screen flex flex-col justify-center px-8 py-20 overflow-hidden'>
      <div className='text-center mb-16'>
        <p className='text-xl text-gray-500 mb-4'>Benefits</p>
        <h3 className='text-4xl font-bold'>Feel the difference in every aspect</h3>
      </div>

      <div className='max-w-6xl mx-auto overflow-hidden py-2 px-2'>
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={el => cardsRef.current[index] = el}
            className='bg-[#F2ECE2] rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row transition-all duration-300 will-change-transform mb-4'
          >
            {/* Image Section - matching reference proportions */}
            <div className='md:w-1/2 h-96 md:h-auto'>
              <img
                src={card.image}
                alt={card.title}
                className='w-full h-full object-cover object-center rounded-3xl '
              />
            </div>

            {/* Content Section */}
            <div className='md:w-3/4 p-10 flex flex-col justify-between '>
              <div className=' flex flex-col justify-center'>
                <h3 className='text-5xl font-bold mb-6'>{card.title}</h3>
                <p className='text-xl text-gray-600 mb-6'>{card.text}</p>
              </div>

              {card.details && (
                <div className='mb-8'>
                  {card.details.map((detail, i) => (
                    <p key={i} className='text-gray-700 mb-3 text-xl'>{detail}</p>
                  ))}
                </div>
              )}

              {card.tags && (
                <div className='flex flex-wrap gap-3'>
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className='inline-block bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
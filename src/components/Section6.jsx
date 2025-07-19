import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import sec6bg from '../assets/Section6-bg.webp';

const Section6 = () => {
  const sectionRef = useRef();
  const buttonRef = useRef();
  const textRef = useRef();
  const words = ["science-backed", "clinically-proven", "research-driven"];
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  useGSAP(() => {
    // Text animation
    gsap.from(textRef.current.querySelectorAll('h1'), {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Button hover animation
    const button = buttonRef.current;
    gsap.set(button, { transformOrigin: 'center center' });
    
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        backgroundColor: '#f3f4f6',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      // Arrow animation
      gsap.to(button.querySelector('i'), {
        x: 5,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: 'white',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(button.querySelector('i'), {
        x: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    // Word rotation animation
    const wordRotation = gsap.timeline({ repeat: -1 });
    words.forEach((word, i) => {
      wordRotation.to(textRef.current.querySelector('.rotating-word'), {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.in',
        onComplete: () => {
          setCurrentWordIndex(i);
        }
      })
      .to(textRef.current.querySelector('.rotating-word'), {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      }, '+=0.5');
    });

    return () => {
      wordRotation.kill(); // Clean up animation on unmount
    };
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className='w-full h-screen px-28 py-16'>
      <div 
        className='w-full h-full rounded-3xl bg-cover bg-center pt-28 pl-14 flex flex-col'
        style={{ backgroundImage: `url(${sec6bg})` }}
      >
        <div ref={textRef} className='max-w-2xl '>
          <h1 className='text-5xl font-bold text-white mb-4'>
            Learn how CellLight powers your health.
          </h1>
          <h1 className='text-5xl font-bold text-white mb-4'>
            Innovative, <span className='text-gray-300 rotating-word'>{words[currentWordIndex]}</span>
          </h1>
          <h1 className='text-5xl font-bold text-white'>
            technology created to fuel cellular energy and longevity.
          </h1>
        </div>

        <button 
          ref={buttonRef}
          className='bg-white rounded-full px-9 py-4 mt-20 font-semibold w-fit flex items-center gap-2 transition-all duration-300 hover:shadow-lg text-2xl'
        >
          Explore <i className="ri-arrow-right-line transition-all duration-300"></i>
        </button>
      </div>
    </div>
  );
};

export default Section6;
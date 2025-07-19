import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Section7 = () => {
  const sectionRef = useRef();
  const buttonRef = useRef();
  const horBoxesRef = useRef([]);

  useGSAP(() => {
    // Button arrow animation
    const button = buttonRef.current;
    const arrow = button.querySelector('i');
    
    gsap.to(arrow, {
      x: 5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Button hover effect
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        backgroundColor: '#333',
        duration: 0.3
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        backgroundColor: '#000',
        duration: 0.3
      });
    });

    // HorBox hover effects
    horBoxesRef.current.forEach((box, index) => {
      box.addEventListener('mouseenter', () => {
        // Increase opacity of hovered box
        gsap.to(box, {
          opacity: 1,
          scale: 1.02,
          backgroundColor: '#f2c761',
          duration: 0.3
        });

        // Decrease opacity of other boxes
        horBoxesRef.current.forEach((otherBox, otherIndex) => {
          if (index !== otherIndex) {
            gsap.to(otherBox, {
              opacity: 0.6,
              duration: 0.3
            });
          }
        });
      });

      box.addEventListener('mouseleave', () => {
        // Reset all boxes
        horBoxesRef.current.forEach(box => {
          
          gsap.to(box, {
            opacity: 1,
            scale: 1,
            backgroundColor: '#F2ECE2',
            duration: 0.3
          });
        });
      });
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className='w-full h-screen flex justify-center items-center gap-28 px-8'>
      {/* Left Text Section */}
      <div className='max-w-md'>
        <h2 className='text-gray-500 text-3xl leading-relaxed mb-8'>
          We believe in meaningful conversations. To help you out, we provide <br /> 
          <span className='text-black font-bold'>a free 20-minute call to answer your questions.</span>
        </h2>
        <button 
          ref={buttonRef}
          className='text-white bg-black text-xl px-10 py-5 rounded-full mt-10 flex items-center gap-2 transition-all duration-300 hover:shadow-lg'
        >
          Book a free call <i className="ri-arrow-right-line"></i>
        </button>
      </div>

      {/* Right FAQ Section */}
      <div className='flex flex-col'>
        <div 
          ref={el => horBoxesRef.current[0] = el}
          className='HorBox flex justify-between items-center bg-[#F2ECE2] w-[40rem] px-6 py-7 font-semibold rounded-2xl mb-4 cursor-pointer transition-all duration-300'
        >
          <h1 className='text-2xl'>When can I see/measure effects?</h1>
          <i className="ri-arrow-down-fill text-xl"></i>
        </div>
        <div 
          ref={el => horBoxesRef.current[1] = el}
          className='HorBox flex justify-between items-center bg-[#F2ECE2] w-[40rem] px-6 py-7 font-semibold rounded-2xl mb-4 cursor-pointer transition-all duration-300'
        >
          <h1 className='text-2xl'>How does the technology work?</h1>
          <i className="ri-arrow-down-fill text-xl"></i>
        </div>
        <div 
          ref={el => horBoxesRef.current[2] = el}
          className='HorBox flex justify-between items-center bg-[#F2ECE2] w-[40rem] px-6 py-7 font-semibold rounded-2xl mb-4 cursor-pointer transition-all duration-300'
        >
          <h1 className='text-2xl'>Is there scientific evidence?</h1>
          <i className="ri-arrow-down-fill text-xl"></i>
        </div>
        <div 
          ref={el => horBoxesRef.current[3] = el}
          className='HorBox flex justify-between items-center bg-[#F2ECE2] w-[40rem] px-6 py-7 font-semibold rounded-2xl mb-4 cursor-pointer transition-all duration-300'
        >
          <h1 className='text-2xl'>What's the recommended usage?</h1>
          <i className="ri-arrow-down-fill text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Section7;
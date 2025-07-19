import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import bgImage from '../assets/Navbar-bg-image.png';

function Navbar() {
  const navLinksRef = useRef([]);
  const bgImageRef = useRef();

  // GSAP animations
  useGSAP(() => {
    // Navlink hover animations
    navLinksRef.current.forEach((link, index) => {
      // Skip the Shop button (last item)
      if (index === navLinksRef.current.length - 1) return;

      // Hover effect for inactive buttons
      gsap.set(link, { padding: '0.5rem 1rem', borderRadius: '9999px' });
      
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          border: '1px solid rgba(255,255,255,0.5)',
          duration: 0.09,
          ease: 'power2.out'
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          border: '1px solid transparent',
          duration: 0.09,
          ease: 'power2.out'
        });
      });
    });

    // Active button (let's assume Technology is active for this example)
    const activeLink = navLinksRef.current[0];
    if (activeLink) {
      gsap.set(activeLink, {
        backgroundColor: 'white',
        color: 'black',
        padding: '0.5rem 1rem',
        borderRadius: '9999px'
      });

      // Hover effect for active button
      activeLink.addEventListener('mouseenter', () => {
        gsap.to(activeLink, {
          scale: 1.05,
          duration: 0.3
        });
      });

      activeLink.addEventListener('mouseleave', () => {
        gsap.to(activeLink, {
          scale: 1,
          duration: 0.3
        });
      });
    }

    // Background image glow effect
    const glowTimeline = gsap.timeline({ repeat: -1, yoyo: true });
    glowTimeline.to(bgImageRef.current, {
      opacity: 0.9,
      duration: 3,
      ease: 'sine.inOut'
    }).to(bgImageRef.current, {
      opacity: 1,
      duration: 3,
      ease: 'sine.inOut'
    });

  }, []);

  return (
    <div className='h-screen w-full px-4 py-4 text-white'>
      {/* Background div with glow effect */}
      <div 
        ref={bgImageRef}
        className='flex flex-col justify-between h-full bg-cover bg-center rounded-3xl p-10' 
        style={{ 
          backgroundImage: `url(${bgImage})`,
          willChange: 'opacity' // Optimize for animation
        }}
      >
        {/* Navigation Section */}
        <div>
          <nav className='flex justify-between text-center'>
            {/* Logo */}
            <div>
              <p className='text-2xl font-semibold'><span><i className="ri-bubble-chart-fill"></i></span> luminous labs</p>
            </div>

            {/* Navlinks */}
            <div className='flex justify-evenly gap-12 text-2xl items-center'>
              <p 
                ref={el => navLinksRef.current[0] = el}
                className="cursor-pointer transition-all"
              >
                Technology
              </p>
              <p 
                ref={el => navLinksRef.current[1] = el}
                className="cursor-pointer transition-all"
              >
                Company
              </p>
              <p 
                ref={el => navLinksRef.current[2] = el}
                className="cursor-pointer transition-all"
              >
                Commercial
              </p>
              <p 
                ref={el => navLinksRef.current[3] = el}
                className="cursor-pointer transition-all"
              >
                Blog
              </p>
              <p 
                ref={el => navLinksRef.current[4] = el}
                className="cursor-pointer transition-all"
              >
                Pop-up Store
              </p>
              <p 
                ref={el => navLinksRef.current[5] = el}
                className="rounded-full border-white border-solid border-[1px] px-5 py-1.5 hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
              >
                Shop
              </p>
            </div>

            {/* Cart Icon */}
            <div className='flex gap-4 text-xl font-semibold items-center'>
              <p>EN <span><i className="ri-arrow-drop-down-line"></i></span></p>
              <p>Cart <span><i className="ri-shopping-cart-line rounded-full border-white border-solid border-[1px] p-1.5 hover:bg-white hover:text-black transition-colors duration-300"></i></span></p>
            </div>
          </nav>
        </div>

        {/* Text Section */}
        <div className='text-center text-white'>
          <p className='text-gray-400 pt-12 text-2xl'>Red Light Therapy: Proven, safe, and non-invasive</p>
          <h1 className='text-8xl pb-12 font-bold'>Your cells, supercharged</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
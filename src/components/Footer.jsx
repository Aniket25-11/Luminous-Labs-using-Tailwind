import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'swiper/modules';

// Correct imports
// import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Swiper (if needed)
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';


const Footer = () => {
  const footerRef = useRef();
  const socialIconsRef = useRef([]);
  const paymentIconsRef = useRef([]);
  const linksRef = useRef([]);
  const statsRef = useRef([]);

  useGSAP(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Social icons hover effect
    socialIconsRef.current.forEach(icon => {
      gsap.set(icon, { transformOrigin: 'center center' });
      
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          backgroundColor: '#333',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          backgroundColor: '#111',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Payment icons hover effect
    paymentIconsRef.current.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.2,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // Scroll animations
    gsap.utils.toArray(footerRef.current.children).forEach((section, i) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Links hover effect
    linksRef.current.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          x: 5,
          color: '#fff',
          duration: 0.3
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          x: 0,
          color: link.classList.contains('text-gray-500') ? '#6b7280' : '#fff',
          duration: 0.3
        });
      });
    });

    // Stats hover effect
    statsRef.current.forEach(stat => {
      stat.addEventListener('mouseenter', () => {
        gsap.to(stat.querySelector('span:first-child'), {
          scale: 1.2,
          duration: 0.3
        });
      });

      stat.addEventListener('mouseleave', () => {
        gsap.to(stat.querySelector('span:first-child'), {
          scale: 1,
          duration: 0.3
        });
      });
    });

  }, { scope: footerRef });

  return (
    <div ref={footerRef} className='min-h-screen bg-black text-white rounded-3xl m-5 p-20'>
      <div className='flex flex-row justify-between mb-20'>
        <div>
          <h1 className='text-4xl font-semibold mb-10'><i className="ri-bubble-chart-fill mr-2"></i>luminous labs</h1>
          
          <div className='flex mb-10'>
            <div 
              ref={el => socialIconsRef.current[0] = el}
              className='bg-gray-900 px-3 py-1 m-1 rounded-md text-4xl cursor-pointer hover:text-pink-500 transition-colors'
            >
              <i className="ri-instagram-line"></i>
            </div>
            <div 
              ref={el => socialIconsRef.current[1] = el}
              className='bg-gray-900 px-3 py-1 m-1 rounded-md text-4xl cursor-pointer hover:text-blue-500 transition-colors'
            >
              <i className="ri-linkedin-fill"></i>
            </div>
            <div 
              ref={el => socialIconsRef.current[2] = el}
              className='bg-gray-900 px-3 py-1 m-1 rounded-md text-4xl cursor-pointer hover:text-blue-700 transition-colors'
            >
              <i className="ri-facebook-fill"></i>
            </div>
            <div 
              ref={el => socialIconsRef.current[3] = el}
              className='bg-gray-900 px-3 py-1 m-1 rounded-md text-4xl cursor-pointer hover:text-red-600 transition-colors'
            >
              <i className="ri-youtube-fill"></i>
            </div>
          </div>

          <div ref={el => statsRef.current[0] = el} className="flex items-center mb-6 cursor-pointer text-lg">
            <span className="mr-3 text-3xl"><i className="ri-user-3-line"></i></span>
            <span>Combined across all platforms: 11k <br /> followers</span>
          </div>

          <div ref={el => statsRef.current[1] = el} className="flex items-center mb-6 cursor-pointer text-lg">
            <span className="mr-3 text-3xl"><i className="ri-notification-2-line"></i></span>
            <span>Daily: 50 requests/DMs</span>
          </div>

          <div ref={el => statsRef.current[2] = el} className="flex items-center mb-6 cursor-pointer text-lg">
            <span className="mr-3 text-3xl"><i className="ri-bar-chart-2-line"></i></span>
            <span>Growth: 2% organic growth monthly</span>
          </div>
        </div>

        <div className='text-xl'>
          <p ref={el => linksRef.current[0] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Technology</p>
          <p ref={el => linksRef.current[1] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Company</p>
          <p ref={el => linksRef.current[2] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Shop</p>
          <p ref={el => linksRef.current[3] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Commercial</p>
          <p ref={el => linksRef.current[4] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Blog</p>
          <p ref={el => linksRef.current[5] = el} className='mt-4 mb-4 cursor-pointer hover:underline'>Contact</p>
        </div>

        <div className='text-xl'>
          <p ref={el => linksRef.current[6] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Shipping & Delivery</p>
          <p ref={el => linksRef.current[7] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Privacy Policy</p>
          <p ref={el => linksRef.current[8] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Revocation</p>
          <p ref={el => linksRef.current[9] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Terms & Conditions</p>
          <p ref={el => linksRef.current[10] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Imprint</p>
          <p ref={el => linksRef.current[11] = el} className='mt-4 mb-4 text-gray-500 cursor-pointer hover:underline'>Press Kit</p>
        </div>

        <div>{/* Empty Space */}</div>
      </div>

      <div className='mb-40'>
        <p className='text-md font-serif text-gray-500'>
          These statements have not been evaluated by the Food and Drug Administration. In the European Union, the intended use of our products does <br /> 
          not fall within the scope or article 2 section 1 of 2017/45 MDR. Our products are not intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>

      <div className='flex justify-between items-center text-center mt-20 flex-wrap gap-4'>
        <div ref={el => paymentIconsRef.current[0] = el} className='cursor-pointer text-2xl font-bold'><i className="ri-paypal-fill text-3xl mr-2"></i>Paypal</div>
        <div ref={el => paymentIconsRef.current[1] = el} className='cursor-pointer text-2xl font-bold'><i className="ri-mastercard-fill text-3xl mr-2"></i>MasterCard</div>
        <div ref={el => paymentIconsRef.current[2] = el} className='cursor-pointer'><i className="ri-visa-line text-6xl mr-2"></i></div>
        <div className='cursor-pointer text-2xl font-bold'>American Express</div>
        <div className='cursor-pointer text-2xl font-bold'>JCB</div>
        <div className='cursor-pointer text-2xl font-bold'>Venmo</div>
        <div ref={el => paymentIconsRef.current[3] = el} className='cursor-pointer text-2xl font-bold'><i className="ri-apple-fill text-3xl mr-2"></i>Pay</div>
        <div ref={el => paymentIconsRef.current[4] = el} className='cursor-pointer text-2xl font-bold'><i className="ri-google-fill text-3xl mr-2"></i>Pay</div>
      </div>
    </div>
  );
};

export default Footer;
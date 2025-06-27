import React from 'react';
import bgImage from '../assets/Navbar-bg-image.png';

function Navbar() {
  return (
    <div className=' h-screen w-full px-4 py-4 text-white '>
      {/* Make the background div cover full screen height */}
      <div 
        className='flex flex-col justify-between h-full bg-cover bg-center rounded-3xl p-10' 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Navigation Section */}
        <div>
          <nav className='flex justify-between text-center'>
            {/* Logo */}
            <div>
              <p className='text-2xl font-semibold'><span><i className="ri-bubble-chart-fill"></i></span> luminous labs</p>
            </div>

            {/* Navlinks */}
            <div className='flex justify-evenly gap-12 text-2xl '>
              <p>Technology</p>
              <p>Company</p>
              <p>Commercial</p>
              <p>Blog</p>
              <p>Pop-up Store</p>
              <p ><span className='rounded-full border-white border-solid border-[1px] px-5 py-1.5 '>Shop</span></p>
            </div>

            {/* Cart Icon */}
            <div className='flex gap-4 text-xl font-semibold'>
              <p>EN <span><i className="ri-arrow-drop-down-line"></i></span></p>
              <p>Cart <span><i className="ri-shopping-cart-line rounded-full border-white border-solid border-[1px] p-1.5"></i></span></p>
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

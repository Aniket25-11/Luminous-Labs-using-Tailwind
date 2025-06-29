import React, { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Section5() {

   const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <>
    <div className='h-screen w-full '>
        <div className='text-center mt-40'>
            <h3 className='text-gray-400 text-lg'>Testimonials</h3>
            <h1 className='font-semibold text-3xl mb-10'>Helping people feel better, every day</h1>
        </div>
        <div>
            <Swiper
            modules={[Controller]}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {/* ... */}
          </Swiper>

          <Swiper
            modules={[Controller]}
            onSwiper={setSecondSwiper}
            controller={{ control: firstSwiper }}
          >
            {/* ... */}
          </Swiper>
        </div>

    </div>
        
    </>
  )
}

export default Section5
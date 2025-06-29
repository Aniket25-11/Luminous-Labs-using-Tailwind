import React, { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import { testimonialData } from '../constants/Testimonial';

const Testimonials = () => {
    const swiperRef = useRef(null); // Create a reference for Swiper
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const breakpointsResponsive = {
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        '@1.00': {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        '@1.50': {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    };

    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    // Functions to manually slide to next and previous slides
    const goToNextSlide = () => {
        if (swiperRef.current && !isEnd) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current && !isBeginning) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='w-full h-screen space-y-5 relative lg:px-24 md:px-16 sm:px-7 px-4 flex items-center justify-center flex-col'>

            <div className="w-full flex flex-col items-center justify-between ">
                <h2 className="text-sm text-neutral-400 font-semibold">
                    Testimonials
                </h2>
                <h1 className='text-2xl font-bold'>Helping people feel better, every day</h1>
            </div>

            <div className="w-full py-2 relative">
                <Swiper
                    ref={swiperRef} // Attach the ref to Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    breakpoints={breakpointsResponsive}
                    onSlideChange={(swiper) => handleSwiperEvents(swiper)}
                    onInit={(swiper) => handleSwiperEvents(swiper)}
                    modules={[]} // No need for navigation module anymore
                    className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="w-full h-auto p-6 space-y-10 group bg-neutral-800/10 rounded-xl border border-neutral-800/70">
                                <p className="text-black text-base font-semibold">
                                    {item.desc}
                                </p>

                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src={item.img} alt={item.name} className="w-12 h-12 object-center object-cover rounded-full border" />

                                        <div className="space-y-1">
                                            <p className="text-gray-500 text-base font-bold">
                                                {item.name}
                                            </p>
                                            <p className="text-neutral-400 text-xs font-semibold italic">
                                                {item.role} of Company {item.company}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1 bg-yellow-500/5 rounded-full px-2 py-1">
                                        <FaStar className='text-yellow-600 text-sm' />
                                        <p className="text-xs text-yellow-600">
                                            {item.rating}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom navigation buttons positioned at the bottom-left */}
                <div className="absolute left-4  z-10 flex items-center gap-6 mt-10">
                    <button
                        className={`custom-prev text-neutral-50 bg-blue-600 hover:bg-blue-700 p-2 rounded-full ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={goToPrevSlide} // Use the function to go to the previous slide
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={20} />
                    </button>
                    <button
                        className={`custom-next text-neutral-50 bg-blue-600 hover:bg-blue-700 p-2 rounded-full ${isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        onClick={goToNextSlide} // Use the function to go to the next slide
                        disabled={isEnd}
                    >
                        <FaChevronRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

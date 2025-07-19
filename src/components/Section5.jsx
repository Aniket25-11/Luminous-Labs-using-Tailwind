import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa6';
import { testimonialData } from '../constants/Testimonial';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Testimonials = () => {
    const swiperRef = useRef(null);
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const sectionRef = useRef();

    useGSAP(() => {
        // Title animation
        gsap.from(sectionRef.current.querySelectorAll('h2, h1'), {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });

        // Card hover effect
        gsap.utils.toArray('.testimonial-card').forEach(card => {
            gsap.set(card, { transformPerspective: 1000 });
            
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    duration: 0.4,
                    ease: 'power2.out'
                });
            });
        });
    }, { scope: sectionRef });

    const breakpointsResponsive = {
        0: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    };

    const handleSwiperEvents = (swiper) => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
    };

    const goToNextSlide = () => {
        if (swiperRef.current && !isEnd) {
            swiperRef.current.swiper.slideNext();
            gsap.fromTo('.swiper-slide-active', 
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 }
            );
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current && !isBeginning) {
            swiperRef.current.swiper.slidePrev();
            gsap.fromTo('.swiper-slide-active', 
                { x: -50, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5 }
            );
        }
    };

    return (
        <div ref={sectionRef} className='w-full min-h-screen py-20 relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex items-center justify-center flex-col'>
            <div className="w-full max-w-7xl flex flex-col items-center mb-16">
                <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4">
                    TESTIMONIALS
                </h2>
                <h1 className='text-4xl md:text-5xl font-bold text-center'>
                    Helping people feel better, every day
                </h1>
            </div>

            <div className="w-full max-w-7xl relative">
                <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={50}
                    breakpoints={breakpointsResponsive}
                    onSlideChange={handleSwiperEvents}
                    onInit={handleSwiperEvents}
                    modules={[Autoplay, Navigation]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="!pb-16"
                >
                    {testimonialData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="testimonial-card w-full h-full p-8 space-y-8 bg-white rounded-2xl border border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl">
                                <div className="flex items-start gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`text-xl ${i < item.rating ? 'text-yellow-500' : 'text-gray-300'}`} />
                                    ))}
                                </div>

                                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                                    "{item.desc}"
                                </p>

                                <div className="w-full flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={item.img} 
                                            alt={item.name} 
                                            className="w-16 h-16 object-cover rounded-full border-2 border-white shadow-md" 
                                        />
                                        <div>
                                            <p className="text-gray-900 text-xl font-bold">
                                                {item.name}
                                            </p>
                                            <p className="text-gray-500 text-sm font-medium">
                                                {item.role}, {item.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 flex items-center gap-6">
                    <button
                        className={`custom-prev text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}`}
                        onClick={goToPrevSlide}
                        disabled={isBeginning}
                    >
                        <FaChevronLeft size={24} />
                    </button>
                    <button
                        className={`custom-next text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 ${isEnd ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-110'}`}
                        onClick={goToNextSlide}
                        disabled={isEnd}
                    >
                        <FaChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
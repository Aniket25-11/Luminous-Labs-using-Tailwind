import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Section2img from '../assets/Section2.webp';
import Section3img from '../assets/Section2-1.webp';
import Section4img from '../assets/Section2-2.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Section2() {
    const sectionRef = useRef();
    const cardsRef = useRef([]);
    const buttonRef = useRef();

    useGSAP(() => {
        // Animate the intro text to slide up on scroll
        gsap.fromTo(
            sectionRef.current.querySelectorAll('.intro-text p'),
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector('.intro-text'),
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Animate the cards to fade in and slide up
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: cardsRef.current[0],
                        start: 'top 75%',
                        toggleActions: 'play none none none'
                    }
                }
            );

            // Add hover effect to cards
            gsap.set(card, {
                transformPerspective: 1000,
                transformOrigin: "center center"
            });

            // Create gradient animation timeline for each button
            const button = card.querySelector('.card-button');
            const gradientTimeline = gsap.timeline({ paused: true });

            gradientTimeline.to(button, {
                background: 'linear-gradient(45deg, #6b21ff, #3b82f6, #10b981)',
                backgroundSize: '200% 200%',
                color: 'white',
                duration: 0.5,
                ease: 'power2.inOut'
            })
                .to(button, {
                    backgroundPosition: '100% 100%',
                    duration: 1.5,
                    ease: 'none'
                }, 0);

            card.addEventListener('mouseenter', () => {
                // Card lift animation
                gsap.to(card, {
                    y: -15,
                    scale: 1.02,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    duration: 0.5,
                    ease: 'power2.out'
                });

                // Start gradient animation
                gradientTimeline.play();

                // Animate border (if you want to keep it)
                gsap.to(button, {
                    borderColor: 'transparent',
                    duration: 0.3
                });
            });

            card.addEventListener('mouseleave', () => {
                // Card return animation
                gsap.to(card, {
                    y: 0,
                    scale: 1,
                    boxShadow: 'none',
                    duration: 0.6,
                    ease: 'elastic.out(1, 0.5)'
                });

                // Reverse gradient animation
                gradientTimeline.reverse();

                // Animate border back (if you want to keep it)
                gsap.to(button, {
                    borderColor: '#e5e7eb',
                    delay: 0.2,
                    duration: 0.3
                });
            });
        });

        // Animate the "All Products" button
        gsap.fromTo(
            buttonRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Add hover effect to main button
        buttonRef.current.addEventListener('mouseenter', () => {
            gsap.to(buttonRef.current, {
                scale: 1.05,
                backgroundColor: '#333',
                duration: 0.3
            });

            // Animate the arrow icon
            gsap.to(buttonRef.current.querySelector('i')), {
                x: 5,
                duration: 0.3
            };
        });

        buttonRef.current.addEventListener('mouseleave', () => {
            gsap.to(buttonRef.current, {
                scale: 1,
                backgroundColor: '#000',
                duration: 0.3
            });

            gsap.to(buttonRef.current.querySelector('i')), {
                x: 0,
                duration: 0.3
            };
        });

    }, { scope: sectionRef });

    return (
        <>
            <div ref={sectionRef} className='h-1/2 w-full flex flex-col items-center justify-evenly text-center'>
                <div className='intro-text pt-60 pb-32'>
                    <p className='font-semibold text-3xl'>In 2050, material wealth will not be</p>
                    <p className='text-gray-400 font-semibold mb-20 text-3xl'>impressive. YourVO₂Max, speed of aging, <br />HRV and body fat percentage will be.</p>
                </div>
            </div>

            <div className='h-screen w-full flex flex-col items-center justify-evenly text-center'>
                <div>
                    <p className='text-lg text-gray-600'>Applications</p>
                    <p className='font-semibold text-3xl mb-20'>Start shaping your tomorrow</p>
                    <div className='flex gap-5 mb-10'>
                        <div
                            ref={el => cardsRef.current[0] = el}
                            className='bg-white rounded-3xl overflow-hidden transition-all will-change-transform'
                        >
                            <img className='bg-cover bg-center h-[300px] w-[400px] rounded-3xl object-cover' src={Section2img} alt="" />
                            <p className='text-xl text-gray-500 m-10 text-left'>Stay your best self, always <br />and keep smiling all the time.</p>
                            <div className='card-button rounded-full border-gray-200 border-solid border-[2px] m-10 font-bold p-3 flex justify-center items-center text-xl transition-all duration-500 bg-white'>
                                <p>Wellbeing</p>
                            </div>
                        </div>
                        <div
                            ref={el => cardsRef.current[1] = el}
                            className='bg-white rounded-3xl overflow-hidden transition-all will-change-transform'
                        >
                            <img className='bg-cover bg-center h-[300px] w-[400px] rounded-3xl object-cover' src={Section3img} alt="" />
                            <p className='text-xl text-gray-500 m-10 text-left'>Optimize your fertility, cycle <br /> and menopause naturally</p>
                            <div className='card-button rounded-full border-gray-300 border-solid border-[2px] m-10 font-bold p-3 flex justify-center items-center text-xl transition-colors duration-300'>
                                <p>Women's health</p>
                            </div>
                        </div>
                        <div
                            ref={el => cardsRef.current[2] = el}
                            className='bg-white rounded-3xl overflow-hidden transition-all will-change-transform'
                        >
                            <img className='bg-cover bg-center h-[300px] w-[400px] rounded-3xl object-cover' src={Section4img} alt="" />
                            <p className='text-xl text-gray-500 m-10 text-left'>Fuel your cells <br /> for a supercharged life</p>
                            <div className='card-button rounded-full border-gray-300 border-solid border-[2px] m-10 font-bold p-3 flex justify-center items-center text-xl transition-colors duration-300'>
                                <p>Longevity</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        ref={buttonRef}
                        className='all-products-btn bg-black rounded-full text-white px-10 py-5 mt-8 mb-32 text-lg flex items-center gap-2 transition-all will-change-transform'
                    >
                        All Products <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Section2;
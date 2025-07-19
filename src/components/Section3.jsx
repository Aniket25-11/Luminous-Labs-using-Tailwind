import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import KiniBG from '../assets/Kini-meet-bg.jpg';
import Kinibg2 from '../assets/Kini-meet.webp';

function Section3() {
    const sectionRef = useRef();
    const buttonRef = useRef();
    const priceTagRef = useRef();

    useGSAP(() => {
        // Text animation
        gsap.from(sectionRef.current.querySelectorAll('h1 span'), {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
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
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                backgroundColor: 'white',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        // Price tag animation
        gsap.from(priceTagRef.current, {
            x: -20,
            opacity: 0,
            duration: 0.8,
            delay: 0.4,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: priceTagRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });

    }, { scope: sectionRef });

    return (
        <div ref={sectionRef} className="w-full h-screen px-28 py-16 mt-20">
            {/* Main Section with Background Image */}
            <div
                className="w-full h-full rounded-3xl bg-cover bg-center flex flex-col justify-center items-center text-center overflow-hidden"
                style={{ backgroundImage: `url(${KiniBG})` }}
            >
                {/* Text Content */}
                <div className="w-full max-w-4xl px-4 mb-8">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Meet Kini,
                    </h1>
                    <h1 className="text-4xl font-medium text-gray-300 leading-snug">
                        the first wearable using non-invasive light technology<br />
                        to support and improve female longevity
                    </h1>
                </div>

                {/* Product Image and CTA */}
                <div className="w-full flex justify-center">
                    <div 
                        className="w-full max-w-4xl h-64 bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${Kinibg2})` }}
                    >
                        {/* CTA Bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-800/90 text-white rounded-full mx-10 py-4 px-8 flex justify-between items-center backdrop-blur-sm">
                            <div className="text-2xl font-medium pl-4">
                                Get to know Kini now!
                            </div>
                            <div className="flex items-center gap-6">
                                <div ref={priceTagRef} className="text-2xl font-medium">
                                    $149.00
                                </div>
                                <button 
                                    ref={buttonRef}
                                    className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
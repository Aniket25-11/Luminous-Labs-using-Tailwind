import React from 'react';
import KiniBG from '../assets/Kini-meet-bg.jpg';
import Kinibg2 from '../assets/Kini-meet.webp';

function Section3() {
    return (
        <>
            {/* Meet Kini Section */}
            <div className="w-full h-screen pl-28 pr-28 pt-16 pb-16 mt-20">
                {/* Main Section with Background Image */}
                <div
                    className="MeetKini w-full h-full rounded-3xl bg-green-400 pl-14 bg-cover bg-center flex flex-col justify-center items-center text-center"
                    style={{ backgroundImage: `url(${KiniBG})` }}
                >
                    <h1 className="text-4xl font-bold text-white">
                        Meet Kini,{" "}
                        <span className="text-4xl font-bold text-gray-400">
                            the first wearable using
                            <br /> non-invasive light technology <br /> to support and
                            improve female longevity
                        </span>
                    </h1>

                    <div
                        className="w-full bg-cover bg-center text-center pl-40 pr-60 py-16"
                        style={{ backgroundImage: `url(${Kinibg2})` }}
                    >
                        <div className="bg-gray-700 text-white rounded-full px-9 py-4 font-semibold flex justify-between">
                            <div>
                                <h1 className="px-7 py-2 text-2xl">Get to know Kini now!</h1>
                            </div>
                            <div className="flex justify-around">
                                <div className="px-7 py-2 text-2xl">
                                    <p>$149,00</p>
                                </div>
                                <button className="bg-white text-black px-9 py-4 rounded-3xl">
                                    Buy now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section3;
    
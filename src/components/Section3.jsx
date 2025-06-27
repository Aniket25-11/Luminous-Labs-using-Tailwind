import React from 'react'
import KiniBG from '../assets/Meet-kini-bg.png';

function Section3() {
    return (
        <>
        {/* Meet Kini Section  */}
            <div className='min-h-screen w-full flex justify-center items-center bg-pink-500 p-8 '>
                <div className=' bg-center bg-cover text-center flex flex-col justify-between p-6 rounded-3xl min-h-96 max-w-xl w-full shadow-xl '
                style={{ backgroundImage: `url(${KiniBG})`}}>
                    <div>
                        <p>Meet Kini, the first wearable using <br />
                        non-invasive light technology <br />
                        to support and improve female longevity
                        </p>
                    </div>
                    <div >
                        <div className='bg-gray-600 flex justify-between items-center p-4 text-white rounded-full w-full text-center'>
                            <div>
                                <p>Get the new Kini now</p>
                            </div>
                            <div className='flex gap-10'>
                                <p>$149</p>
                                <button className='bg-white text-black rounded-lg px-4 py-2'>Buy now</button>
                            </div>
                        </div>
                    </div>
                <div>

                </div>
                </div>

            </div>
        </>
    )
}

export default Section3
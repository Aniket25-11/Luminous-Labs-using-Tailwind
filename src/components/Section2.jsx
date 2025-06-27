import React from 'react'

function Section2() {
  return (
    <>
    <div className='h-1/2 w-full flex flex-col items-center justify-evenly text-center'>
        <div className='pt-60 pb-32 '>
            <p className='font-semibold text-3xl'>In 2050, material wealth will not be</p>
            <p className='text-gray-400 font-semibold mb-20 text-3xl'>impressive. YourVO₂Max, speed of aging, <br />HRV and body fat percentage will be.</p>
        </div>
        
    </div>
    <div className='h-screen w-full flex flex-col items-center justify-evenly text-center'>
        <div>
            <p className='text-lg text-gray-600'>Applications</p>
            <p className='font-semibold text-3xl mb-20'>Start shaping your tomorrow</p>
            <div className='flex gap-5'>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center h-[300px] w-[400px] rounded-3xl' src="https://images.unsplash.com/photo-1749802449762-5e428ccf9a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D" alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Stay your best self, always</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Wellbeing</p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center  h-[300px] w-[400px] rounded-3xl' src="https://images.unsplash.com/photo-1749802449762-5e428ccf9a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D" alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Stay your best self, always</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Wellbeing </p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center  h-[300px] w-[400px] rounded-3xl' src="https://images.unsplash.com/photo-1749802449762-5e428ccf9a45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDF8fHxlbnwwfHx8fHw%3D" alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Stay your best self, always</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Wellbeing</p>
                    </div>
                </div>
            </div>
        </div>
        <div className=''>
        <button className='bg-black rounded-full text-white px-10 py-5 mt-8 mb-32 text-lg'>All Products <i class="ri-arrow-right-line"></i></button>

        </div>
    </div>
        
    </>
  )
}

export default Section2
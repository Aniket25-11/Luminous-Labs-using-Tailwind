import React from 'react'
import Section2img from '../assets/Section2.webp'
import Section3img from '../assets/Section2-1.webp'
import Section4img from '../assets/Section2-2.webp'

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
            <div className='flex gap-5 mb-10'>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center h-[300px] w-[400px] rounded-3xl' src={Section2img} alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Stay your best self, always</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Wellbeing</p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center  h-[300px] w-[400px] rounded-3xl' src={Section3img} alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Optimize your fertility, cycle <br /> and menopause naturally</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Women's health </p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl'>
                    <img className='bg-cover bg-center  h-[300px] w-[400px] rounded-3xl' src={Section4img} alt="" />
                    <p className='text-xl text-gray-500 m-10 text-left'>Fuel your cells <br /> for a supercharged life</p>
                    <div className='rounded-full border-gray border-solid border-[2px] m-10 font-bold p-3  flex justify-center items-center text-xl'>
                        <p>Longevity</p>
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
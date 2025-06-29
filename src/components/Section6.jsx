import React from 'react'
import sec6bg from '../assets/Section6-bg.webp';

const Section6 = () => {
  return (
    <>
    <div className='w-full h-screen pl-28 pr-28 pt-16 pb-16'>
        <div className='w-full h-full  rounded-3xl bg-red-400 pl-14 pt-28 bg-cover' style={{ backgroundImage: `url(${sec6bg})` }}>
            <h1 className='text-4xl  font-bold text-white'>Learn how CellLight powers your <br /> health. Innovative, <span className='text-gray-400'>science-backed <br /> technology created to fuel cellular <br /> energy and longevity. </span></h1>

            <button className='bg-white rounded-full px-9 py-4 mt-20 font-semibold'>Explore <span><i class="ri-arrow-right-line"></i></span></button>

        </div>
    </div>
    </>

  )
}

export default Section6
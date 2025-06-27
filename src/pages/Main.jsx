import React from 'react'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'


function Main() {
  return (
    <>
    <div className='bg-red-100'>
        {/* <div> */}
        <Navbar />
        <Section2 />
        <Section3 />
        <Section4 />

        {/* </div> */}
    </div>
        
    </>
  )
}

export default Main
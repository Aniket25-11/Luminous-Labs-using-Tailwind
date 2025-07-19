import React from 'react'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'
import Section6 from '../components/Section6'
import Section7 from '../components/Section7'


function Main() {
  return (
    <>
    <div className='bg-[#FCF8F1] m-0 p-0 box-border'>
        {/* <div> */}
        <Navbar />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Footer />

        {/* </div> */}
    </div>
        
    </>
  )
}

export default Main
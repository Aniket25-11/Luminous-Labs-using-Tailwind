import React from 'react'
import Navbar from '../components/Navbar'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Section5 from '../components/Section5'
import Footer from '../components/Footer'


function Main() {
  return (
    <>
    <div className='bg-orange-50 m-4'>
        {/* <div> */}
        <Navbar />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />

        {/* </div> */}
    </div>
        
    </>
  )
}

export default Main
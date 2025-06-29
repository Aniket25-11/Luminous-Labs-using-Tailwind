import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='min-h-screen bg-black text-white rounded-3xl m-5 p-20'>
        <div className='flex flex-row justify-between mb-20'>
          <div className=''>
            <h1 className='text-4xl font-semibold'><span><i className="ri-bubble-chart-fill"></i></span> luminous labs</h1>
            <div className='flex '>
              <p className='bg-gray-900 px-3 py-1 m-1 rounded-md text-3xl mt-8 mb-8'><i class="ri-instagram-line"></i></p>
              <p className='bg-gray-900 px-3 py-1 m-1 rounded-md text-3xl mt-8 mb-8'><i class="ri-linkedin-fill"></i></p>
              <p className='bg-gray-900 px-3 py-1 m-1 rounded-md text-3xl mt-8 mb-8'><i class="ri-facebook-fill"></i></p>
              <p className='bg-gray-900 px-3 py-1 m-1 rounded-md text-3xl mt-8 mb-8'><i class="ri-youtube-fill"></i></p>
            </div>
            {/* <div className=''> */}
            <p><span><i class="ri-user-3-line text-3xl"></i></span>Combined across all platforms: 11k <br /> followers</p>
            <p><span><i class="ri-notification-2-line text-3xl"></i></span>Daily: 50 requests/DMs</p>
            <p><span><i class="ri-bar-chart-2-line text-3xl"></i></span>Growth: 2% organic growth monthly</p>
            {/* </div> */}
          </div>
          <div>
            <p className='mt-2 mb-2'>Technology</p>
            <p className='mt-2 mb-2'>Company</p>
            <p className='mt-2 mb-2'>Shop</p>
            <p className='mt-2 mb-2'>Commercial</p>
            <p className='mt-2 mb-2'>Blog</p>
            <p className='mt-2 mb-2'>Contact</p>
          </div>
          <div>
            <p className='mt-2 mb-2 text-gray-500'>Shipping & Delivery</p>
            <p className='mt-2 mb-2 text-gray-500'>Privacy Policy</p>
            <p className='mt-2 mb-2 text-gray-500'>Revocation</p>
            <p className='mt-2 mb-2 text-gray-500'>Terms & Conditions</p>
            <p className='mt-2 mb-2 text-gray-500'>Imprint</p>
            <p className='mt-2 mb-2 text-gray-500'>Press Kit</p>
          </div>
          <div>
            {/* Empty Space  */}
          </div>
        </div>
        <div className='mb-20'>
          <p className='text-sm text-gray-500'>These statements have not been evaluated by the Food and Drug Administration. In the European Union, the intended use of our products does <br /> not fall within the scope or article 2 section 1 of 2017/45 MDR. Our products are not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
        <div className='flex justify-between items-center text-center mt-20 pt-20'>
          <p><i class="ri-paypal-fill text-3xl"></i>Paypal</p>
          <p><i class="ri-mastercard-fill text-3xl"></i>MasterCard</p>
          <p><i class="ri-mastercard-fill text-3xl"></i>MasterCard</p>
          <p><i class="ri-visa-line text-3xl"></i></p>
          <p>American <br />Express</p>
          <p>JCB</p>
          <p>Venmo</p>
          <p><i class="ri-apple-fill text-3xl"></i>Pay</p>
          <p><i class="ri-google-fill text-3xl"></i>Pay</p>
        </div>

      </div>

    </>
  )
}

export default Footer
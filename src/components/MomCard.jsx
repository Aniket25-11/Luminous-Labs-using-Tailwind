import React from 'react';

function MomCard({ image, title, text }) {
  return (
    <div className='mom-card bg-stone-200 flex flex-row ml-60 mr-60 rounded-3xl mb-5'>
      <div className='bg-cover bg-center rounded-3xl overflow-hidden' style={{ backgroundImage: `url(${image})`, height: '700px', width: '900px' }}>
        <div className='bg-gray-400 bg-blur-sm w-1/2 ml-8 flex flex-col justify-end self-end'>
          <p>UTERINE BLOOD FLOW: OPTIMAL</p>
          <br />
          <div className='flex justify-evenly'>
            <p>PI</p>
            <p>PI</p>
            <p>PI</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between text-left'>
        <div className='m-16'>
          <h1 className='text-6xl font-semibold'>{title}</h1>
          <p className='text-left text-gray-600 text-2xl mt-5'>{text}</p>
        </div>
        <div className='m-16'>
          <p className='text-left text-gray-600 text-xl mt-5 mb-5'>
            By increasing blood flow, supporting tissue regeneration and balancing hormones, Cell light^TM supports your uterus and ovaries naturally.
          </p>
          <div className='mb-10 flex justify-around gap-10'>
            <div className='text-xl rounded-3xl border-black border-solid border-[1px] px-5 py-1.5 w-1/2 h-[100px]'>
              <p>Promotes <br /> health tissues</p>
            </div>
            <div className='text-xl rounded-3xl border-black border-solid border-[1px] px-5 py-1.5 w-1/2 h-[100px]'>
              <p>Balances <br /> your hormones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MomCard;

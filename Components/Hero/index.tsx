import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-start items-center  w-full gap-y-8'>
      <div className='text-8xl text-white font-bold text-left leading-[80px]	'>Unlock <br /> Your <br /> Financial <br /> <h1 className='text-exblue'>Potential</h1> </div>
      <button className='bg-expink text-white rounded-2xl font-bold text-2xl px-10 py-1'>
        Try Exolo
      </button>
      <video autoPlay style={{ width: '390px', height: '655px' }}>
        <source src="/mobilevid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default Hero

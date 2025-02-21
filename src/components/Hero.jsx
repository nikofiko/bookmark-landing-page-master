import React from 'react'
import illustration_hero from '../assets/images/illustration-hero.svg'

const Hero = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row  mt-[108px] font-rubik relative justify-between'>
      <div className='pt-10 max-w-[540px] lg:mr-20 flex flex-col items-center lg:block pr-4 lg:pr-0'>
        <h1 className='text-center lg:text-left text-[30px] lg:text-[48px] font-medium leading-none pb-[24px]'>A Simple Bookmark Manager</h1>
        <p className='text-center lg:text-left text-grayish text-[15px] lg:text-[18px] max-w-[280px] lg:max-w-[540px] pb-[32px]'>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className='flex gap-4'>
            <button className='cursor-pointer bg-softblue hover:bg-white hover:text-softblue hover:border-softblue hover:border-1 hover:py-2 hover:px-[23.5px] py-2.5 px-6 rounded-md text-white text-[14px]'>Get it on Chrome</button>
            <button className='cursor-pointer bg-[#ebeaea] hover:bg-white hover:border-[#ebeaea] hover:border-2 hover:text-[#878787] py-2.5 px-6 hover:py-2 hover:px-[22px] rounded-md text-darkblue font-medium text-[14px]'>Get it on Firefox</button>
        </div>
      </div>
      <div className='relative'>
        <div className=' after:-z-10 after:contect-[" "] after:bg-softblue after:h-[190px] lg:after:h-[352px] after:w-[300px] lg:after:w-[600px] after:absolute after:top-[50px] after:-left-[-75px] lg:after:top-[134px] lg:after:left-[190px] 3xl:after:rounded-full after:rounded-br-none after:rounded-bl-full after:overflow-hidden'>
            <img className='max-w-[355px] lg:max-w-none pl-4 lg:pl-0' src={illustration_hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero

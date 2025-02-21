import React from 'react'
import dots from '../assets/images/bg-dots.svg'
import chrome from '../assets/images/logo-chrome.svg'
import firefox from '../assets/images/logo-firefox.svg'
import opera from '../assets/images/logo-opera.svg'

const Download = () => {
  return (
    <div className='pb-20'>
      <div className='flex-col flex items-center pr-4 lg:pr-0'>
        <h3 className='text-[24px] lg:text-[32px] font-medium text-center pb-[16px]'>Download the extension</h3>
        <p className='text-[15px] lg:text-[18px] text-grayish text-center max-w-[300px]'>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
      </div>
      
      <div className='flex gap-[34px] flex-col lg:flex-row items-center lg:items-start justify-center pt-[48px]'>
        <div className='min-h-[371px] rounded-2xl max-w-[280px] flex flex-col items-center shadow-custom'>
            <img className='pt-[49px]' src={chrome} alt="" />
            <h4 className='pt-[32px] pb-[6px] text-[20px] text-center font-rubik font-medium text-darkblue'>Add to Chrome</h4>
            <p className=' pb-[32px] text-[15px] texte-center text-grayish'>Minimum version 62</p>
            <img src={dots} alt="" />
            <button className='hover:bg-white hover:border-2 hover:border-softblue hover:text-softblue mb-[24px] font-medium cursor-pointer mt-[24px] bg-softblue py-2.5 px-11 rounded-md text-white text-[14px]'>Add & Install Extension</button>
        </div>
        <div className='relative top-[40px] min-h-[371px] rounded-2xl max-w-[280px] flex flex-col items-center shadow-custom'>
            <img className='pt-[49px]' src={firefox} alt="" />
            <h4 className='pt-[32px] pb-[6px] text-[20px] text-center font-rubik font-medium text-darkblue'>Add to Firefox</h4>
            <p className=' pb-[32px] text-[15px] texte-center text-grayish'>Minimum version 55</p>
            <img src={dots} alt="" />
            <button className='hover:bg-white hover:border-2 hover:border-softblue hover:text-softblue mb-[24px] font-medium cursor-pointer mt-[24px] bg-softblue py-2.5 px-11 rounded-md text-white text-[14px]'>Add & Install Extension</button>
        </div>
        <div className='relative top-[80px] min-h-[371px] rounded-2xl max-w-[280px] flex flex-col items-center shadow-custom'>
            <img className='pt-[49px]' src={opera} alt="" />
            <h4 className='pt-[32px] pb-[6px] text-[20px] text-center font-rubik font-medium text-darkblue'>Add to Opera</h4>
            <p className=' pb-[32px] text-[15px] texte-center text-grayish'>Minimum version 46</p>
            <img src={dots} alt="" />
            <button className='hover:bg-white hover:border-2 hover:border-softblue hover:text-softblue mb-[24px] font-medium cursor-pointer mt-[24px] bg-softblue py-2.5 px-11 rounded-md text-white text-[14px]'>Add & Install Extension</button>
        </div>
      </div>
    </div>
  )
}

export default Download

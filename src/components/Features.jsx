import React from 'react'
import featurestab1 from '../assets/images/illustration-features-tab-1.svg'
import featurestab2 from '../assets/images/illustration-features-tab-2.svg'
import featurestab3 from '../assets/images/illustration-features-tab-3.svg'
import { useState } from 'react'
const Features = () => {
  const info = [
    {
      id: 1,
      title: "Bookmark in one click",
      text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      picture: featurestab1,
    },
    {
      id: 2,
      title: "Intelligent search",
      text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      picture: featurestab2,
    },
    {
      id: 3 ,
      title: "Share your bookmarks",
      text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      picture: featurestab3,
    }
  ]
  const [selectedInfo, setSelectedInfo] = useState(info[0])

  return (
    <div className='pb-[100px] lg:pb-[215px]'>
      <div className='font-rubik flex items-center flex-col mt-[80px] pr-4 lg:pr-0'>
        <h2 className='text-[32px] font-medium text-center pb-[16px]'>Features</h2>
        <p className='text-[14px] lg:text-[18px] text-grayish text-center max-w-[280px] lg:max-w-[540px]'>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
      </div> 

      <div className='lg:pr-11 pt-[72px] flex-col lg:flex-row flex justify-center items-center lg:items-start font-rubik text-darkblue text-[16px] font-light'>
        <button onClick={() => setSelectedInfo(info[0])} className={`${selectedInfo.id === 1 ? "border-b-3 border-softred" : "border-b"} px-[60px] pb-[31px] lg:pt-[0px] pt-[25px]  transition-all duration-200 hover:text-softred cursor-pointer`}>Simple Bookmarking</button>
        <button onClick={() => setSelectedInfo(info[1])} className='focus:border-b-3 focus:border-softred border-b lg:px-[60px] px-[68px] pb-[31px] lg:pt-[0px] pt-[25px] transition-all duration-200 hover:text-softred cursor-pointer'>Speedy Searching</button>
        <button onClick={() => setSelectedInfo(info[2])} className='focus:border-b-3 focus:border-softred border-b lg:px-[70px] px-[88px] pb-[31px] lg:pt-[0px] pt-[25px] transition-all duration-200 hover:text-softred cursor-pointer'>Easy Sharing</button>
      </div>  

      <div className='pt-[72px] flex flex-col lg:flex-row'>
          <div className='relative shrink-0 lg:pl-45 pl-5'>
            <div className=' after:-z-10 after:contect-[" "] after:bg-softblue after:h-[202px] lg:after:h-[352px] after:w-[410px] lg:after:w-[610px] after:absolute after:top-[75px] after:-left-[82px] lg:after:left-[-100px] 3xl:after:rounded-full after:rounded-bl-none after:rounded-br-full after:overflow-hidden'>
              <img className='max-w-[315px] lg:max-w-none' src={selectedInfo.picture} alt="" />
            </div>
          </div>
         <div className='lg:pl-[125px] flex flex-col items-center lg:block pr-4 pt-16 lg:pt-0'>
            <h3 className='text-[30px] font-rubik font-medium text-darkblue pb-[16px] pt-[57px]'>{selectedInfo.title}</h3>
            <p className='text-[16px] text-grayish max-w-[320px] text-center lg:text-left lg:max-w-[390px] pb-[32px]'>{selectedInfo.text}</p>
            <button className='cursor-pointer bg-softblue py-2.5 px-6 rounded-md text-white text-[14px]'>More Info</button>
         </div>
      </div>
    </div>

  
  )
}

export default Features

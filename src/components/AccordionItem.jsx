import React from 'react'

import { useState } from 'react'


const AccordionItem = ({name, description}) => {
  const [visibility, setVisibility] = useState(false)
  return (
    <div className='flex flex-col hover:text-softred' onClick={() => setVisibility(prevVisibility => !prevVisibility)}>
      <hr className='border-0.1 border-gray-300' />
      <div className='cursor-pointer flex justify-between pt-[19px] pb-[13px]'>
        <h4 className={`hover:text-softred text-[15px] lg:text-[18px] text-darkblue font-rubik ${visibility ? "" : "text-darkblue"}`}>{name}</h4>
        <div className={`text-red-800 flex items-center ${visibility ? "rotate-180 " : "text-softblue"}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" stroke-width="3" d="M1 1l8 8 8-8"/></svg>
        </div>
      </div>
      {visibility && 
            (<p className='pb-[29px] leading-[36px] text-[14px] lg:text-[16px] text-grayish font-rubik'>{description}</p>)
        }
      
    </div>
  )
}

export default AccordionItem

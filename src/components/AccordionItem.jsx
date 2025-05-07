import React from 'react';

const AccordionItem = ({ name, description, isOpen, onClick }) => {
  return (
    <div className='flex flex-col'>
      <hr className='border-0.1 border-gray-300' />
      <div 
        className='cursor-pointer flex justify-between pt-[19px] pb-[13px] hover:text-softred transition-colors'
        onClick={onClick}
      >
        <h4 className={`text-[15px] lg:text-[18px] font-rubik ${isOpen ? 'text-softred font-medium' : 'text-darkblue'}`}>
          {name}
        </h4>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-softred' : 'text-softblue'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
            <path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <p className='pb-[29px] leading-[36px] text-[14px] lg:text-[16px] text-grayish font-rubik'>
          {description}
        </p>
      )}
    </div>
  );
};

export default AccordionItem;
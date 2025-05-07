import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const info = [
    {
      name: "What is Bookmark?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      name: "How can I request a new browser?",
      answer: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
      name: "Is there a mobile app?",
      answer: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
      name: "What about other Chromium browsers?",
      answer: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ];

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='pt-[149px] mb-28 lg:mb-60 max-w-[540px] mx-auto flex flex-col justify-center items-center pr-4 lg:pr-0'>
      <h3 className='text-[24px] lg:text-[32px] font-medium text-center pb-[16px]'>Frequently Asked Questions</h3>
      <p className='text-[15px] lg:text-[18px] text-grayish text-center max-w-[310px] lg:max-w-[640px] pb-[56px]'>
        Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
      </p>
      <div className='max-w-[320px] lg:min-w-[540px]'>
        {info.map((item, index) => (
          <AccordionItem
            key={index}
            name={item.name}
            description={item.answer}
            isOpen={activeIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
        <hr className='border-0.1 border-gray-300' />
      </div>
      <div className='flex justify-center'>
        <button className='mb-[10px] max-w-[114px] font-medium cursor-pointer mt-[54px] bg-softblue py-2.5 px-5 rounded-md text-white text-[14px] hover:bg-white hover:text-softblue hover:border hover:border-softblue transition-colors'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Accordion;
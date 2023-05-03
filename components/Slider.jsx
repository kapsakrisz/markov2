import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';


const Slider =  ({slides})  => {
  const [current, setCurrent] = useState(0);
  

  

  return (
    <div id='gallery' >
      <h1 className='text-2xl font-bold text-center p-4'>Gallery some of my recent work</h1>
      <div className=''>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className=''>
              
              
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='600'
                  objectFit='cover'
                />
              
              
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Slider;

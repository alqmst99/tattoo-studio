import React from 'react';

//Import testimonial data
import {testimonialData} from '../data';

//Import Swiper react component
import {Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper styles
import 'swiper/css';

//Import motion
import { motion } from 'framer-motion';

//Import Fade In
import {fadeIn} from '../variants';


const Testimonial = () => {
  return <motion.section
  variants={fadeIn('up')} 
  initial='hidden' 
  whileInView={'show'} 
  viewport={{once: false, amount: 0.2}}
  className='py-[40px] g:pb-[160px] lg:pt-0'>
    <div className="container mx-auto">
      <Swiper>
        {testimonialData.map((slide, index)=>{
          //destructure slide
          const {quoteImg, message, name, occupation} =slide;
          return <SwiperSlide key={index}>
            <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
              {/*img */}
            <div className="w-[154px] w-[109px] mb-5">
              <img src={quoteImg} alt="img quote" />
            </div>
            {/*Message */}
            <div className="flex-1 lg:mt-[54px]">
              <div className='text-2xl lg:text-[36px] leading-normal mb-6 lg:mb-12'>{message}</div>
            </div>
           {/* Name & occupation */}
           <div className="flex items-center text-xl lg:text-2xl font-primary">
             {/*Name */}
            <div className="font-semibold">{name}</div>
            <span className="mx-4">|</span>
            {/* occupation */}
            <div className="font-light">{occupation}</div>
           </div>
            </div>
             </SwiperSlide>
        })}
      </Swiper>
    </div>
  </motion.section>;
};

export default Testimonial;

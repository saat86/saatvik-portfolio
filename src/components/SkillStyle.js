import React from 'react'
import { motion } from 'framer-motion';

export default function SkillStyle(props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <img
        src={props.img}
        className=' rounded-full border border-gray-500 object-cover w-24 h-24
        xl:w-30 xl:h-30 filter group-hover:grayscale transition duration-300 ease-in-out'
        
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out group-hover:bg-white h-24 w-24 xl:w-30 xl:h-30 rounded-full z-0  object-contain'>
            <div className='flex items-center justify-center h-full '>
                <p className='text-3xl font-bold text-black opacity-100'>
                    {props.proff}
                </p>
            </div>
        </div>

        </div>
  )
}

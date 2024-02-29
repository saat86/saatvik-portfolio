'use client'
import React from 'react'
import{Cursor,useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles'
import Image from 'next/image';
import myImage from '../assets/saatvikOne.jpeg'
import Link from 'next/link'

export default function Hero() {
    const[text,count]=useTypewriter({

        words:[
            "Hi,The Name Is Saatvik Sagar ",
            "<ScorchingDreamsLightingUp/>",
            "Coding-Them-Into-Reality.jsx"
        ],
        loop:true,
        delaySpeed:2000,

    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'> 
        <BackgroundCircles/>
      {/* <img  className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src ='https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png'/> */}
      <Image 
      src={myImage}
      className='relative rounded-full h-32 w-32 mx-auto object-cover'

      />
      <div className='z-20'> 
        <h2 className='text-sm text-gray-500 pb-2 tracking-[15px]'>SOFTWARE ENGINEER</h2>
      <h1 className='text-5xl lg:text-6xl font-serif px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A" />
        </h1>
     
      <div className='mt-3'> 
      <Link href='#about'>
      <button className='heroButton'>About</button>
      </Link>
       <Link href='#expirence'>
       <button className='heroButton'>Experience</button>
       </Link>
        <Link href='#skills'>
        <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#projects'>
        <button className='heroButton'>Projects</button>
        </Link>
        
        
      </div>
       </div>
    </div>
  )
}

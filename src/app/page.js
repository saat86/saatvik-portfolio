'use client'
import React, { useState, useEffect } from 'react';
import WorkExpirence from '@/components/WorkExpirence';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/projects';
import ContactMe from '@/components/ContactMe';
import { isMobile } from 'react-device-detect';

export default function Home() {
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    const detectMob = () => {
      return window.innerWidth <= 800;
    };

    setIsMobileDevice(detectMob());

    const handleResize = () => {
      setIsMobileDevice(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileDevice]);

  if (isMobileDevice) {
    return (
      <div className='bg-[rgb(36,36,36)] text-white h-screen flex w-full '>
        <p className='w-full m-auto text-center'>  Woah!! I am delicate , Please operate on bigger screen</p>      
      </div>
    );
  }

  return (
    <>
      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-x snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-hidden'>
        <Header />
        <section id='hero' className='snap-start'>
          <Hero />
        </section>
        <section id='about' className='snap-center'>
          <About />
        </section>
        <section id='expirence' className='snap-center'>
          <WorkExpirence />
        </section>
        <section id='skills' className='snap-start'>
          <Skills />
        </section>
        <section id='projects' className='snap-start'>
          <Projects title={['E-comm admin panel', 'kanban board']} />
        </section>
        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>
      </div>
    </>
  );
}
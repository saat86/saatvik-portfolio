"use client";
import React from "react";
import Image from "next/image";
import myImage from "../assets/saatvikOne.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import myImageTwo from '../assets/IMG_20240831_173619_271.jpg'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{
        duration: 2,
      }}
      className="px-5 md:px-10 h-screen" 
    >
      <div className="flex justify-center mb-10">
        <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl sm:text-2xl">
          About
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-center">
        <div className="flex-shrink-0">
          <Image
            src={myImageTwo}
            alt="Saatvik Sagar"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-105 xl:w-[380px] xl:h-[470px] rounded-full object-cover md:rounded-lg mt-3"
          />
        </div>
        <div className="flex-grow mt-10 md:mt-0 md:ml-10 space-y-5 sm:space-y-10 px-5 md:px-0">
          <h4 className="text-3xl sm:text-4xl font-semibold">
            Here is a{" "}
            <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
            background
          </h4>
          <p className="text-sm sm:text-base">
            Meet Saatvik Sagar, a dynamic individual currently pursuing a B.Tech
            degree at Delhi Technological University (DTU). Hailing from Delhi, I
            completed my schooling at Maxfort School. Beyond the academic realm,
            my diverse interests include football, badminton, hitting the gym, and
            immersing myself in music. I am not just a tech enthusiast but also a
            proficient Full Stack Web Developer, having crafted numerous
            intriguing projects that showcase my skills. My journey extends to
            valuable internships with both startups and large corporations,
            providing me with a comprehensive understanding of the professional
            landscape. Eager to kickstart my career, I bring a blend of academic
            excellence, practical experience, and a passion for innovation to the
            table. Ready to embark on new challenges, I am poised to make a
            meaningful impact in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

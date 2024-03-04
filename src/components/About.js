"use client";
import React from "react";
import Image from "next/image";
import myImage from "../assets/saatvikOne.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl  px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute  uppercase tracking-[20px] text-gray-500  text-xl sm:text-2xl top-0.5 sm:top-3.5"
        style={{ top: "1.5rem" }}
      >
        About
      </h3>
      <Image
        src={myImage}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95
      xl:w-[380px] xl:h-[450px]  "
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
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
    </motion.div>
  );
}

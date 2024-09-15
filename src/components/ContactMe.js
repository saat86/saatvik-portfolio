import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function ContactMe() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left max-w-7xl px-10
     justify-evenly mx-auto items-center"
    >
      <h3 className="  uppercase tracking-[20px] text-gray-500 text-2xl xl:mb-10 sm:tracking-[15px]" >
        contact
      </h3>
      
      <div className=" flex flex-col space-y-5   "> 
        <h4 className="text-4xl font-semibold items-center text-center">
          I have got just what you need.
          <span className=" decoration-[#F7AB0A]/50 underline">
            Lets Talk.
          </span>
        </h4>
        <div className="space-y-7">
          <div className="flex items-center justify-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">+91 9818758585</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">sagarsaatvik@gmail.com</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">New Delhi,India</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto ">
            <div className="flex space-x-2">
                < input placeholder="Name" className="contactStyle" type="text" />
                < input placeholder="Email" className="contactStyle" type="email" />
            </div>
            < input placeholder="Subject" className="contactStyle" type="text" />
            <textarea  placeholder="Message"  className="contactStyle"/>
            <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black text-lg font-bold">Submit</button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import Ecomm from "../assets/Ecomm.png";
import kanban from "../assets/kanban.png";
import Image from "next/image";

export default  function Projects (props) {
  const projectno = [1, 2];
  const projectpic = [Ecomm, kanban,];
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left  max-w-full px-10 justify-evenly mx-auto items-center">
      <h3
        className="  uppercase tracking-[20px] text-gray-500 text-2xl "
      
      >
        projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden
       snap-x snap-mandatory z-20  scrollbar-track-gray-400/20
       scrollbar-thumb-[#F7AB0A]/80  scrollbar-thin"
      >
        {projectno.map((project, i) => (
          <div key={i}  className="w-screen flex-shrink-0 snap-center space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <Image src={projectpic[i]} 
                    width={600}
                    height={600}
                    className=" mx-auto"
            />
            <div>
              <h4 className="text-4xl font-semibold items-center justify-center text-center">
                {" "}
                {props.title[i]}
              </h4>
              <p className="text-sm items-center justify-center text-center"></p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px]  
       -skew-y-12 "
      ></div>
    </div>
  );
}

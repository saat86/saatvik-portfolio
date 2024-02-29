import React from "react";
import Ecomm from "../assets/Ecomm.png";
import kanban from "../assets/kanban.png";
import Image from "next/image";

export default  function Projects () {
  const projectno = [1, 2, 3];
  const projectpic = [Ecomm, kanban];
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3
        className="absolute  uppercase tracking-[20px] text-gray-500 text-2xl "
        style={{ top: "3.5rem" }}
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
                case study {i + 1} of {projectno.length}
              </h4>
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

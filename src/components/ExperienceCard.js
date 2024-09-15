import React from 'react'


export default function ExperienceCard(props) {
  return (
    <article className='flex flex-col rounded-lg itmes-center space-y-7 flex-shrink-0
      w-[300px] md:w-[350px] xl:w-[400px] snap-center bg-[#292929] p-6 
      hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden h-fit'>
        <img
        src={props.companyImg}
        className="h-32 w-32 rounded-full object-cover object-center xl:w-[150px] xl:h-[150px]" 
        />
        <div className='px-0 md:px-10'>

        <h4 className='text-4xl font-light'>{props.title}</h4>
        <p className='font-bold text-2xl mt-1'>{props.company}</p>
        <div className='flex space-x-2 my-2'>
        <img
        src={props.skill1}
        className="h-10 w-10 rounded-full " 
        />
          <img
        src={props.skill2}
        className="h-10 w-10 rounded-full " 
        />
          <img
        src={props.skill3}
        className="h-10 w-10 rounded-full " 
        />
        

        </div>
        <p className='uppercase py-2 text-gray-300'>
            {props.date}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>{props.sp1}</li>
            <li> {props.sp2}</li>
            <li>{props.sp3}</li>
        </ul>

        </div>
    </article>
  )
}

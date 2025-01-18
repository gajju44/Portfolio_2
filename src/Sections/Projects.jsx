import React,{useState} from 'react'
import Heading from '../Components/SharedComponents/Heading'
import Project from '../assets/Projects/Project.png'
import { ExternalLink } from 'lucide-react'
import {ProjectData} from '../Data/ProjectData'
import PrimaryBtn from '../Components/SharedComponents/Buttons/PrimaryBtn'

function Projects() {
 
  const [Showmore, setShowmore] = useState(false);

  return (
    <>
      <div id='Work' className='w-full min-h-screen pb-52 px-5 sm:px-12 lg:px-28 xl:px-40'>
        <div className="flex flex-col xl:mx-[80px] gap-10">
          <Heading Number="3" Heading="Some Things I’ve Built" />

          <div className='flex flex-col gap-40'>
            {ProjectData.slice(0, Showmore ? ProjectData.length : 4).map((project, index) => (
              <div key={index} className={`grid geid-cols-1 relative lg:static lg:grid-cols-7 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Image */}
                <a href={project.Link} className={`${index % 2 === 0 ? 'order-1' : 'order-2'}  lg:bg-[#6bffe1] w-full h-full absolute lg:static lg:mt-3 z-0 col-span-4 rounded-[4px]  overflow-hidden`}>
                  <img src={Project} alt="" className="w-full h-full object-cover hover:mix-blend-normal  mix-blend-multiply" />
                </a>

                {/* Text Content */}
                <div className={`col-span-3 p-4 md:p-9 lg:p-0 bg-[#153645e2] h-full w-full lg:bg-transparent lg:w-auto lg:h-auto   z-20 ${index % 2 === 0 ? 'lg:-translate-x-5 order-2' : 'lg:translate-x-5 order-1'} flex flex-col ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                  <p className='text-[#6bffe1] text-sm'>Featured Project</p>
                  <a href={project.Link} className='text-[#cbd5f5] transition-all duration-500  hover:text-[#6bffe1] font-Stack2 text-2xl font-bold mb-6'>
                    {project.title}
                  </a>

                  <div className={`lg:bg-[#112240] text-[#a7b2d1] lg:p-5 ${index % 2 === 0 ? 'lg:pl-8 lg:text-right' : 'lg:pr-8 lg:text-left'} lg:w-[500px] font-Stack2 rounded-md shadow-md`}>
                    {project.description}
                  </div>

                  <div className={`flex lg:w-[525px] flex-wrap ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} mt-6`}>
                    {project.techStack.map((tech, techIndex) => (
                      <p key={techIndex} className={`text-[#9da7c4]    ${index % 2 === 0 ? 'mr-4 lg:mr-0 lg:!ml-4' : 'mr-4 '} text-sm`}>{tech}</p>
                    ))}
                  </div>

                  <a href={project.Link} className={`mt-4 transition-all duration-500 hover:text-[#6bffe1] text-[#cbd5f5] ${index % 2 === 0 ? '' : 'self-start'}`}>
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>

              <PrimaryBtn onClick={() => {setShowmore(!Showmore)}} className={`mt-24 ${ProjectData.length <= 4 ? 'hidden' : ''} mx-auto`}>{Showmore ? 'Show Less' : 'Show More'}</PrimaryBtn>

        </div>
      </div>
    </>
  )
}

export default Projects

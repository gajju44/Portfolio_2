import React from 'react'
import PrimaryBtn from '../Components/SharedComponents/Buttons/PrimaryBtn'
function Intro() {
  return (
    <>
        <div className=' w-full h-screen mb-32  px-5 sm:px-12 lg:px-32 xl:px-40'>
            

<div className='flex flex-col w-full h-full justify-center gap-5 md:gap-6 xl:mx-[90px]'>
            <h1 className='text-[#63ffdb] pl-1'>
            Hi, my name is
            </h1>

            <h2 className=' text-[35px] md:text-[55px] leading-none lg:text-6xl xl:text-7xl font-Stack2 font-bold text-[#cbd5f5]'>
            Tanmay Bhure.
            </h2>
            <h3 className=' text-[35px] md:text-[55px] leading-none lg:text-6xl xl:text-7xl font-Stack2 font-bold text-[#8892b0]'>
            I build things for the web.
            </h3>

            <p className='text-[#8892b0]  md:text-lg font-Stack2 md:w-[560px] '>
            I’m a software engineer specializing in building web and mobile apps. Currently, I’m working as a full-time freelancer and refreshing myself with the latest technologies in the town..
            </p>

            <PrimaryBtn className='mt-8'>Get in Touch</PrimaryBtn>
            </div>

        </div>
    </>
  )
}

export default Intro

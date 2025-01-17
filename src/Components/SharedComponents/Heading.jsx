import React,{memo} from 'react'

const Heading=memo(({Number,Heading})=>{
  return (
    <div className='flex items-center  w-full'>
   <p className=' h-fit text-[#cbd5f5] font-bold    hover:text-[#63ffdb]' style={{fontSize:'clamp(18px, 5vw, 32px)'}}><span className='font-normal h-fit  text-[#63ffdb] ' style={{fontSize:'clamp(12px, 4vw, 22px)'}}>0{Number}. </span>{Heading}</p>
   <span className='flex h-[1px] flex-grow md:w-[300px] bg-[#233554] ml-3 md:ml-5'></span>
   </div>
  )
})

export default Heading

import React,{memo} from 'react'

const PrimaryBtn=memo(({children,className, onClick})=>{
  return (
    <button onClick={onClick} className={`${className} flex items-center justify-center px-7 text-[#63ffdb] transition-colors duration-500 hover:bg-[#64ffda1a] p-4 w-fit h-fit rounded-[4px] bg-transparent border border-[#63ffdb]`}>{children}</button>
  )
}) 

export default PrimaryBtn

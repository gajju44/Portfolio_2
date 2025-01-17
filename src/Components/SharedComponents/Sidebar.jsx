import React,{memo} from 'react'
// import { RightData } from '../../Data/SidebarData';


const Sidebar=memo(({Right=false,SidebarData,icon=true})=>{
  return (
    <div className={`fixed ${Right ? 'right-[50px]' : 'left-[50px]'}  bottom-0 hidden lg:flex flex-col items-center gap-8`}>
      <div className="transform gap-4 flex flex-col">
        
        {SidebarData.map((data,index)=>(
        <a 
          key={index}
          href={data.Href}
          className="relative block text-[#a7b2d1] text-xs tracking-wider  hover:text-[#63ffdb] hover:-translate-y-1 duration-500 transition-all mb-2"
          style={{ writingMode: 'vertical-rl' }}
        >
           
         { icon ? <data.Data size={21} /> : 'gajendra44.connect@gmail.com'}
        </a>
     )) }
      </div>
      <div className="w-[1.5px] h-24 bg-[#a7b2d1]"></div>
    </div>
  );
})

export default Sidebar;
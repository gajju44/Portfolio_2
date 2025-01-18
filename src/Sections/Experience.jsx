import React,{useState,useRef,useEffect} from 'react'
import Heading from '../Components/SharedComponents/Heading'
import { Simsoft,PCCOE } from '../Data/Experience'


const ExperienceData=[
  {
    Name:'Simsoft Technologies',
    Data:Simsoft,
  },
  {
    Name:'PCCOE ACM Student Chapter',
    Data:PCCOE,
  },
 
]


function Experience() {


  const buttonRefs = useRef([]);
const [active,setActive]=useState({top: '', height: '',width: ''});
const [activeData,setActiveData]=useState(Simsoft)

function handleClick(index,Data){

  const button = buttonRefs.current[index];
  const buttonTop = button.offsetTop;
  const buttonLeft = button.offsetLeft;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  console.log(buttonTop,buttonLeft,buttonWidth)

  setActive({
    top: isMobile ? '' : `${buttonTop}px`,
    height: isMobile ? '2px' : `${buttonHeight}px`,
    left: isMobile ? `${buttonLeft}px` : '', 
    width: isMobile ? `${buttonWidth}px` : '2px',
  });


   setActiveData(Data)
}


const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  const handleMediaQueryChange = (e) => {
    setIsMobile(e.matches);
  };

  mediaQuery.addEventListener('change', handleMediaQueryChange);

  setIsMobile(mediaQuery.matches);

  return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
}, []);

  return (
   <>
  <div id='Experience' className="w-screen pb-72 px-5 sm:px-12 lg:px-32 xl:px-40">
        <div className="flex flex-col xl:mx-[130px] gap-10">
          <Heading Number="2" Heading="Where I’ve Worked" />

          <div className='flex flex-col   md:flex-row gap-10 ml-2 '>

            <div className='flex relative overflow-x-auto w-full md:w-auto md:flex-col h-fit border-t md:border-t-0 md:border-l border-[#233554] '>

              <span className={` transition-all duration-500  absolute h-[2px] w-[193px] md:h-[45px] md:w-[2px]  bg-[#64ffda]`}
              style={{
                top: active.top,
                height: active.height,
                width: active.width,
                left: active.left,
              }}></span>
                {ExperienceData.map((data,index)=>(

                <button ref={(el) => (buttonRefs.current[index] = el)} key={index} onClick={()=>handleClick(index,data.Data)} className='p-3 px-5 text-left hover:bg-[#112240] text-[14px] text-[#8892b0] whitespace-nowrap md:whitespace-normal hover:text-[#64ffda]'>{data.Name}</button>
             
             ))}

            </div>

            <div className='flex flex-col gap-1'>

                <div className='flex flex-col gap-2 pt-2'>

                    <p className='text-base md:text-xl font-semibold font-Stack2 '>{activeData.Position} <a href="" className='text-[#64ffda] '>@ <span className='underline-animation relative'>{activeData.Name}</span></a></p>
                    <p className='text-[#8892b0] text-sm'>{activeData.Time}</p> 
                </div>

               
                     <ul className="flex flex-col md:w-[440px] mt-5 gap-2">
                       {  activeData.Work.map((data,index)=>(
                              
                        <li key={index} className="skillList relative ml-5 whitespace-normal font-Stack2 text-[#8892b0]">{data}</li>  

                        ))}       
                      </ul>  


            </div>

          </div>
        </div>
  </div>
   </>
  )
}

export default Experience

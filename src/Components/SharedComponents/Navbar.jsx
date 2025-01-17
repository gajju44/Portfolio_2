import React,{useState,useEffect} from 'react'
import Logo from '../../assets/SharedAssets/Logo'
import { Navlinks } from '../../Data/Navlinks'
import Sidebar from './Sidebar'
import { RightData,LeftData } from '../../Data/SidebarData'
import Menu from '../../assets/SharedAssets/Menu.svg'

function Navbar() {

  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY < lastScrollY && window.scrollY > 0) {
        setIsScrollingUp(true);  // Scrolling up
      } else {
        setIsScrollingUp(false); // Scrolling down or at top
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);


  return (
    <>
        <nav className={`flex w-screen justify-between overflow-x-hidden z-50  transition-all duration-500 ${isScrollingUp ? 'fixed   backdrop-blur-md -translate-y-2  h-[80px] bg-[#0a192fd9] shadow-lg p-0' : 'sticky  translate-y-0 py-2'}   items-center h-fit px-5 md:px-14 `}>

           <a href="/" className='w-9 flex '><Logo  className="hover:fill-[#63ffdb20]" /></a> 
           
            <div className=' hidden lg:flex gap-8'>
                    { Navlinks.map((data,index)=>(
                    <a key={index} href={data.Link} className='text-sm h-fit text-[#cbd5f5] hover:text-[#63ffdb]'><span className='text-[#63ffdb]'>0{index+1}. </span>{data.Text}</a>
                ))}
                    
            </div>

            <button onClick={() =>setShowSidebar(!showSidebar) } className=' lg:hidden text-[#63ffdb]'><img src={Menu} alt="" className='w-10' /></button>

        </nav>

     
        <div className={`fixed top-0 left-0 z-50 flex flex-col gap-8 items-center  w-screen h-screen transition-transform py-36 p-8 duration-500 backdrop-blur-lg bg-[#08152c65] ${showSidebar ? 'translate-x-0' : 'translate-x-full'} z-10`} >

        <button onClick={() =>setShowSidebar(!showSidebar) } className='text-[#63ffdb] absolute right-5 top-10 md:right-14'><img src={Menu} alt="" className='w-10' /></button>

<div className='flex flex-col gap-10'>
        { Navlinks.map((data,index)=>(
                <a key={index} href={data.Link} onClick={() =>setShowSidebar(!showSidebar) } className='text-4xl md:text-5xl hover:text-[#63ffdb] text-left transition-colors font-bold duration-500'>{data.Text}</a>
              ))}
</div>
        </div> 

        <Sidebar SidebarData={RightData} />
        <Sidebar SidebarData={LeftData} Right={true} icon={false} />
    </>
  )
}

export default Navbar

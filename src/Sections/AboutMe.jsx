import React from "react";
import Heading from "../Components/SharedComponents/Heading";
import profile from "../assets/profile.svg"
import { Skills } from "../Data/Skills";

function AboutMe() {
  return (
    <>
      <div id="About" className="w-full min-h-screen pb-64 px-5 sm:px-12 lg:px-32 xl:px-40">
        <div className="flex flex-col xl:mx-[130px] gap-10">
          <Heading Number="1" Heading="About Me" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 xl:gap-14">

            <div className="flex flex-col order-2 lg:order-1 gap-4">

            <p className="text-[#8892b0] text-base md:text-lg font-Stack2 lg:w-[480px] xl:w-[529px] ">
              Hello! My name is Gajendra and I enjoy creating things that live on
              the internet. I am a self-taught software engineer focused on
              creating high performant and scalable apps for the web and mobile.
              Other than developing things that live on the internet, I'm
              constantly exploring other technologies and frameworks that catch
              my interest! Taking web development as a profession not only
              fulfils my pocket but also my heart because it has been my passion
              since the early days of my life.
            </p>
            <p className="text-[#8892b0] text-base md:text-lg font-Stack2 lg:w-[480px] xl:w-[529px] ">
            I started my coding journey 4 years ago and now working as a freelancer for over a year on different platforms. During this period I developed various softwares for mobile and web with web and mobile technologies. I take great interest in web security as well, and during the development of a project I look into the various ascepts of securing the softwares from XSS, SQLI, RCE attacks.

            </p>
            <p className="text-[#8892b0] text-base md:text-lg font-Stack2 lg:w-[480px] xl:w-[529px] ">
            Fast-forward to today, and I’ve had the privilege of working on several projects for a variety of clients. The experience has been a pleasure and made me excited for more projects.
            </p>

                <div className="flex flex-col">

                <p className="text-[#8892b0] text-base md:text-lg font-Stack2 lg:w-[480px] xl:w-[529px] ">
                Here are a few technologies I’ve been working with recently:
                </p>

                    
                     <ul className="grid grid-cols-2 md:w-[450px] mt-5 gap-2">
                    {Skills.map((data,index)=>(
                     <li key={index} className="skillList relative ml-5 text-[13px] text-[#8892b0]">{data}</li>  
                    ))}  
                    </ul>   
                   

                </div>

            </div>

            <div className="wrapper relative order-1 lg:order-2 mb-10 lg:mb-0 ">
                <div className="bg-[#6bffe1] rounded-[4px] overflow-hidden ">
            <img src={profile} alt="" className=" w-[230px] md:w-[300px] hover:mix-blend-normal mix-blend-multiply    " />
            </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

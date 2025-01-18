import React,{useState,useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from '../Components/SharedComponents/IntroAnimation';
import Navbar from '../Components/SharedComponents/Navbar'
import Intro from '../Sections/Intro'
import AboutMe from '../Sections/AboutMe'
import Experience from '../Sections/Experience'
import Projects from '../Sections/Projects'
function Home() {
 
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHero(true);
    }, 2000);
  }, []);

  return (
  <>
  <AnimatePresence>
        {!showHero && (
          <motion.div
            exit={{ opacity:0 }}
            transition={{ duration: 0.5 }}
            className="h-screen fixed bg-[#040a1c] z-[9999999999] flex items-center justify-center inset-0 w-full"
          >
            <IntroAnimation />
          </motion.div>
        )}
      </AnimatePresence>

  <Navbar/>
  <Intro/>
  <AboutMe/>
  <Experience/>
  <Projects/>
  
  </>
  )
}

export default Home

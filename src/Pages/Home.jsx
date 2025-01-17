import React from 'react'
import Navbar from '../Components/SharedComponents/Navbar'
import Sidebar from '../Components/SharedComponents/Sidebar'
import Intro from '../Sections/Intro'
import AboutMe from '../Sections/AboutMe'
import Experience from '../Sections/Experience'
function Home() {
  return (
  <>
  <Navbar/>
  <Intro/>
  <AboutMe/>
  <Experience/>
  
  </>
  )
}

export default Home

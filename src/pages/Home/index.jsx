import React from 'react'
import Hero from '../../sections/hero'
import About from '../../sections/about'
import Experience from '../../sections/experience'
import Projects from '../../sections/projects'
import Contact from '../../sections/contact'
import Footer from '../../sections/footer'
import Accent from '../../components/ui/Accent'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Accent />
    </>
  )
}

export default Home

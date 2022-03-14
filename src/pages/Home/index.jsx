import React from 'react'
import Accent from '../../components/ui/Accent'
import Hero from '../../sections/hero'
import About from '../../sections/about'
import Experience from '../../sections/experience'
import Projects from '../../sections/projects'
import Contact from '../../sections/contact'
import Footer from '../../sections/footer'

const Home = () => {
  return (
    <>
      <Accent />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

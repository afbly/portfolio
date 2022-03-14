import React from 'react'
import Header from '../../components/ui/Header'
import cx from '../../assets/styles/sections/Projects.module.scss'

import absentilyzer from '../../assets/media/img/ab_sentilyzer.png'
import headHunter from '../../assets/media/img/head_hunter_ph.png'
import oqulo from '../../assets/media/img/oqulo_conversion.jpeg'
import adviceGenerator from '../../assets/media/img/advice_generator.jpeg'
import restaurantPOS from '../../assets/media/img/ja_faim.png'
import SectionWrapper from '../../components/layouts/SectionWrapper'
import FeaturedCard from '../../components/ui/FeaturedCard'
import NoteworthyCard from '../../components/ui/NoteworthyCard'

const Projects = () => {
  const featuredProjects = [
    {
      id: 0,
      title: 'AB Sentilyzer',
      description: 'AB Sentilyzer is an aspect-based sentiment analyzer web app created as the final output for my thesis. The system can extract aspects and classify aspect and sentence sentiment polarity.',
      image: absentilyzer,
      technologies: ['Python', 'Django', 'Bootstrap', 'Javascript'],
      repo: 'https://github.com/Thesis-Writing/ABSentilyzer'
    },
    {
      id: 1,
      title: 'HeadHunter PH',
      description: 'A standalone desktop JavaFX application that allows the end-user to add applications, add companies, add job requests, and most importantly, deal with the hiring process.',
      image: headHunter,
      technologies: ['Java', 'JavaFX', 'MySQL'],
      repo: 'https://github.com/afbly/javafx-recruitment-system'
    },
    {
      id: 2,
      title: 'Oqulo React Conversion',
      description: 'My first react activity/challenge during my internship. I was tasked to convert a PSD into a page using basic HTML and CSS then convert the page using React. It was fun and I learned a lot on creating components.',
      image: oqulo,
      technologies: ['React', 'Sass'],
      repo: 'https://github.com/afbly/oqulo-react-conversion'
    }
  ]

  const noteworthyProjects = [
    {
      id: 0,
      title: 'Advice Generator',
      description: 'A frontend mentor challenge using Advice Slip API. The app generates new advice when the button is clicked.',
      image: adviceGenerator,
      technologies: ['HTML & CSS', 'Sass', 'Javascript'],
      repo: 'https://github.com/afbly/advice-generator'
    },
    {
      id: 1,
      title: 'Restaurant POS System',
      description: 'A simple POS system that allows user to manage orders then see the receipt after the process. The system also allows user the number of products in the inventory and add staff to database.',
      image: restaurantPOS,
      technologies: ['JavaFX', 'Java', 'MySQL'],
      repo: '#'
    }
  ]
  return (
    <div className={cx.projects}>
      <SectionWrapper>
        <Header>Projects</Header>
        <div className={cx.projects__body}>
          <FeaturedCard projects={featuredProjects} />
          <div className={cx.projects__body__header}>
            <span />
            <h1>Other Noteworthy Projects</h1>
            <span />
          </div>
          <div className={cx.projects__body__noteworthy}>
            <NoteworthyCard projects={noteworthyProjects}/>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Projects

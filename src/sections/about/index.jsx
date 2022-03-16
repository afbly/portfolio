import React from 'react'
import Header from '../../components/ui/Header'
import Item from '../../components/ui/Item'
import SectionWrapper from '../../components/layouts/SectionWrapper'
import cx from '../../assets/styles/sections/About.module.scss'

const About = () => {
  return (
    <div className={cx.about} id="about">
      <SectionWrapper>
        <Header>About Me</Header>
        <div className={cx.about__paragraph}>
          <p>
            Hello! I’m Afrahly, I’m currently a 4th year Computer Science student
            at Polytechnic University of the Philippines. My interest in web development
            grew as I learn more about web designs and different applications
            I can do with programming.
          </p>
          <p>
            I am also interested in data science and machine learning, and currently
            learning more about the field. My main focus these days is to create web
            development side projects to learn more and update myself about the different
            technologies and how I can build experiences using it. I am also planning to incorporate
            machine learning in one of my side projects soon!
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className={cx.about__paragraph__technologies__container}>
            <div className={cx.about__paragraph__technologies}>
              <Item>Javascript</Item>
              <Item>ReactJS</Item>
              <Item>Node.js</Item>
              <Item>Figma</Item>
            </div>
            <div className={cx.about__paragraph__technologies}>
              <Item>Python</Item>
              <Item>Django</Item>
              <Item>Java</Item>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default About

import React, { useState, useEffect } from 'react'
import { HashLink } from 'react-router-hash-link'
import cx from './Accent.module.scss'

const Accent = () => {
  const [home, setHome] = useState(cx.accent__pagination__inactive)
  const [about, setAbout] = useState(cx.accent__pagination__inactive)
  const [experience, setExperience] = useState(cx.accent__pagination__inactive)
  const [project, setProject] = useState(cx.accent__pagination__inactive)
  const [contact, setContact] = useState(cx.accent__pagination__inactive)
  const [isScrolled, setScrolled] = useState(false)

  // useRef????
  const changeWeight = (curPos) => {
    const homePos = document.getElementById('home').offsetTop
    const aboutPos = document.getElementById('about').offsetTop
    const experiencePos = document.getElementById('experience').offsetTop
    const projectsPos = document.getElementById('projects').offsetTop
    const contactPos = document.getElementById('contact').offsetTop

    const states = [
      { key: homePos, value: setHome },
      { key: aboutPos, value: setAbout },
      { key: experiencePos, value: setExperience },
      { key: projectsPos, value: setProject },
      { key: contactPos, value: setContact }]

    // instead of repeated setWeight, we just call the setPaginationWeight function to change the state of the pagination, looping through the states list
    // adding more sections will be easier
    // eslint-disable-next-line space-before-function-paren
    const setPaginationWeight = (currentPosition) => {
      for (let i = 0; i < states.length; i++) {
        if (states[i].key === currentPosition) {
          states[i].value(cx.accent__pagination__active)
        } else {
          states[i].value(cx.accent__pagination__inactive)
        }
      }
    }

    if (curPos > 120) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (curPos <= homePos) {
      setPaginationWeight(homePos)
    } else if (curPos > homePos && curPos <= aboutPos) {
      setPaginationWeight(aboutPos)
    } else if (curPos > aboutPos && curPos <= experiencePos) {
      setPaginationWeight(experiencePos)
    } else if (curPos > experiencePos && curPos <= projectsPos) {
      setPaginationWeight(projectsPos)
    } else if (curPos > projectsPos && curPos >= contactPos) {
      setPaginationWeight(contactPos)
    }
  }

  const listenScroll = () => {
    const curPos = document.body.scrollTop
    changeWeight(curPos)
  }

  const scrollToTop = () => {
    document.body.scrollTop = 0
  }

  useEffect(() => {
    document.body.addEventListener('scroll', listenScroll)
  })

  return (
    <div className={cx.accent} id="accent">
      <div className={cx.accent__pagination}>
        <span />
        <ul>
          <li className={home}>
            <HashLink smooth to="/#home">
              00.
            </HashLink>
          </li>
          <li className={about}>
            <HashLink smooth to="/#about">
              01.
            </HashLink>
          </li>
          <li className={experience}>
            <HashLink smooth to="/#experience">
              02.
            </HashLink>
          </li>
          <li className={project}>
            <HashLink smooth to="/#projects">
              03.
            </HashLink>
          </li>
          <li className={contact}>
            <HashLink smooth to="/#contact">
              04.
            </HashLink>
          </li>
        </ul>
      </div>
      <div className={cx.accent__email}>
        <div className={cx.accent__email__text}>
          <h3>afableafrahly@gmail.com</h3>
        </div>
        <span />
      </div>
      <div className={isScrolled ? cx.accent__scrollButton : ''} onClick={scrollToTop}>
        <span />
        <span />
      </div>
    </div>
  )
}

export default Accent

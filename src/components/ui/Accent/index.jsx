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

  const changeWeight = (curPos) => {
    const homePos = document.getElementById('home').offsetTop
    const aboutPos = document.getElementById('about').offsetTop
    const experiencePos = document.getElementById('experience').offsetTop
    const projectsPos = document.getElementById('projects').offsetTop
    const contactPos = document.getElementById('contact').offsetTop

    if (curPos > 120) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }

    if (curPos <= homePos) {
      setHome(cx.accent__pagination__active)
      setAbout(cx.accent__pagination__inactive)
      setExperience(cx.accent__pagination__inactive)
      setProject(cx.accent__pagination__inactive)
      setContact(cx.accent__pagination__inactive)
    } else if (curPos > homePos && curPos <= aboutPos) {
      setHome(cx.accent__pagination__inactive)
      setAbout(cx.accent__pagination__active)
      setExperience(cx.accent__pagination__inactive)
      setProject(cx.accent__pagination__inactive)
      setContact(cx.accent__pagination__inactive)
    } else if (curPos > aboutPos && curPos <= experiencePos) {
      setHome(cx.accent__pagination__inactive)
      setAbout(cx.accent__pagination__inactive)
      setExperience(cx.accent__pagination__active)
      setProject(cx.accent__pagination__inactive)
      setContact(cx.accent__pagination__inactive)
    } else if (curPos > experiencePos && curPos <= projectsPos) {
      setHome(cx.accent__pagination__inactive)
      setAbout(cx.accent__pagination__inactive)
      setExperience(cx.accent__pagination__inactive)
      setProject(cx.accent__pagination__active)
      setContact(cx.accent__pagination__inactive)
    } else if (curPos > projectsPos && curPos >= contactPos) {
      setHome(cx.accent__pagination__inactive)
      setAbout(cx.accent__pagination__inactive)
      setExperience(cx.accent__pagination__inactive)
      setProject(cx.accent__pagination__inactive)
      setContact(cx.accent__pagination__active)
    }
  }

  const listenScroll = () => {
    var curPos = document.body.scrollTop
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

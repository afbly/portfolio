import React from 'react'
import Header from '../../components/ui/Header'
import Item from '../../components/ui/Item'
import cx from '../../assets/styles/sections/Experience.module.scss'

const Experience = () => {
  return (
    <div className={cx.experience}>
      <Header>My Experience</Header>
      <div className={cx.experience__body}>
        <div className={cx.experience__container}>
          <div className={cx.experience__container__tab__pane}>
            <div className={cx.experience__container__tab__active}>
              <span>August 99</span>
            </div>
          </div>
          <div className={[cx.experience__container__content]}>
            <div className={[cx.experience__container__content__header]}>
              <h1>Developer Intern <span>@ Oqulo</span></h1>
              <h2>August - September 2021</h2>
            </div>
            <Item>
              Worked on website fixes and tasked to convert wireframes into
              HTML pages using Tailwind, React, and Javascript on one of the
              company’s latest project.
            </Item>
            <Item>
              Held some of daily scrum meetings as scrum master and participated in sprint retrospectives.
            </Item>
            <Item>
              Converted PSD templates into HTML
            </Item>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

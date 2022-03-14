import React from 'react'
import github from '../../assets/media/svg/github.svg'
import linkedin from '../../assets/media/svg/linkedin.svg'
import facebook from '../../assets/media/svg/facebook.svg'
import twitter from '../../assets/media/svg/twitter.svg'
import { ReactComponent as Avatar } from '../../assets/media/svg/avatar.svg'
import cx from '../../assets/styles/sections/Hero.module.scss'

const Hero = () => {
  return (
    <div className={cx.hero}>
      <div className={cx.hero__avatar}>
        <Avatar />
      </div>
      <div className={cx.hero__cta}>
        <div>
          <h2>Hi, my name is</h2>
          <h1>Afrahly Afable.</h1>
          <p>
            I am a web designer and developer.
            Currently, I’m studying at Polytechnic University
            of the Philippines as a 4th year Computer Science student.
            I like web development and I’m also interested in data science.
          </p>
        </div>
        <div className={cx.hero__cta__links}>
          <a href="https://github.com/afbly" className={cx.hero__cta__link}>
            <img src={github} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/afrahlyafable/" className={cx.hero__cta__link}>
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/afrahly" className={cx.hero__cta__link}>
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="/" className={cx.hero__cta__link}>
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

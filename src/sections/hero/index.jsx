import React from 'react'
import github from '../../assets/media/img/github.png'
import linkedin from '../../assets/media/img/linkedin.png'
import facebook from '../../assets/media/img/facebook.png'
import twitter from '../../assets/media/img/twitter.png'
import cx from '../../assets/styles/sections/Hero.module.scss'

const Hero = () => {
  return (
    <div className={cx.hero}>
      <div className={cx.hero__cta}>
        <div>
          <h2>Hi, my name is</h2>
          <h1>Afrahly Afable.</h1>
          <h3>
            I am a web designer and developer.
            Currently, I’m studying at Polytechnic University
            of the Philippines as a 4th year Computer Science student.
            I like web development and I’m also interested in data science.
          </h3>
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

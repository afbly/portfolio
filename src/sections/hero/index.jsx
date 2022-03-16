import React from 'react'
import { ReactComponent as Avatar } from '../../assets/media/svg/avatar.svg'
import { ReactComponent as Github } from '../../assets/media/svg/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/media/svg/linkedin.svg'
import { ReactComponent as Facebook } from '../../assets/media/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/media/svg/twitter.svg'
import cx from '../../assets/styles/sections/Hero.module.scss'

const Hero = () => {
  return (
    <div className={cx.hero} id="home">
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
          <a href="https://github.com/afbly">
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/afrahlyafable/">
            <LinkedIn />
          </a>
          <a href="https://www.facebook.com/afrahly">
            <Facebook />
          </a>
          <a href="/">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

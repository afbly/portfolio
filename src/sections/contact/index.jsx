import React from 'react'
import SectionWrapper from '../../components/layouts/SectionWrapper'
import Header from '../../components/ui/Header'
import { ReactComponent as Github } from '../../assets/media/svg/github.svg'
import { ReactComponent as LinkedIn } from '../../assets/media/svg/linkedin.svg'
import { ReactComponent as Facebook } from '../../assets/media/svg/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/media/svg/twitter.svg'
import Button from '../../components/ui/Button'
import cx from '../../assets/styles/sections/Contact.module.scss'

const Contact = () => {
  return (
    <div className={cx.contact} id="contact">
      <SectionWrapper>
        <Header>Contact Me</Header>
        <div className={cx.contact__cta}>
          <p>
            I’d love to hear from you! Say hello or ask me a question,
            my inbox is always open and I’ll try my best to get back to you!
          </p>
          <Button title="Say Hello!" isLink={true} link="mailto:afableafrahly@gmail.com"/>
          <div className={cx.contact__cta__links}>
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
      </SectionWrapper>
    </div>
  )
}

export default Contact

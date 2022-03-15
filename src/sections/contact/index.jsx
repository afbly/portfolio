import React from 'react'
import SectionWrapper from '../../components/layouts/SectionWrapper'
import Header from '../../components/ui/Header'
import github from '../../assets/media/svg/github.svg'
import linkedin from '../../assets/media/svg/linkedin.svg'
import facebook from '../../assets/media/svg/facebook.svg'
import twitter from '../../assets/media/svg/twitter.svg'
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
            <a href="https://github.com/afbly" className={cx.contact__cta__link}>
              <img src={github} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/afrahlyafable/" className={cx.contact__cta__link}>
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://www.facebook.com/afrahly" className={cx.contact__cta__link}>
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="/" className={cx.contact__cta__link}>
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}

export default Contact

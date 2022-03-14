import React from 'react'
import cx from './Accent.module.scss'

const Accent = () => {
  return (
    <div className={cx.accent}>
      <div className={cx.accent__pagination}>
        <span />
        <ul>
            <li>00.</li>
            <li>01.</li>
            <li>02.</li>
            <li>03.</li>
            <li>04.</li>
        </ul>
      </div>
      <div className={cx.accent__email}>
        <div className={cx.accent__email__text}>
          <h3>afableafrahly@gmail.com</h3>
        </div>
        <span />
      </div>
    </div>
  )
}

export default Accent

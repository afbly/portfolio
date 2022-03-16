import React from 'react'
import PropTypes from 'prop-types'
import cx from './Button.module.scss'

const Button = (props) => {
  if (props.isLink === true) {
    return (
      <div className={cx.button}>
        <div className={[cx.button__primary]}>
          <a href={props.link}>
            {props.title}
          </a>
        </div>
      </div>
    )
  } else if (props.isLink !== true) {
    return (
      <></>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string,
  isLink: PropTypes.bool,
  link: PropTypes.string
}

export default Button

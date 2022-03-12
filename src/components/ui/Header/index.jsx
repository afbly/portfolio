import React from 'react'
import PropTypes from 'prop-types'
import cx from './Header.module.scss'

const Header = (props) => {
  return (
    <div className={cx.header}>
      <h1>{props.children}</h1>
      <div></div>
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.any
}

export default Header

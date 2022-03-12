import React from 'react'
import PropTypes from 'prop-types'
import cx from './SectionWrapper.module.scss'

const SectionWrapper = (props) => {
  return (
    <div className={cx.wrapper}>
      {props.children}
    </div>
  )
}

SectionWrapper.propTypes = {
  children: PropTypes.any
}

export default SectionWrapper

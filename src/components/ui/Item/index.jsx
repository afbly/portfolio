import React from 'react'
import PropTypes from 'prop-types'
import cx from './Item.module.scss'

const Item = (props) => {
  return (
    <div className={cx.item}>
      <div>
        <span className={cx.item__arrow}></span>
      </div>
      <h3>{props.children}</h3>
    </div>
  )
}

Item.propTypes = {
  children: PropTypes.any
}

export default Item

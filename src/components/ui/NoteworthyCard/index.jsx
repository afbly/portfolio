import React from 'react'
import PropTypes from 'prop-types'
import cx from './NoteworthyCard.module.scss'
import github from '../../../assets/media/svg/github_white.svg'

const NoteworthyCard = (props) => {
  return props.projects.map(project => (
    <div key={project.id} className={cx.card}>
      <div className={cx.card__content}>
        <div className={cx.card__content__link}>
          <a href={project.repo}>
            <img src={github} alt='GitHub Repository' />
          </a>
        </div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map(technology => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <img src={project.image} alt='Noteworthy Project' />
    </div>
  ))
}

NoteworthyCard.propTypes = {
  projects: PropTypes.any
}

export default NoteworthyCard

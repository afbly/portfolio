import React from 'react'
import PropTypes from 'prop-types'
import cx from './FeaturedCard.module.scss'
import github from '../../../assets/media/svg/github.svg'

const FeaturedCard = (props) => {
  return props.projects.map(project => (
    <div key={project.id} className={cx.card}>
      <div className={cx.card__image}>
        <div></div>
        <img src={project.image} alt="Featured Project" />
      </div>
      <div className={cx.card__content}>
        <div className={cx.card__content__title}>
          <h2>Featured Project</h2>
          <h1>{project.title}</h1>
        </div>
        <div className={cx.card__content__description}>
          <p>{project.description}</p>
        </div>
        <ul className={cx.card__content__technologies}>
          {project.technologies.map(technology => (
            <li key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <div className={cx.card__content__link}>
          <a href={project.repo}>
            <img src={github} alt='GitHub Repository' />
          </a>
        </div>
      </div>
    </div>
  ))
}

FeaturedCard.propTypes = {
  projects: PropTypes.any
}

export default FeaturedCard

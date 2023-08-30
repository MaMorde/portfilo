import React from 'react'
import styles from './project_card.module.scss'

const ProjectCard = ({
  title,
  description,
  image,
  link
}: {
  title: string
  description: string
  image: string
  link: string
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <img className={styles.image} src={image} alt="" />
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <div className={styles.link}>
        <a role="button" href={link} target="_blank">
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectCard

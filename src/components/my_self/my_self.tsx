import React from 'react'
import styles from './my_self.module.scss'
import cn from 'classnames'

const MySelf = () => (
  <section id="myself" className={cn(styles.root, 'container')}>
    <div className={styles.text}>
      <div className={styles.title}>
        LET ME <span className={styles.purple}>INTRODUCE</span> MYSELF
      </div>
      <div className={styles.description}>
        <p>
          Hi Everyone, I am <i className={styles.purple}>Emil Karamanov</i> from{' '}
          <i className={styles.purple}>Rostov-on-Done, Russia.</i>
        </p>
        <p>
          I graduated from{' '}
          <i className={styles.purple}>Don State Technical University (DSTU)</i>{' '}
          with a{' '}
          <i className={styles.purple}>
            major in Applied Informatics in Economics.
          </i>
        </p>
        <p>
          I am a passionate <i className={styles.purple}>Frontend Developer</i>{' '}
          specializing in creating captivating web experiences using the power
          of <i className={styles.purple}>React and Next.js.</i>
        </p>
        <p>
          With a keen eye for design aesthetics and a drive for delivering{' '}
          <i className={styles.purple}>top-notch user interfaces</i>, I strive
          to bring ideas to life through{' '}
          <i className={styles.purple}>elegant code and</i>{' '}
          <i className={styles.purple}>thoughtful interactions.</i>
        </p>
      </div>
    </div>
    <div className={styles.imageWrapper}>
      <div className={styles.avatarWrapper}>
        <img src="photo.jpg" className={styles.avatar} alt="avatar" />
      </div>
    </div>
  </section>
)

export default MySelf

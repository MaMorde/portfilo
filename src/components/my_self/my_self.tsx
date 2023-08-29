import React from 'react'
import styles from './my_self.module.scss'
import cn from 'classnames'

const MySelf = () => (
  <section className={cn(styles.root, 'container')}>
    <div className={styles.text}>
      <div className={styles.title}>
        LET ME <span className={styles.purple}>INTRODUCE</span> MYSELF
      </div>
      <div className={styles.description}>
        <p>
          Hi Everyone, I am{' '}
          <span className={styles.purple}>Emil Karamanov</span> from{' '}
          <span className={styles.purple}>Rostov-on-Done, Russia.</span>
        </p>
        <p>
          I graduated from{' '}
          <span className={styles.purple}>
            Don State Technical University (DSTU)
          </span>{' '}
          with a{' '}
          <span className={styles.purple}>
            major in Applied Informatics in Economics.
          </span>
        </p>
        <p>
          I am a passionate{' '}
          <span className={styles.purple}>Frontend Developer</span> specializing
          in creating captivating web experiences using the power of{' '}
          <span className={styles.purple}>React and Next.js.</span>
        </p>
        <p>
          With a keen eye for design aesthetics and a drive for delivering{' '}
          <span className={styles.purple}>top-notch user interfaces</span>, I
          strive to bring ideas to life through{' '}
          <span className={styles.purple}>elegant code and</span>{' '}
          <span className={styles.purple}>thoughtful interactions.</span>
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

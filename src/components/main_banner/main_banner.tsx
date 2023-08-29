import React from 'react'
import styles from './main_banner.module.scss'
import Typewriter from 'typewriter-effect'
import cn from 'classnames'
import Image from 'next/image'

const MainBanner = () => {
  return (
    <section className={styles.root}>
      <div className={cn(styles.wrapper, 'container')}>
        <div className={styles.left}>
          <div className={styles.heading}>
            Hi There!{' '}
            <span className={styles.wave} role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </div>

          <div className={styles.name}>
            {`I'M`}
            <strong className={styles.nameStrong}> EMIL KARAMANOV</strong>
          </div>
          <div className={styles.typewriter}>
            <Typewriter
              options={{
                strings: ['React Frontend Developer', 'Freelancer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50
              }}
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image src="./home-main.svg" alt="SVG Image" fill />
        </div>
      </div>
    </section>
  )
}

export default MainBanner

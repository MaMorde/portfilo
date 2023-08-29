import React from 'react'
import styles from './footer.module.scss'
import { AiOutlineGithub } from 'react-icons/ai'
import { BsTelegram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'
import cn from 'classnames'

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={cn(styles.wrapper, 'container')}>
        <div className={styles.by}>Developed by Emil Karamanov</div>
        <div className={styles.copyright}>Copyright © 2023 EK</div>
        <div className={styles.socials}>
          <ul>
            <li>
              <a
                href="https://github.com/MaMorde"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGithub size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/emil_karamanov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram size={24} />
              </a>
            </li>
            <li>
              <a
                href="https://vk.com/emil_karamanov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialVkontakte size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React, { useEffect, useState } from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import cn from 'classnames'
import { AiOutlineGithub } from 'react-icons/ai'
import { Link as ScrollLink } from 'react-scroll'

const Header = () => {
  const [expand, setExpand] = useState(false)
  const [navColored, setNavColored] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColored(true)
    } else {
      setNavColored(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    if (expand) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      window.removeEventListener('scroll', scrollHandler)
      document.body.style.overflow = 'auto'
    }
  }, [expand])

  const toggleExpand = () => {
    setExpand((prev) => !prev)
  }

  return (
    <header
      className={cn('container', styles.root, {
        [styles.navColored]: navColored
      })}
    >
      <ScrollLink className={styles.logo} to="/">
        EK.
      </ScrollLink>
      <nav className={styles.nav}>
        <div
          className={cn(styles.burger, expand && styles.expanded)}
          onClick={toggleExpand}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={cn(
            styles.mobileMenu,
            expand && styles.expanded,
            'container'
          )}
        >
          <ScrollLink
            className={styles.link}
            to="myself"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleExpand}
          >
            About
          </ScrollLink>

          <ScrollLink
            className={styles.link}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleExpand}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            className={styles.link}
            to="resume"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleExpand}
          >
            Resume
          </ScrollLink>
          <a
            className={styles.buttonGit}
            role="button"
            href="https://github.com/MaMorde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={24} />
          </a>
        </div>
        <div className={styles.desktopMenu}>
          <ScrollLink
            className={styles.link}
            to="myself"
            smooth={true}
            duration={500}
            offset={-80}
          >
            About
          </ScrollLink>

          <ScrollLink
            className={styles.link}
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Projects
          </ScrollLink>

          <ScrollLink
            className={styles.link}
            to="resume"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Resume
          </ScrollLink>
          <a
            className={styles.buttonGit}
            role="button"
            href="https://github.com/MaMorde"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub size={24} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header

import React, { useEffect } from 'react'

import styles from './layout.module.scss'
import Header from '~/components/header/header'
import Stars from '~/components/stars/stars'
import Footer from '~/components/footer/footer'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.contentWrapper}>
        <Stars />
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout

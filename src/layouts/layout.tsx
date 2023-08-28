import React, { useEffect } from 'react'

import styles from './layout.module.scss'
import Header from '~/components/header/header'
import Stars from '~/components/stars/stars'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.main}>
      <Header />
      <Stars />
      <div className={styles.content}>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout

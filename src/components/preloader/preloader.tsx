import React from 'react'
import styles from './preloader.module.scss'

const Preloader = ({ load }: { load: boolean }) => (
  <div className={load ? styles.preloader : styles.preloaderNone}></div>
)

export default Preloader

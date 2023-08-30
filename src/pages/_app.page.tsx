import 'styles/globals.scss'
import React, { useEffect, useState } from 'react'

import type { AppProps } from 'next/app'
import Preloader from '~/components/preloader/preloader'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader load={load} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

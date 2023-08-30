import 'styles/globals.scss'
import React, { useEffect, useState } from 'react'

import type { AppProps } from 'next/app'
import Preloader from '~/components/preloader/preloader'
import { NextSeo } from 'next-seo'

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
      <NextSeo title="Karamanov's Portfolio" />
      <Preloader load={load} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

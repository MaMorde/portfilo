import React from 'react'

import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
  Head
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head><link rel="icon" href="/favicon.png" /></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

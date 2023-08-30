import React, { useEffect, useState } from 'react'
import styles from './resume.module.scss'
import pdf from 'public/pdf/resume.pdf'
import cn from 'classnames'
import { AiOutlineDownload } from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Resume = () => {
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  return (
    <section id="resume" className={cn(styles.root, 'container')}>
      <div className={styles.title}>MY RESUME</div>
      <div className={styles.resume}>
        <Document file={pdf}>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={width > 786 ? 1.7 : 0.6}
          />
        </Document>
      </div>
      <div className={styles.link}>
        <a className={styles.download} href={pdf} target="_blank" role='button'>
          <AiOutlineDownload />
          &nbsp;Download CV
        </a>
      </div>
    </section>
  )
}

export default Resume

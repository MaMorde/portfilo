import React from 'react'
import styles from './projects.module.scss'
import cn from 'classnames'
import ProjectCard from './project_card/project_card'

const projects = [
  {
    title: 'Narai Platform',
    description:
      'Unveil the future of B2B commerce on our dynamic Marketplace Platform. Crafted with precision using React, Mantine UI, Next.js, TanStack Query, and axios, this platform redefines industry standards.',
    image: '/projects/narai-market-platform.png',
    link: 'https://narai.market/platform'
  },
  {
    title: 'Narai Landing',
    description:
      'Welcome to our B2B Marketplace, where React, Mantine UI, and Next.js converge to showcase the possibilities of B2B commerce. Engage with an enticing prelude to an innovative business ecosystem.',
    image: '/projects/narai-market.png',
    link: 'https://narai.market'
  },
  {
    title: 'Exness',
    description:
      'Embark on a financial journey with the Exness Informational Site. Powered by React, AWS, Node.js, Material UI, and GraphQL, it seamlessly merges information and technology, enhancing your insights.',
    image: '/projects/exness.png',
    link: 'https://exness.global'
  },
  {
    title: 'YourCarePlus',
    description:
      'Simplify healthcare through our Medical Portal. Seamlessly navigate tools, surveys, and services via React, Next.js, React-Query, and Formik. Experience a refined approach to medical interaction.',
    image: '/projects/yourcareplus.png',
    link: 'https://yourcareplus.ca/'
  },
  {
    title: '42 Works',
    description:
      'Immerse in our company`s narrative with Nuxt.js. Dynamic Server-Side Rendering (SSR) forms the backbone of our corporate site, providing a compelling digital experience.',
    image: '/projects/42works.png',
    link: 'https://42.works'
  }
]

const Projects = () => {
  return (
    <section className={styles.root}>
      <div className={cn(styles.wrapper, 'container')}>
        <div className={styles.title}>
          <span className={styles.purple}>Projects</span> I Worked On
        </div>
        <div
          className={styles.description}
        >{`Here are a few projects I've worked on recently.`}</div>
        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

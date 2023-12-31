import MainBanner from '~/components/main_banner/main_banner'
import MySelf from '~/components/my_self/my_self'
import Projects from '~/components/projects/projects'
import Resume from '~/components/resume/resume'
import Layout from '~/layouts/layout'

export default function Home() {
  return (
    <Layout>
      <MainBanner />
      <MySelf />
      <Projects />
      <Resume />
    </Layout>
  )
}

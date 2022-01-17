import type { NextPage } from 'next'
import { ContainerBlogs } from '../components/organisms/containerBlogs'
import { Layout } from '../components/organisms/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <ContainerBlogs />
    </Layout>
  )
}

export default Home

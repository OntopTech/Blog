import type { NextPage } from 'next'
import { ContainerCards } from '../components/molecules/containerCards'
import { Layout } from '../components/organisms/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <ContainerCards />
    </Layout>
  )
}

export default Home

import type { NextPage } from 'next'
import RecentPosts from '../components/atoms/recentPosts'
import { Layout } from '../components/organisms/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <RecentPosts/>
    </Layout>
  )
}

export default Home

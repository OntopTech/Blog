import { SubContentCard } from '../organisms/subContentCard'
import styles from '../../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import RecentPosts from '../atoms/recentPosts'
import { Categories } from '../atoms/categories'

export const ContainerCards = () => {
  return (
    <section
      className={`${styles.masonryLayout} masonry-layout ${styles.col2Layout} col2-layout ${styles.mt30}`}
    >
      <div className="container-fluid">
        <Row>
          <Col lg="8" className={styles.mt10}>
            <SubContentCard />
          </Col>
          <Col lg="4" className="max-width">
            <RecentPosts />
            <Categories />
          </Col>
        </Row>
      </div>
    </section>
  )
}

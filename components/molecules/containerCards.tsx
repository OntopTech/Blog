import { SubContentCard } from '../organisms/subContentCard'
import styles from '../../styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import RecentPosts from '../atoms/recentPosts'

export const ContainerCards = () => {
  return (
    <div className="containerCards">
      <section
        className={`${styles.masonryLayout} masonry-layout ${styles.col2Layout} col2-layout ${styles.mt30}`}
      >
        <Container>
          <div className={`${styles.containerFluid} container-fluid`}>
            <Row>
              <Col lg="8" className={`${styles.mt10} mt--10`}>
                <SubContentCard />
              </Col>
              <RecentPosts />
            </Row>
          </div>
        </Container>
      </section>
    </div>
  )
}

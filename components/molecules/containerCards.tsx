import { SubContentCard } from '../organisms/subContentCard'
import styles from '../../styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { ShellRecentPost } from '../organisms/shellRecentPost'
import { Categories } from '../atoms/categories'
import { Instagram } from '../atoms/instagram'
import { Tags } from '../atoms/Tags'

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
            <ShellRecentPost />
            <Categories />
            <Instagram />
            <Tags />
          </Col>
        </Row>
      </div>
    </section>
  )
}

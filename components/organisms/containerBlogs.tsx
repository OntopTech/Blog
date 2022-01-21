import { SubContentCard } from '../molecules/subContentCard'
import styles from '../../styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { ShellRecentPost } from '../molecules/shellRecentPost'
import { Categories } from '../molecules/categories'
import { Instagram } from '../molecules/instagram'
import { Tags } from '../molecules/Tags'
import { Pagination } from '../molecules/pagination'
import { Categorie } from '../molecules/Categorie'

export const ContainerBlogs = () => {
  return (
    <>
    <Categorie />
    <section
      className={`${styles.masonryLayout} masonry-layout ${styles.col2Layout} col2-layout ${styles.mt30}`}
    >
      <div className="container-fluid">
        <Row>
          <Col lg="8" className={styles.mt10}>
            <SubContentCard />
            <Pagination />
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
    </>
  )
}

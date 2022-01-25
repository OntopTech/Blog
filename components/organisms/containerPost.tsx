import Categorie from '../../styles/Section.module.css'
import Home from '../../styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { ShellRecentPost } from '../molecules/shellRecentPost'
import { Categories } from '../molecules/categories'
import { Instagram } from '../molecules/instagram'
import { Tags } from '../molecules/Tags'
import { WidgetAuthor } from '../molecules/WidgetAuthor'
import { PostSingle } from '../molecules/PostSingle'
import { PaginationPost } from '../molecules/PaginationPost'
import { WidgetComments } from '../molecules/WidgetComments'

export const ContainerPost = () => {
  return (
    <>
      <section className={`${Categorie.sectionArticulo} ${Home.pt55}`}>
        <div className="container-fluid">
          <Row>
            <Col lg="8" className={Home.mb20}>
              <PostSingle />
              <PaginationPost />
              <WidgetComments />
            </Col>
            <Col lg="4" className="max-width">
              <WidgetAuthor />
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

import Categorie from '../../styles/Section.module.css'
import Home from '../../styles/Home.module.css'
import { Col, Row } from 'react-bootstrap'
import { ShellRecentPost } from '../molecules/shellRecentPost'
import { Categories } from '../molecules/categories'
import { Instagram } from '../molecules/instagram'
import { Tags } from '../molecules/Tags'

export const ContainerPost = () => {
  return (
    <>
      <section className={`${Categorie.sectionArticulo} ${Home.pt55}`}>
        <div className="container-fluid">
          <Row>
            <Col lg="8" className={Home.mb20}>
              hello word
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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Col, Row } from 'react-bootstrap'
import Categories from '../../styles/Categorie.module.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export const Categorie = () => {
  return (
    <section className={Categories.categorie_section}>
      <div className="container-fluid">
        <Row>
          <Col>
            <div className={Categories.categorie_title}>
              <small>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
                Livestyle
              </small>
              <h3>
                Category: <span>Livestyle</span>
              </h3>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}

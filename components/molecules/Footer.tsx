import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import footerStyled from '../../styles/Footer.module.css'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
  return (
    <footer className={footerStyled.footer}>
      <Container fluid>
        <Row>
          <Col lg="12">
            <div className={footerStyled.copyright}>
              <p>
                @ Copyright 2021
                <Link href="/">
                  <a>Ontop</a>
                </Link>
                , All rights reserved.
              </p>
            </div>
            <div className={footerStyled.back}>
              <Link href="/">
                <a className={footerStyled.back_top}>
                  <i>
                    <FontAwesomeIcon icon={faArrowUp} />
                  </i>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

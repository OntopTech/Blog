import { Col, Row } from 'react-bootstrap'
import { NextPost } from '../atoms/NextPost'
import { PreviwPost } from '../atoms/PreviwPost'

export const PaginationPost = () => {
  return (
    <Row>
      <Col md={6}>
        <PreviwPost />
      </Col>
      <Col md={6}>
        <NextPost />
      </Col>
    </Row>
  )
}

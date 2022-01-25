import Image from 'next/image'
import Link from 'next/link'
import PostSimgle from '../../styles/PostSimple.module.css'
import Home from '../../styles/Home.module.css'
import { Col, ListGroup, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { SocialMedia } from '../atoms/SocialMedia'
import { Tags } from '../atoms/Tags'

export const PostSingle = () => {
  return (
    <div className={`${PostSimgle.post_single} post-single `}>
      <div className={`${PostSimgle.post_single_image} post-single-image`}>
        <Image src="/1.jpg" alt="" height={50} width={50} />
      </div>
      <div className={`${PostSimgle.post_single_content} post-single-content`}>
        <Link href="/">
          <a className={`${PostSimgle.categorie} categorie`}>Travel</a>
        </Link>
        <h4>
          What the secrets you will know about jordan petra if visit it one day?{' '}
        </h4>
        <div className={`${PostSimgle.post_single_info} post-single-info`}>
          <ul>
            <li>
              <Link href="/">
                <a>
                  <Image src="/1.jpg" alt="" height={50} width={50} />
                </a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a href="author.html">David Smith</a>
              </Link>{' '}
            </li>
            <li className={`${Home.dot} dot`}></li>
            <li>January 15, 2021</li>
            <li className={`${Home.dot} dot`}></li>
            <li>3 comments</li>
          </ul>
        </div>
      </div>
      <div className={`${PostSimgle.post_single_body} post-single-body`}>
        <p>
          Its sometimes her behaviour are contented. Do listening am eagerness
          oh objection collected. Together gay feelings continue juvenile had
          off Unknown may service subject her letters one bed. Child years noise
          ye in forty. Loud in this in both hold. My entrance me is disposal
          bachelor remember relation
        </p>
        <h5> 1 - Pick a sustainable travel destination </h5>
        <p>
          Oh acceptance apartments up sympathize astonished delightful. Waiting
          him new lasting towards. Continuing melancholy especially so to. Me
          unpleasing impossible in attachment announcing so astonished. What ask
          leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable
          am so visited cordial in offices hearted.
        </p>
        <p>
          Oh acceptance apartments up sympathize astonished delightful. Waiting
          him new lasting towards. Continuing melancholy especially so to. Me
          unpleasing impossible in attachment announcing so astonished. What ask
          leaf may nor upon door. Tended remain my do stairs. Oh smiling amiable
          am so visited cordial in offices hearted.
        </p>
        <Row>
          <Col md={12}>
            <div className={`${PostSimgle.image} image`}>
              <Image src="/" height={50} width={50} alt="" />
              <p>Caption can be used to add info</p>
            </div>
          </Col>
        </Row>
        <p>
          {' '}
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
        <h5>2 - Research before booking</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className={`${PostSimgle.quote} quote`}>
          <div>
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
          <p>
            The man who goes alone can start today; but he who travels with
            another must wait till that other is ready.
          </p>
          <small>Henry David Thoreau.</small>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor Unknown may
          service in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <h5>3 - Pack light , Easy Sustainable Travel Tip</h5>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident. sunt in
          culpa qui officia deserunt mollit anim id e st laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.
        </p>
        <Row>
          <Col md={6}>
            <div className={`${PostSimgle.image} image`}>
              <Image src="/" alt="" height={50} width={50} />
              <p>Caption can be used to add info</p>
            </div>
          </Col>
          <Col md={6}></Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <h5>4 - Be respectful of the environment</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ListGroup variant="flush">
          <ListGroup.Item>Be respectful of the environment </ListGroup.Item>
          <ListGroup.Item>
            Pick a sustainable travel destination instead of a popular one
          </ListGroup.Item>
          <ListGroup.Item>Research before booking</ListGroup.Item>
          <ListGroup.Item>
            Pack light , Easy Sustainable Travel Tip
          </ListGroup.Item>
          <ListGroup.Item>Be respectful of the environment</ListGroup.Item>
        </ListGroup>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className={`${PostSimgle.post_single_footer} post-single-footer`}>
        <Tags />
        <SocialMedia />
      </div>
    </div>
  )
}

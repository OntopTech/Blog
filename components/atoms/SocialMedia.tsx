import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Home from '../../styles/Home.module.css'

export const SocialMedia = () => {
  return (
    <div className={Home.social_media}>
      <ul className="list-inline">
        <li>
          <Link href="/">
            <a className={Home.color_facebook}>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={Home.color_instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={Home.color_twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={Home.color_youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className={Home.color_pinterest}>
              <FontAwesomeIcon icon={faPinterest} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

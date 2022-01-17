import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Helpers from '../../styles/Home.module.css'

export const NewsLettreSocialicones = () => {
  return (
    <div className={`${Helpers.social_icones} social-icones`}>
      <ul className="list-inline">
        <li>
          <Link href="/">
            <a>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </i>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i>
                <FontAwesomeIcon icon={faInstagramSquare} />
                Twitter
              </i>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i>
                <FontAwesomeIcon icon={faTwitter} />
                Instagram
              </i>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <i>
                <FontAwesomeIcon icon={faYoutube} /> Youtube
              </i>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

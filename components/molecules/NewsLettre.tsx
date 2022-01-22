import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Helpers from '../../styles/Home.module.css'
import {
  faFacebook,
  faInstagramSquare,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

export const NewsLettre = () => {
  return (
    <section className={`${Helpers.newslettre} newslettre`}>
      <div className="container-fluid">
        <div
          className={`${Helpers.newslettre_width} newslettre-width text-center`}
        >
          <div className={Helpers.newsletre_info}>
            <h5>Subscribe to our Newslatter</h5>
            <p>
              Sign up for free and be the first to get notified about new posts.
            </p>
          </div>
          <form
            action="#"
            className={`${Helpers.newslettre_form} newslettre-form`}
          >
            <div className={`${Helpers.form_flex} form-flex`}>
              <div className={`${Helpers.form_group} form-group`}>
                <input
                  type="email"
                  className={`${Helpers.form_control} form-control`}
                  placeholder="Your email adress"
                  required
                />
              </div>
              <button
                className={`${Helpers.submit_btn} submit-btn`}
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
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
        </div>
      </div>
    </section>
  )
}

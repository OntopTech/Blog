import Image from 'next/image'
import widget from '../../styles/Widget.module.css'
import section from '../../styles/Section.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const RecentPosts = () => {
  return (
    <div className="col-lg-4 max-width">
      <div className={widget.widget}>
        <div className={section.sectionTitle}>
          <h5>Latest Posts</h5>
        </div>
        <ul className={`${widget.widgetLatestPosts}`}>
          <li className={widget.lastPost}>
            <div className={widget.image}>
              <a href="post-default.html">
                <Image src="/images/1.jpg" alt="..." layout="fill" />
              </a>
            </div>
            <div className={widget.nb}>1</div>
            <div className={widget.content}>
              <p>
                <a href="post-default.html">
                  5 Things I Wish I Knew Before Traveling to Malaysia
                </a>
              </p>
              <small>
                <span className={widget.iconClockAlt}>
                  <FontAwesomeIcon icon={faClock} pull="left" />
                </span>{' '}
                January 15, 2021
              </small>
            </div>
          </li>
          <li className={widget.lastPost}>
            <div className={widget.image}>
              <a href="post-default.html">
                <Image src="/images/2.jpg" alt="..." layout="fill" />
              </a>
            </div>
            <div className={widget.nb}>2</div>
            <div className={widget.content}>
              <p>
                <a href="post-default.html">
                  Everything you need to know about visiting the Amazon.
                </a>
              </p>
              <small>
                <span className={widget.iconClockAlt}>
                  <FontAwesomeIcon icon={faClock} pull="left" />
                </span>{' '}
                January 15, 2021
              </small>
            </div>
          </li>
          <li className={widget.lastPost}>
            <div className={widget.image}>
              <a href="post-default.html">
                <Image src="/images/3.jpg" alt="..." layout="fill" />
              </a>
            </div>
            <div className={widget.nb}>3</div>
            <div className={widget.content}>
              <p>
                <a href="post-default.html">
                  How to spend interesting vacation after hard work?
                </a>
              </p>
              <small>
                <span className={widget.iconClockAlt}>
                  <FontAwesomeIcon icon={faClock} pull="left" />
                </span>{' '}
                January 15, 2021
              </small>
            </div>
          </li>
          <li className={widget.lastPost}>
            <div className={widget.image}>
              <a href="post-default.html">
                <Image src="/images/4.jpg" alt="..." layout="fill" />
              </a>
            </div>
            <div className={widget.nb}>4</div>
            <div className={widget.content}>
              <p>
                <a href="post-default.html">
                  10 Best and Most Beautiful Places to Visit in Italy
                </a>
              </p>
              <small>
                <span className={widget.iconClockAlt}>
                  <FontAwesomeIcon icon={faClock} pull="left" />
                </span>{' '}
                January 15, 2021
              </small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RecentPosts

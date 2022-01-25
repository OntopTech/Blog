import Link from 'next/link'
import Widget from '../../styles/Widget.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import PostSimgle from '../../styles/PostSimple.module.css'
import Home from '../../styles/Home.module.css'

export const NextPost = () => {
  return (
    <div className={`${Widget.widget} widget`}>
      <div className={`${Widget.widget_next_post} widget-next-post`}>
        <div className={Widget.small_post}>
          <div className={Widget.image}>
            <Link href="/">
              <a>
                <Image src="/1.png" alt="" height={50} width={50} />
              </a>
            </Link>
          </div>
          <div className={PostSimgle.content}>
            <div>
              <Link href="/">
                <a className={Home.link}>
                  <FontAwesomeIcon icon={faArrowRight} />
                  Next post
                </a>
              </Link>
            </div>
            <Link href="/">
              <a href="post-default.html">
                How to Choose Outfits for Work for woman and men
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

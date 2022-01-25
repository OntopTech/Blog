import Link from 'next/link'
import widget from '../../styles/Widget.module.css'

import Image from 'next/image'
import { SocialMedia } from '../atoms/SocialMedia'

export const WidgetAuthor = () => {
  return (
    <div className={widget.widget}>
      <div className={widget.widgetAuthor}>
        <Link href="/">
          <a className="image">
            <Image src="/1.jpg" alt="" height={50} width={50} />
          </a>
        </Link>
        <h6>
          <span>Hi, I am david Smith</span>
        </h6>
        <p>
          I am David Smith, husband and father , I love Photography,travel and
          nature. I am working as a writer and blogger with experience of 5
          years until now.
        </p>
        <SocialMedia />
      </div>
    </div>
  )
}

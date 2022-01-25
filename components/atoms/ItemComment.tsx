import Image from 'next/image'
import Widget from '../../styles/Widget.module.css'
import Home from '../../styles/Home.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'

export const ItemComment = () => {
  return (
    <li className={`${Widget.comment_item} comment-item`}>
      <Image src="/1.png" alt="" height={50} width={50} />
      <div className={`${Widget.content} content`}>
        <ul className={`${Widget.info} list-inline`}>
          <li>Mohammed Ali</li>
          <li className={Home.dot}></li>
          <li> January 15, 2021</li>
        </ul>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          at doloremque adipisci eum placeat quod non fugiat aliquid sit
          similique!
        </p>
        <div>
          <Link href="/1.png">
            <a href="#" className={Home.link}>
              {' '}
              <FontAwesomeIcon icon={faReply} /> Reply
            </a>
          </Link>
        </div>
      </div>
    </li>
  )
}

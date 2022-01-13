import widget from '../../styles/Widget.module.css'
import Section from '../../styles/Section.module.css'
import Image from 'next/image'

export const Instagram = () => {
  return (
    <div className={`${widget.widget} widget`}>
      <div className={Section.sectionTitle}>
        <h5>Instagram</h5>
      </div>
      <ul className={widget.widgetInstagram}>
        <li>
          <a className="image" href="#">
            <Image
              src="/images/10.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
        <li>
          <a className="image" href="#">
            <Image
              src="/images/11.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
        <li>
          <a className="image" href="#">
            <Image
              src="/images/12.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
        <li>
          <a className="image" href="#">
            <Image
              src="/images/13.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
        <li>
          <a className="image" href="#">
            <Image
              src="/images/14.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
        <li>
          <a className={widget.image} href="#">
            <Image
              src="/images/15.jpg"
              alt="..."
              width={50}
              height={50}
              layout="responsive"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

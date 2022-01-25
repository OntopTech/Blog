import Link from 'next/link'
import PostSimgle from '../../styles/PostSimple.module.css'

export const Tags = () => {
  return (
    <div className={PostSimgle.tags}>
      <ul className="list-inline">
        <li>
          <Link href="/">
            <a href="blog-grid.html">Travel</a>
          </Link>
        </li>
        <li>
          <Link href="blog-grid.html">
            <a>Nature</a>
          </Link>
        </li>
        <li>
          <Link href="blog-grid.html">
            <a href="blog-grid.html">tips</a>
          </Link>
        </li>
        <li>
          <Link href="blog-grid.html">
            <a href="blog-grid.html">forest</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a href="blog-grid.html">beach</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

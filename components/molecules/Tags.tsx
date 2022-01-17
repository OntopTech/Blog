import widget from '../../styles/Widget.module.css'
import Section from '../../styles/Section.module.css'

export const Tags = () => {
  return (
    <div className={`${widget.widget} widget`}>
      <div className={Section.sectionTitle}>
        <h5>Tags</h5>
      </div>
      <div className={widget.widgetTags}>
        <ul className="list-inline">
          <li>
            <a href="blog-grid.html">Travel</a>
          </li>
          <li>
            <a href="blog-grid.html">Nature</a>
          </li>
          <li>
            <a href="blog-grid.html">tips</a>
          </li>
          <li>
            <a href="blog-grid.html">forest</a>
          </li>
          <li>
            <a href="blog-grid.html">beach</a>
          </li>
          <li>
            <a href="blog-grid.html">fashion</a>
          </li>
          <li>
            <a href="blog-grid.html">livestyle</a>
          </li>
          <li>
            <a href="blog-grid.html">healty</a>
          </li>
          <li>
            <a href="blog-grid.html">food</a>
          </li>
          <li>
            <a href="blog-grid.html">breakfast</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

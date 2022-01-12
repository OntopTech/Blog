import widget from '../../styles/Widget.module.css'
import Section from '../../styles/Section.module.css'

export const Categories = () => {
  return (
    <div className={`${widget.widget} widget`}>
      <div className={Section.sectionTitle}>
        <h5>Categories</h5>
      </div>
      <ul className="widget-categories">
        <li>
          <a href="#" className="categorie">
            Livestyle
          </a>
          <span className="ml-auto">22 Posts</span>
        </li>
        <li>
          <a href="#" className="categorie">
            Travel
          </a>
          <span className="ml-auto">18 Posts</span>
        </li>
        <li>
          <a href="#" className="categorie">
            Food
          </a>
          <span className="ml-auto">14 Posts</span>
        </li>
        <li>
          <a href="#" className="categorie">
            fashion
          </a>
          <span className="ml-auto">10 Posts</span>
        </li>
      </ul>
    </div>
  )
}

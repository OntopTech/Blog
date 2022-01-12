import widget from '../../styles/Widget.module.css'
import Section from '../../styles/Section.module.css'
import Categorie from '../../styles/Categorie.module.css'

export const Categories = () => {
  return (
    <div className={`${widget.widget} widget`}>
      <div className={Section.sectionTitle}>
        <h5 className={Categorie.h5}>Categories</h5>
      </div>
      <ul className={widget.widgetCategories}>
        <li>
          <a href="#" className={Categorie.categorie}>
            Livestyle
          </a>
          <span className="ml-auto">22 Posts</span>
        </li>
        <li>
          <a href="#" className={Categorie.categorie}>
            Travel
          </a>
          <span className="ml-auto">18 Posts</span>
        </li>
        <li>
          <a href="#" className={Categorie.categorie}>
            Food
          </a>
          <span className="ml-auto">14 Posts</span>
        </li>
        <li>
          <a href="#" className={Categorie.categorie}>
            fashion
          </a>
          <span className="ml-auto">10 Posts</span>
        </li>
      </ul>
    </div>
  )
}

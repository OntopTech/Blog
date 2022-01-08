import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Categories from '../../styles/Categorie.module.css'

export const Categorie = () => {
  return (
    <section className={Categories.categorie_section}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <div className={Categories.categorie_title}>
              <small>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <span>
                  <FontAwesomeIcon icon={'arrow-from-left'} />
                </span>
                Livestyle
              </small>
              <h3>
                Category: <span>Livestyle</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

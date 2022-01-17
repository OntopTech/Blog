import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import home from '../../styles/Home.module.css'
export const Pagination = () => {
  return (
    <div className={`${home.pagination} ${home.mt30} pagination`}>
      <ul className="list-inline">
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            <i>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </i>
          </a>
        </li>
      </ul>
    </div>
  )
}

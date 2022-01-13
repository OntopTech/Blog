import widget from '../../styles/Widget.module.css'
import { SubRecentPost } from './subRecentPost'
import { RecentPostOne } from '../atoms/recentPostOne'
import { RecentPostTwo } from '../atoms/recentPostTwo'
import { RecentPostThree } from '../atoms/recentPostThree'
import { RecentPostFour } from '../atoms/recentPostFour'

export const ShellRecentPost = () => {
  return (
    <div className={widget.widget}>
      <SubRecentPost />
      <ul className={`${widget.widgetLatestPosts}`}>
        <li className={widget.lastPost}>
          <RecentPostOne />
        </li>
        <li className={widget.lastPost}>
          <RecentPostTwo />
        </li>
        <li className={widget.lastPost}>
          <RecentPostThree />
        </li>
        <li className={widget.lastPost}>
          <RecentPostFour />
        </li>
      </ul>
    </div>
  )
}

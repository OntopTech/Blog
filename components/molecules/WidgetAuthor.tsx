import Link from 'next/link'
import widget from '../../styles/Widget.module.css'
export const WidgetAuthor = () => {
    return(
        <div className={widget.widget}>
            <div className={widget.widgetAuthor}>
                <Link href="/">
                <a href="author.html" className="image">
                                <Image src="assets/img/author/1.jpg" alt="">
                            </a>
                </Link>
            </div>
        </div>
    )
}
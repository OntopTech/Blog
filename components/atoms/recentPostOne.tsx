import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const RecentPostOne = () => {

    return (
        <>
            <div className={widget.image}>
                <a href="post-default.html">
                    <Image src="/images/1.jpg" alt="..." layout="fill" />
                </a>
            </div>
            <div className={widget.nb}>1</div>
            <div className={widget.content}>
                <p>
                    <a href="post-default.html">
                        5 Things I Wish I Knew Before Traveling to Malaysia
                    </a>
                </p>
                <small>
                    <span className={widget.iconClockAlt}>
                        <FontAwesomeIcon icon={faClock} pull="left" />
                    </span>{' '}
                    January 15, 2021
                </small>
            </div>
        </>
    );
}
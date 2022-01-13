import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const RecentPostThree = () => {

    return (
        <>
            <div className={widget.image}>
                <a href="post-default.html">
                    <Image src="/images/3.jpg" alt="..." layout="fill" />
                </a>
            </div>
            <div className={widget.nb}>3</div>
            <div className={widget.content}>
                <p>
                    <a href="post-default.html">
                        How to spend interesting vacation after hard work?
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
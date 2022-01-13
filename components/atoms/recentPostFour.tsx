import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

export const RecentPostFour = () => {

    return (
        <>
            <div className={widget.image}>
                <a href="post-default.html">
                    <Image src="/images/4.jpg" alt="..." layout="fill" />
                </a>
            </div>
            <div className={widget.nb}>4</div>
            <div className={widget.content}>
                <p>
                    <a href="post-default.html">
                        10 Best and Most Beautiful Places to Visit in Italy
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
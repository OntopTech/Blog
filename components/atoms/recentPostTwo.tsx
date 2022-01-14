import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export const RecentPostTwo = () => {

    return (
        <>
            <div className={widget.image}>
                <Link href="/">
                    <Image src="/images/2.jpg" alt="..." layout="fill" />
                </Link>
            </div>
            <div className={widget.nb}>2</div>
            <div className={widget.content}>
                <p>
                    <Link href="/">
                        Everything you need to know about visiting the Amazon.
                    </Link>
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
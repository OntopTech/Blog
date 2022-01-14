import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export const RecentPostThree = () => {

    return (
        <>
            <div className={widget.image}>
                <Link href="/">
                    <Image src="/images/3.jpg" alt="..." layout="fill" />
                </Link>
            </div>
            <div className={widget.nb}>3</div>
            <div className={widget.content}>
                <p>
                    <Link href="/">
                        How to spend interesting vacation after hard work?
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
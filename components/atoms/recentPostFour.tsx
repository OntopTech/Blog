import Image from "next/image";
import widget from '../../styles/Widget.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

export const RecentPostFour = () => {

    return (
        <>
            <div className={widget.image}>
                <Link href="/">
                    <Image src="/images/4.jpg" alt="..." layout="fill" />
                </Link>
            </div>
            <div className={widget.nb}>4</div>
            <div className={widget.content}>
                <p>
                    <Link href="/">
                        10 Best and Most Beautiful Places to Visit in Italy
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
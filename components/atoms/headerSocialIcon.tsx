import header from '../../styles/Header.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagramSquare,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const HeaderSocialIcon = () => {

    return (
        <>
            <div className={`${header.social_icones} social-icones`}>
                <ul className="list-inline">
                    <li className="p-2 bd-highlight">
                        <Link href="/">
                            <a>
                                <i>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        className={header.icon}
                                    />
                                </i>
                            </a>
                        </Link>
                    </li>
                    <li className="p-2 bd-highlight">
                        <Link href="/">
                            <a>
                                <i>
                                    <FontAwesomeIcon
                                        icon={faInstagramSquare}
                                        className={header.icon}
                                    />
                                </i>
                            </a>
                        </Link>
                    </li>
                    <li className="p-2 bd-highlight">
                        <Link href="/">
                            <a>
                                <i>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className={header.icon}
                                    />
                                </i>
                            </a>
                        </Link>
                    </li>
                    <li className="p-2 bd-highlight">
                        <Link href="/">
                            <a>
                                <i>
                                    <FontAwesomeIcon
                                        icon={faYoutube}
                                        className={header.icon}
                                    />
                                </i>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`${header.search_icon} search-icon`}>
                <i>
                    <FontAwesomeIcon icon={faSearch} />
                </i>
            </div>
        </>
    );
}
import Link from 'next/link'
import Image from 'next/image'
import header from '../../styles/Header.module.css'

export const HeaderLogo = () => {

    return (
        <div className={header.logo}>
            <Link href="/">
                <a>
                    <Image
                        src="/images/OnTop-sinSlogan.png"
                        alt="Picture of the author"
                        height="50"
                        width="150"
                        className={header.logo_white}
                    />
                </a>
            </Link>
        </div>
    );
}
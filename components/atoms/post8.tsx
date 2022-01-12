import styles from '../../styles/Home.module.css'
import Image from 'next/image';

export const Post8 = () => {

    return (
        <div className={`${styles.card} card`}>
            <div className={`${styles.postCard} post-card`}>
                <div className={styles.postCardImage}>
                    <Image src="/images/christmas.jpg" alt="" width={400} height={500} layout="responsive" />
                </div>
                <div className={styles.postCardContent}>
                    <a href="blog-grid.html" className={styles.categorie}> Livestyle</a>
                    <h5>
                        <a href="post-default.html">Christmas Day outfit ideas: what to wear on Christmas Day</a>
                    </h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam atque ipsa laborum sunt distinctio...
                    </p>
                    <div className={`${styles.postCardInfo} post-card-info`}>
                        <ul className={`${styles.listInline} list-inline`}>
                            <li>
                                <a href="author.html">
                                    <Image src="/images/chavo.jpg" alt="" width={50} height={50} />
                                </a>
                            </li>
                            <li>
                                <a href="author.html">David Smith</a>
                            </li>
                            <li className={styles.dot}></li>
                            <li>January 15, 2021</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
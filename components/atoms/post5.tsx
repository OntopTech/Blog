import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export const Post5 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.postCard}>
        <div className={styles.postCardImage}>
          <a href="post-default.html">
            <Image src="/images/chavo.jpg" alt="" width={400} height={300} />
          </a>
        </div>
        <div className={styles.postCardContent}>
          <a href="blog-grid.html" className={styles.categorie}>
            {' '}
            Livestyle
          </a>
          <h5>
            <a href="post-default.html">
              How reading rewires your brain for higher intelligence
            </a>
          </h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quam
            atque ipsa laborum sunt distinctio...
          </p>
          <div className={styles.postCardInfo}>
            <ul className={styles.listInline}>
              <li>
                <a href="author.html">
                  <Image
                    src="/images/chavo.jpg"
                    alt=""
                    width={50}
                    height={50}
                  />
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
  )
}

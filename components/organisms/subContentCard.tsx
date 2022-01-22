import { Post1 } from '../atoms/post1';
import { Post2 } from '../atoms/post2';
import { Post3 } from '../atoms/post3';
import { Post4 } from '../atoms/post4';
import { Post5 } from '../atoms/post5';
import { Post6 } from '../atoms/post6';
import { Post7 } from '../atoms/post7';
import { Post8 } from '../atoms/post8';
import styles from '../../styles/Home.module.css'

export const SubContentCard = () => {

    return (
        <div className={`${styles.cardColumns} card-columns`}>
            <Post1 />
            <Post2 />
            <Post3 />
            <Post4 />
            <Post5 />
            <Post6 />
            <Post7 />
            <Post8 />
        </div>
    );
}
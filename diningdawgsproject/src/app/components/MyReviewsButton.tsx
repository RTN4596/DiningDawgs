import styles from './Button.module.css';
import { useRouter } from 'next/navigation';


export default function MyReviewsButton() {

    const router = useRouter();
    const myReviews = () => {
        router.push('/my-reviews');
    }
    return (
            <button onClick={myReviews} className={styles.button}>My Reviews</button>
    );
}
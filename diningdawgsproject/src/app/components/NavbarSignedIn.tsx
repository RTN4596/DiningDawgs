import styles from './NavbarSignedIn.module.css';
import SignoutButton from './SignoutButton';
import MyReviewsButton from './MyReviewsButton';

export default function NavbarSignedIn() {

    return (
        <nav className={styles.nav}>
            <div className= {styles.div}>
            <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
            </div>
            <div className={styles.div}>
            <MyReviewsButton />
            <SignoutButton />
            </div>
        </nav>
    );

}
import styles from './Nav.module.css';
import SignupButton from './SignupButton';

export default function Nav() { 
    return (
        <nav className={styles.nav}>
            <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
            <SignupButton />
        </nav>
    );
}

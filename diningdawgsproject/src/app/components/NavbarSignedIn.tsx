"use client";

import styles from './NavbarSignedIn.module.css';
import SignoutButton from './SignoutButton';
import MyReviewsButton from './MyReviewsButton';

export default function NavbarSignedIn() {
    return (
        <nav className={styles.nav}>
            <div className="flex items-center gap-2">
                <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
                <img src="/diningdawgslogo.png" className="w-20 h-auto" alt="Dining Dawgs Logo" />
            </div>
            <div className={styles.div}>
            <MyReviewsButton />
            <SignoutButton/>
            </div>
        </nav>
    );

}
"use client";

import styles from './NavbarSignedIn.module.css';
import SignoutButton from './SignoutButton';
import MyReviewsButton from './MyReviewsButton';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NavbarSignedIn() {
    const signout = () => {
        window.location.href = "/login";
    }
    return (
        <nav className={styles.nav}>
            <div className="flex items-center gap-2">
                <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
                <img src="/diningdawgslogo.png" className="w-20 h-auto" alt="Dining Dawgs Logo" />
            </div>
            <div className={styles.div}>
            <MyReviewsButton />
            <Link href="/">
                <SignoutButton/>
            </Link>
            </div>
        </nav>
    );

}
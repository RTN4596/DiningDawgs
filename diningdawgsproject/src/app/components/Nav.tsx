"use client";
import styles from './Nav.module.css';
import SignInButton from './SignInButton';
import Link from 'next/link';

export default function Nav() { 
    return (
        <nav className={styles.nav}>
            <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
            <Link href="/login">
                <SignInButton />
            </Link>
        </nav>
    );
}

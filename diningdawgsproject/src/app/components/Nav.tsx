"use client";
import styles from './Nav.module.css';
import SignInButton from './SignInButton';
import Link from 'next/link';
import Image from "next/image";

export default function Nav() { 
    return (
        <nav className={styles.nav}>
            <div className="flex items-center gap-2">
                <h1 className={styles.h1}>Dining Dawgs Reviews</h1>
                <img src="/diningdawgslogo.png" className="w-20 h-auto" alt="Dining Dawgs Logo" />
            </div>
            <Link href="/login">
                <SignInButton />
            </Link>
        </nav>
    );
}

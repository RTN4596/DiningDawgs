"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Signupp.module.css';
import BackButton from "../components/BackButton";
import Link from 'next/link';

const SignupPage = () => {

    return (
        <div>
            <BackButton />
            <h1 className={styles.h1}>Create an Account</h1>
            <form className={styles.form}>
                <input type="text" className={styles.input} placeholder="Username" />
                <input type="password" className={styles.input} placeholder="Email" />
                <input type="password" className={styles.input} placeholder="Password" />
                <Link href="/authorized">
                    <button type="submit" className={styles.button}>Sign Up</button>
                </Link>
            </form>
        </div>
    )

};

export default SignupPage;
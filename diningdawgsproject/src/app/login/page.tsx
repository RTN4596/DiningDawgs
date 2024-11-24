"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Login.module.css';
import BackButton from "../components/BackButton";
import Link from 'next/link';

const LoginPage = () => {

    return (
        <div>
            <BackButton />
            <h1 className={styles.h1}>Login</h1>
            <form className={styles.form}>
                <input type="text" className={styles.input} placeholder="Username" />
                <input type="password" className={styles.input} placeholder="Password" />
                <Link href="/authorized">
                    <button type="submit" className={styles.button}>Submit</button>
                </Link>
            </form>
            <p className={styles.signUp}>
                <a href="/signup">Don't have an account? Sign up</a>
            </p>
        </div>
    )

};

export default LoginPage;
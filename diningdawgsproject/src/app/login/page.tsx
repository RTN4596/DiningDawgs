"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Login.module.css';

const LoginPage = () => {
  const [isLogged, setIsLogged] = useState(false);
    const router = useRouter();

    const handleSubmit = () => {
        setIsLogged(true);
        router.push('/authorized');
    }
    return (
        <div>
            <h1 className={styles.h1}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" className={styles.input} placeholder="Username" />
                <input type="password" className={styles.input} placeholder="Password" />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <p className={styles.signUp}>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </div>
    )

};

export default LoginPage;
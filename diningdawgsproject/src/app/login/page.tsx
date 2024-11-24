"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { doCredentialLogin } from '../components/Login';
import styles from '../components/Login.module.css';
import BackButton from "../components/BackButton";
import Link from 'next/link';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        const response = await doCredentialLogin(formData);
        if (response?.error) {
            console.log('Invalid username or password');
        } else {
            router.push('/authorized');
        }
    };

    return (
        <div>
            <BackButton />
            <h1 className={styles.h1}>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className={styles.input} 
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    className={styles.input} 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <p className={styles.signUp}>
                <a href="/signup">Don't have an account? Sign up</a>
            </p>
        </div>
    )

};

export default LoginPage;
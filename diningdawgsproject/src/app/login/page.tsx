"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { doCredentialLogin, doLogout } from '../components/Login';
import styles from '../components/Login.module.css';
import BackButton from "../components/BackButton";
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';



const LoginPage = () => {
    console.log("COMES IN HERE")
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
          });

        console.log(result);

        if (result?.error) {
            console.log('Invalid username or password');
        } else {
            console.log('Logged in');
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
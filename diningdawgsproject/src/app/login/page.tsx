"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Login.module.css';
import BackButtonForLogin from "../components/BackButtonForLogin";
import { signIn } from 'next-auth/react';



const LoginPage = () => {
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


        if (result?.error) {
            alert('Invalid username or password');
        } else {
            console.log('Logged in');
            router.push('/authorized');
        }
    };

    return (
        <div>
            <BackButtonForLogin />
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
"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Signup.module.css';
import BackButton from "../components/BackButton";
import Link from 'next/link';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                router.push('/authorized');
            } else {
                const data = await response.json();
                console.log(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.log('Failed to connect to the server. Please try again later.');
        }
    };

    return (
        <div>
            <BackButton />
            <h1 className={styles.h1}>Create an Account</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    className={styles.input} 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    required
                />
                <input 
                    type="email" 
                    className={styles.input} 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    type="password" 
                    className={styles.input} 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className={styles.button}>Sign Up</button>
                
            </form>
        </div>
    )

};

export default SignupPage;
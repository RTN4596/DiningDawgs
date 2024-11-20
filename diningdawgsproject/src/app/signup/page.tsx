"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../components/Signu.module.css';
import Link from 'next/link';

const SignupPage = () => {

    // FOR LATER
//   const [isLogged, setIsLogged] = useState(false);
//     const router = useRouter();

    // FOR LATER
    //const handleSubmit = (event: FormEvent) => {
    //     event.preventDefault();
    //     setIsLogged(true);
    //     router.push('/authorized');
    // }
    return (
        <div>
            <h1 className={styles.h1}>Signup</h1>
            <form className={styles.form}>
                <input type="text" className={styles.input} placeholder="Username" />
                <input type="password" className={styles.input} placeholder="Password" />
                <Link href="/authorized">
                    <button type="submit" className={styles.button}>Submit</button>
                </Link>
            </form>
        </div>
    )

};

export default SignupPage;
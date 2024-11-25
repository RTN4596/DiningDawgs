import styles from './Button.module.css';
import { signOut } from 'next-auth/react';

const SignoutButton = () => {
    const handleSignOut = () => {
        signOut({ callbackUrl: '/login' });
    };
    return (
        <button className={styles.button} onClick={handleSignOut}>
            Sign Out
        </button>
    );
}

export default SignoutButton;
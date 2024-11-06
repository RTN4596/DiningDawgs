import styles from './SignupButton.module.css';
import { CgProfile } from 'react-icons/cg';

export default function SignupButton() {
    return (
        <div className={styles.div}>
        <div>
        <button className={styles.button}>Sign Up</button>
        </div>
        <CgProfile color='black' size={'40px'}/>
        </div>
    );
}
import styles from "./Button.module.css"

export default function SubmitButton() {
    return (
        <div>
            <button className={styles.button}>Submit Review</button>
        </div>
    );
}
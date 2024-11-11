import styles from "./Button.module.css"
import { useRouter } from "next/navigation"


export default function BackButton() {
    const router = useRouter()

    // Handler that uses the router to route back to the home page on click of the button
    const goHome = () => {
        router.push('/')
    }

    return (
        <div>
            <button onClick={goHome} className={styles.button}>Go back</button>
        </div>
    );
}
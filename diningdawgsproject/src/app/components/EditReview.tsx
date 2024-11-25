import styles from "./Button.module.css"
import { useRouter } from 'next/navigation';

interface EditReviewButtonProps {
    review_id: string;
}

export default function EditReviewButton({ review_id }: EditReviewButtonProps) {
    const router = useRouter();
    const editReview = async () => {
        router.push(`/edit-review?review_id=${review_id}`);
    }

    return (
        <div>
            <button className={styles.button} onClick={editReview}>Edit</button>
        </div>
    );
}
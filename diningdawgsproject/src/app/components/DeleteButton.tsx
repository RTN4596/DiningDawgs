import styles from "./Button.module.css"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface DeleteButtonProps {
    updated_date: Date;
}

export default function DeleteButton({ updated_date }: DeleteButtonProps) {
    
    const router = useRouter();
    const { data: session } = useSession();
    console.log(updated_date);
    const deleteReview = async () => {
        // This function will delete the review from the
        // database
        try {
            if (session?.user?.name) {
                const response = await axios.delete(`/api/food/reviews/user/${session.user.name}`, { data: { updated_date } });
                if (response.status === 200) {
                    router.push('/my-reviews');
                } else {
                    console.error('Failed to delete the review');
                }
            } else {
                console.error('User is not logged in');
            }
        } catch (error) {
            console.error('An error occurred while deleting the review:', error);
        }
    }
    
  

    return (
        <div>
            <button className={styles.button} onClick={deleteReview}>Delete</button>
        </div>
    );
}
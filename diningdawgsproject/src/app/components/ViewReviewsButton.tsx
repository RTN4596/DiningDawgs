import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './button.module.css';
import { useSearchParams } from 'next/navigation';

interface MenuItemButtonProps {
    menuItem: string;
}

export default function ViewReviewsButton({ menuItem }: MenuItemButtonProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    const handleClick = () => {
        console.log(diningHall);
        console.log('/view-reviews');
        
        router.push('/view-reviews' + `?diningHall=${diningHall}&menuItemId=${menuItem}`);
    };

    return (
        <button className={styles.button} onClick={handleClick}>
            View Reviews
        </button>
    );
};

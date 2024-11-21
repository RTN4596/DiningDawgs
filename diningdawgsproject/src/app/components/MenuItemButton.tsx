import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './button.module.css';
import { useSearchParams } from 'next/navigation';


export default function MenuItemButton() {
    const router = useRouter();

    
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    const handleClick = () => {
        console.log(diningHall);
        console.log('/add-review?diningHall=' + diningHall);
        
        router.push('/add-review?diningHall=' + diningHall);

    };

    return (
        <button className={styles.button} onClick={handleClick}>
            Add Review
        </button>
    );
};


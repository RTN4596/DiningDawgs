import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './button.module.css';
import { useSearchParams } from 'next/navigation';

interface MenuItemButtonProps {
    menuItem: string;
}

export default function MenuItemButton({ menuItem }: MenuItemButtonProps) {
    const router = useRouter();

    
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    const handleClick = () => {
        console.log(diningHall);

        
        router.push(`/add-review?diningHall=${diningHall}&menuItemId=${menuItem}`);

    };

    return (
        <button className={styles.button} onClick={handleClick}>
            Add Review
        </button>
    );
};


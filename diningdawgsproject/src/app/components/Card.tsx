import React from 'react';
import styles from "./Card.module.css";
import MenuItemButton from './MenuItemButton'; 
import ViewReviewsButton from './ViewReviewsButton';

interface CardProps {
    title: string;
    image: string;
}


const Card: React.FC<CardProps> = ({title, image}) => {
    return (
        <div>
        <div className={styles.Card}>
            <h3 className="text-4xl flex items-center justify-center">{title}</h3>
            <img src={image} alt="" className="card-image" style={{ width: '200px', height: '200px' }} />
        <div className='flex flex-col space-y-12'>
            <MenuItemButton />
            <ViewReviewsButton menuItem={title}/>
        </div>
        </div>
        </div>
    );
};

export default Card;
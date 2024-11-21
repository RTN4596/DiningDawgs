import React from 'react';
import styles from "./Card.module.css";
import MenuItemButton from './MenuItemButton';
import style from './Button.module.css';

interface CardProps {
    title: string;
    image: string;
}


const Card: React.FC<CardProps> = ({title, image}) => {
    return (
        <div>
        <div className={styles.Card}>
            <h3 className="card-title">{title}</h3>
            <img src={image} alt="" className="card-image" style={{ width: '200px', height: '200px' }} />
        <div className='flex flex-col'>
            <MenuItemButton />
            <button>View Reviews</button>
        </div>
        </div>
        </div>
    );
};

export default Card;
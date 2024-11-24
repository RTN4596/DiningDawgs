"use client";

import React from 'react';
import MenuItemButton from '../components/MenuItemButton';
import NavbarSignedIn from '../components/NavbarSignedIn';
import { useRouter, useSearchParams } from 'next/navigation';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MenuItemsPage() {

    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    interface MenuItem {
        id: number;
        food_name: string;
        image: string;
    }
    
    // const menuItems = {
    //     default: [
    //         { id: 1, name: "Default Item 1", image: "/default-item-1.jpg" },
    //         { id: 2, name: "Default Item 2", image: "/default-item-2.jpg" },
    //         { id: 3, name: "Default Item 3", image: "/default-item-3.jpg" },
    //     ],
    //     bolton: [
    //         { id: 1, name: "chicken", image: "/diningdawgslogo.png" },
    //         { id: 2, name: "Bolton Item 2", image: "/bolton-item-2.jpg" },
    //         { id: 3, name: "Bolton Item 3", image: "/bolton-item-3.jpg" },
    //     ],
    //     villagesummit: [
    //         { id: 1, name: "Village Summit Item 1", image: "/village-summit-item-1.jpg" },
    //         { id: 2, name: "Village Summit Item 2", image: "/village-summit-item-2.jpg" },
    //         { id: 3, name: "Village Summit Item 3", image: "/village-summit-item-3.jpg" },
    //     ],
    //     snelling: [
    //         { id: 1, name: "Snelling Item 1", image: "/snelling-item-1.jpg" },
    //         { id: 2, name: "Snelling Item 2", image: "/snelling-item-2.jpg" },
    //         { id: 3, name: "Snelling Item 3", image: "/snelling-item-3.jpg" },
    //     ],
    //     oglethorpe: [
    //         { id: 1, name: "Oglethorpe Item 1", image: "/oglethorpe-item-1.jpg" },
    //         { id: 2, name: "Oglethorpe Item 2", image: "/oglethorpe-item-2.jpg" },
    //         { id: 3, name: "Oglethorpe Item 3", image: "/oglethorpe-item-3.jpg" },
    //     ],
    //     niche: [
    //         { id: 1, name: "Niche Item 1", image: "/niche-item-1.jpg" },
    //         { id: 2, name: "Niche Item 2", image: "/niche-item-2.jpg" },
    //         { id: 3, name: "Niche Item 3", image: "/niche-item-3.jpg" },
    //     ],
    //     // Add more dining halls and their menu items as needed
    // };

    
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get(`/api/${diningHall}`);
                setMenuItems(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (diningHall) {
            fetchMenuItems();
        }
    }, [diningHall]);


    return (     
        <div>
            <NavbarSignedIn />
                <BackButton />
                <div className='flex items-center justify-between mt-6'>
                <h1 className="text-5xl mx-auto">Menu Items</h1>
                <div style={{ width: '150px' }}></div> {/* Placeholder to balance the flex layout */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {menuItems.map(item => (
                    <Card key={item.id} title={item.food_name} image={item.image}>
                    </Card>
                ))}
            </div>
        </div>
    );
};


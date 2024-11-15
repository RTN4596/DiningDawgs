"use client";

import React from 'react';
import MenuItemButton from '../components/MenuItemButton';
import NavbarSignedIn from '../components/NavbarSignedIn';
import { useRouter, useSearchParams } from 'next/navigation';
import BackButton from '../components/BackButton';

export default function MenuItemsPage() {

    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    const menuItems = {
        default: [
            { id: 1, name: "Default Item 1" },
            { id: 2, name: "Default Item 2" },
            { id: 3, name: "Default Item 3" },
        ],
        bolton: [
            { id: 1, name: "Bolton Item 1" },
            { id: 2, name: "Bolton Item 2" },
            { id: 3, name: "Bolton Item 3" },
        ],
        villagesummit: [
            { id: 1, name: "Village Summit Item 1" },
            { id: 2, name: "Village Summit Item 2" },
            { id: 3, name: "Village Summit Item 3" },
        ],
        snelling: [
            { id: 1, name: "Snelling Item 1" },
            { id: 2, name: "Snelling Item 2" },
            { id: 3, name: "Snelling Item 3" },
        ],
        oglethorpe: [
            { id: 1, name: "Oglethorpe Item 1" },
            { id: 2, name: "Oglethorpe Item 2" },
            { id: 3, name: "Oglethorpe Item 3" },
        ],
        niche: [
            { id: 1, name: "Niche Item 1" },
            { id: 2, name: "Niche Item 2" },
            { id: 3, name: "Niche Item 3" },
        ],
        // Add more dining halls and their menu items as needed
    };

    const currentMenuItems = menuItems[diningHall] || menuItems["default"];

    return (     
        <div>
            <NavbarSignedIn />
            <div className='flex items-center justify-between mt-6'>
                <div className='ml-4'>
                    <BackButton />
                </div>
                <h1 className="text-5xl mx-auto">Menu Items</h1>
                <div style={{ width: '150px' }}></div> {/* Placeholder to balance the flex layout */}
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {currentMenuItems.map(item => (
                    <div key={item.id} className="p-20 text-black bg-white rounded m-4 shadow-lg shadow-red-500">
                        <h3>{item.name}</h3>
                        <MenuItemButton />
                    </div>
                ))}
            </div>
        </div>
    );
};


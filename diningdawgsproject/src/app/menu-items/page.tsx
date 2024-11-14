"use client";

import React from 'react';
import MenuItemButton from '../components/MenuItemButton';
import NavbarSignedIn from '../components/NavbarSignedIn';
import { useRouter, useSearchParams } from 'next/navigation';

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
            { id: 1, name: "Dining Hall 2 Item 1" },
            { id: 2, name: "Dining Hall 2 Item 2" },
            { id: 3, name: "Dining Hall 2 Item 3" },
        ],
        villagesummit: [
            { id: 1, name: "Dining Hall 1 Item 1" },
            { id: 2, name: "Dining Hall 1 Item 2" },
            { id: 3, name: "Dining Hall 1 Item 3" },
        ],
        snelling: [
            { id: 1, name: "Dining Hall 2 Item 1" },
            { id: 2, name: "Dining Hall 2 Item 2" },
            { id: 3, name: "Dining Hall 2 Item 3" },
        ],
        oglethorpe: [
            { id: 1, name: "Dining Hall 2 Item 1" },
            { id: 2, name: "Dining Hall 2 Item 2" },
            { id: 3, name: "Dining Hall 2 Item 3" },
        ],
        niche: [
            { id: 1, name: "Dining Hall 2 Item 1" },
            { id: 2, name: "Dining Hall 2 Item 2" },
            { id: 3, name: "Dining Hall 2 Item 3" },
        ],
        // Add more dining halls and their menu items as needed
    };

    const currentMenuItems = menuItems[diningHall] || menuItems["default"];

    return (     
        <div>
            <NavbarSignedIn />
            <h1 className="flex justify-center">Menu Items</h1>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {currentMenuItems.map(item => (
                    <div key={item.id} className="p-20 text-black bg-white rounded m-4 shadow-lg shadow-red-500">
                        <h3>{item.name}</h3>
                        <MenuItemButton />
                    </div>
                ))}
                {/* Add your menu items here */}
            </div>
        </div>
    );
};


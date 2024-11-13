"use client";

import React from 'react';
import MenuItemButton from '../components/MenuItemButton';
import NavbarSignedIn from '../components/NavbarSignedIn';
import { useRouter, useSearchParams } from 'next/navigation';

export default function MenuItemsPage() {

    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";

    return (     
        <div>
            <NavbarSignedIn />
            <h1 className="flex justify-center">Menu Items</h1>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Add your menu items here */}
                <div className="p-20 text-black bg-white rounded m-4 shadow-lg shadow-red-500"><h3>Menu Item 1</h3>
                    <MenuItemButton />
                </div>
                <div className="p-20 text-black bg-white rounded m-4 shadow-lg shadow-red-500"><h3>Menu Item 2</h3>
                    <MenuItemButton />
                </div>
                <div className="p-20 text-black bg-white rounded m-4 shadow-lg shadow-red-500"><h3>Menu Item 3</h3>
                    <div className='flex justify-right'>
                    <MenuItemButton />
                    </div>
                </div>
                {/* Add more menu items as needed */}
            </div>
        </div>
    );
};


"use client";

import Image from "next/image";
import NavbarSignedIn from "../components/NavbarSignedIn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
    return (
        <div>
          <NavbarSignedIn />
          <h1 className="text-center text-5xl mt-6">Dining Halls</h1>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <Link href='/menu-items?diningHall=bolton' className="p-20 text-black bg-white border-2 border-black rounded text-4xl m-4 shadow-lg shadow-red-500"><h2 className="text-center">Bolton</h2></Link>
            <Link href='/menu-items?diningHall=villagesummit' className="p-20 text-black bg-white border-2 border-black rounded text-4xl m-4 shadow-lg shadow-red-500"><h2 className="text-center">Village Summit</h2></Link>
            <Link href='/menu-items?diningHall=oglethorpe' className="p-20 text-black bg-white border-2 border-black rounded text-4xl m-4 shadow-lg shadow-red-500"><h2 className="text-center">Oglethorpe</h2></Link>
            <Link href='/menu-items?diningHall=snelling' className="p-20 text-black bg-white border-2 border-black rounded text-4xl m-4 shadow-lg shadow-red-500"><h2 className="text-center">Snelling</h2></Link>
            <Link href='/menu-items?diningHall=niche' className="p-20 text-black bg-white border-2 border-black rounded text-4xl m-4 shadow-lg shadow-red-500"><h2 className="text-center">The Niche</h2></Link>
          </div>
        </div>
    );
}

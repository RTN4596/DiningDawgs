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
            <Link href='/add-review?diningHall=bolton' className="p-20 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500"><h2>Bolton</h2></Link>
            <Link href='/add-review?diningHall=villagesummit' className="p-20 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500"><h2>Village Summit</h2></Link>
            <Link href='/add-review?diningHall=oglethorpe' className="p-20 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500"><h2>Oglethorpe</h2></Link>
            <Link href='/add-review?diningHall=snelling' className="p-20 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500"><h2>Snelling</h2></Link>
            <Link href='/add-review?diningHall=niche' className="p-20 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500"><h2>The Niche</h2></Link>
          </div>
        </div>
    );
}

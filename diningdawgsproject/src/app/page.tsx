"use client";

import Image from "next/image";
import Nav from "./components/Nav"; 
import NavbarSignedIn from "./components/NavbarSignedIn";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {

  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };
    return (
      <div>
      <Nav />
      <div className="flex flex-col items-center justify-center h-20">
        <div className="flex items-center gap-2">
          <img src="/fork.png" className="w-20 h-auto drop-shadow-[0_4px_6px_rgba(255,255,255,0.6)] translate-y-2" alt="Fork" />
          <h1 className="text-center text-5xl mt-6">Dining Halls</h1>
          <img src="/fork.png" className="w-20 h-auto transform scale-x-[-1] drop-shadow-[0_4px_6px_rgba(255,255,255,0.6)] translate-y-2" alt="Mirrored Fork" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center mt-6">
        <Link
          href='/menu-items?diningHall=bolton'
          className="relative flex justify-center items-center w-full h-full p-20 m-4 text-black bg-white rounded text-4xl shadow-lg shadow-red-500 overflow-hidden group"
        >
          <h2 className="z-10 text-center">Bolton</h2>
          <div className="absolute inset-0 bg-[url('/bolton.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>
        <Link href='/menu-items?diningHall=villagesummit' 
        className="relative flex justify-center items-center w-full h-full p-20 m-4 text-black bg-white rounded text-4xl shadow-lg shadow-red-500 overflow-hidden group"
        >
          <h2 className="z-10 text-center">Village Summit</h2>
          <div className="absolute inset-0 bg-[url('/villagesummit.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>
        <Link href='/menu-items?diningHall=oglethorpe' 
        className="relative flex justify-center items-center w-full h-full p-20 m-4 text-black bg-white rounded text-4xl shadow-lg shadow-red-500 overflow-hidden group"
        >
          <h2 className="z-10 text-center">Ogelthorpe</h2>
          <div className="absolute inset-0 bg-[url('/ohouse.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>
        <Link href='/menu-items?diningHall=snelling' 
        className="relative flex justify-center items-center w-full h-full p-20 m-4 text-black bg-white rounded text-4xl shadow-lg shadow-red-500 overflow-hidden group"
        >
          <h2 className="z-10 text-center">Snelling</h2>
          <div className="absolute inset-0 bg-[url('/snelling.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>
      </div>
      <Link href='/menu-items?diningHall=niche' 
        className="relative flex justify-center items-center w-full h-full p-20 mt-4 mb-4 text-black bg-white rounded text-4xl shadow-lg shadow-red-500 overflow-hidden group"
        >
          <h2 className="z-10 text-center">The Niche</h2>
          <div className="absolute inset-0 bg-[url('/niche.jpg')] bg-cover bg-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
        </Link>
    </div>
    );
}

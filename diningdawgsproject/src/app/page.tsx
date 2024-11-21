"use client";

import Image from "next/image";
import Nav from "./components/Nav"; 
import NavbarSignedIn from "./components/NavbarSignedIn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };
    return (
      <div>
      <Nav />
      <h1 className="text-center text-5xl mt-6">Dining Halls</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="relative group">
          <button className="relative p-20 w-full text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500 overflow-hidden" onClick={handleLoginRedirect}><h2 className="relative z-10">Bolton</h2></button>
          <img
            src="/bolton.jpg"
            alt="Bolton"
            className="absolute inset-0 w-full h-full m-4 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"
          />
        </div>
        <div className="relative group">
          <button className="relative p-20 w-full text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500 overflow-hidden" onClick={handleLoginRedirect}><h2 className="relative z-10">Village Summit</h2></button>
          <img
            src="/villagesummit.jpg"
            alt="Bolton"
            className="absolute inset-0 w-full h-full m-4 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"
          />
        </div>
        <div className="relative group">
          <button className="relative p-20 w-full text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500 overflow-hidden" onClick={handleLoginRedirect}><h2 className="relative z-10">Oglethorpe</h2></button>
          <img
            src="/ohouse.jpg"
            alt="Bolton"
            className="absolute inset-0 w-full h-full m-4 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"
          />
        </div>
        <div className="relative group">
          <button className="relative p-20 w-full text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500 overflow-hidden" onClick={handleLoginRedirect}><h2 className="relative z-10">Snelling</h2></button>
          <img
            src="/snelling.jpg"
            alt="Bolton"
            className="absolute inset-0 w-full h-full m-4 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"
          />
        </div>
      </div>
      <div className="relative group">
        <div className="text-center">
          <button className="p-20 px-60 text-black bg-white rounded text-4xl m-4 shadow-lg shadow-red-500 overflow-hidden" onClick={handleLoginRedirect}><h2 className="relative z-10">The Niche</h2></button>
          <img
            src="/niche.jpg"
            alt="Niche"
            className="absolute px-60 inset-0 w-full h-full m-4 object-cover opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded"
          />
        </div>
      </div>
    </div>
    );
}

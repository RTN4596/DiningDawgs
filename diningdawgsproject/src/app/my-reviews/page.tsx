"use client";

import Image from "next/image";
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

    const reviews = [
        {
            id: 1,
            imageLink: "/burger.jpg",
            title: "Best Burger Ever",
            feedback: "Burger was cooked just right and tasted amazing!",
            rating: 5,
            DiningHall: "Bolton"
        },
        {
            id: 2,
            imageLink: "/scrambledeggs.jpg",
            title: "Solid Scrambled Eggs!",
            feedback: "Eggs were soft and fluffy.",
            rating: 4,
            DiningHall: "Village Summit"
        },
        {
            id: 3,
            imageLink: "/pasta.jpg",
            title: "Disappointing Pasta",
            feedback: "Pasta was very wet. Not to my liking.",
            rating: 2,
            DiningHall: "Oglethorpe"
        },
    ];

    return (
        <div>
            <NavbarSignedIn />
            <BackButton />
            <h1 className="text-center text-5xl mt-6">Your Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center">
            {reviews.map((review) => (
                <div key={review.id} className="bg-gray-300 mt-5 w-80 p-4 shadow-lg shadow-red-500">
                <Image src={review.imageLink} alt="Picture of related food item" width={100} height={100} />
                <h3>{review.title} {review.rating} / 5</h3>
                <p>{review.feedback}</p>
                <p>Dining Hall: {review.DiningHall}</p>
                </div>
            ))}
            </div>
            <div className="flex justify-center mt-6">
            <Image
                src="/diningdawgslogo.png"
                alt="The logo for Dining Dawgs"
                width={400}
                height={400}
            />
            </div>
        </div>
    )

}
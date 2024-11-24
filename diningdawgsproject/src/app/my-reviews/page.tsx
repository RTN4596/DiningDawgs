"use client";

import Image from "next/image";
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import connectMongoDB from "../libs/mongodb"
import User from "@/app/models/user";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs"
import axios from "axios";

interface Review {
    id: number;
    title: string;
    food_name: string;
    rating: number;
    description: string;
    imageLink: string;
    dining_hall: string
}

export default async function Home() {
    const { data: session } = useSession();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            if (session?.user?.id) {
                try {
                    const response = await axios.get(`/api/food/reviews/user/${session.user.id}`);
                    setReviews(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
        };
        fetchReviews();
    }, [session]);

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
                <p>{review.description}</p>
                <p>Dining Hall: {review.dining_hall}</p>
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
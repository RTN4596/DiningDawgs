"use client";

import Image from "next/image";
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import { useRouter } from "next/navigation";
import EditReviewButton from "../components/EditReview";

interface Review {
    review_id: string;
    title: string;
    food_name: string;
    rating: number;
    description: string;
    dining_hall: string
    updated_date: Date;
}

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        if (status === "loading") return;
        if (!session) {
            router.push("/login");
        } else {
            const fetchReviews = async () => {
                try {
                    const response = await axios.get(`/api/food/reviews/user/${session?.user?.name}`);
                    setReviews(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchReviews();
        }
    }, [session, status, router]);

    
    return (
        <div>
            <NavbarSignedIn />
            <BackButton />
            <h1 className="text-center text-5xl mt-6">Reviews for {session?.user?.name || "User"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center">
            {reviews.map((review) => (
                <div key={review.review_id}>
                <div className="bg-gray-300 mt-5 w-80 p-4 shadow-lg shadow-red-500">
                <h3>{review.title} {review.rating} / 5</h3>
                <p>{review.description}</p>
                <p>Dining Hall: {review.dining_hall}</p>
                </div>
                <div className="flex justify-center mt-2">
                <DeleteButton review_id={review.review_id} />
                <EditReviewButton review_id={review.review_id} />
                </div>
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
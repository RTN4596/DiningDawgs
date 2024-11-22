"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";

interface Review {
    id: number;
    food_name: string;
    rating: number;
    description: string;
}

const INITIAL_REVIEWS: Review[] = [
    {
        id: 1,
        food_name: "chicken",
        rating: 5,
        description: "This food was amazing! I loved it!"
    },
    {
        id: 2,
        food_name: "Burger",
        rating: 3,
        description: "This food was okay. I've had better."
    },
    {
        id: 3,
        food_name: "Burger",
        rating: 4,
        description: "This food was pretty good. I would eat it again."
    }
];

const ViewReviewsPage = () => {
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall");
    const food_name = searchParams.get("menuItemId");
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get(`/api/${diningHall}/${food_name}`);
                setReviews(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (food_name) {
            fetchReviews();
        }
    }, [food_name]);


    return (
        <div>
            <NavbarSignedIn />
            <BackButton />
            <h1 className="text-center text-5xl mt-6">Reviews for Menu Item {food_name}</h1>
            {reviews.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 justify-items-center">
                    {reviews.map((review) => (
                        <li key={review.id} className="bg-gray-300 mt-5 w-80 p-4 shadow-lg shadow-red-500">
                            <p className="text-lg">Menu Item: {review.food_name}</p>
                            <p>Rating: {review.rating}</p>
                            <p>Description: {review.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <h3 className="flex justify-center text-white text-lg">No reviews available for this menu item.</h3>
            )}
        </div>
    );
};

export default ViewReviewsPage;
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";

interface Review {
    id: number;
    menuItemId: number;
    rating: number;
    comment: string;
}

const ViewReviewsPage = () => {
    const searchParams = useSearchParams();
    const menuItemId = searchParams.get("menuItemId");
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        if (menuItemId) {
            // Fetch reviews for the given menuItemId
            fetch(`/api/reviews?menuItemId=${menuItemId}`)
                .then((response) => response.json())
                .then((data) => setReviews(data))
                .catch((error) => console.error("Error fetching reviews:", error));
        }
    }, [menuItemId]);

    console.log(menuItemId);

    return (
        <div>
            <NavbarSignedIn />
            <BackButton />
            <h1 className="flex justify-center p-4">Reviews for Menu Item {menuItemId}</h1>
            {reviews.length > 0 ? (
                <ul>
                    {reviews.map((review) => (
                        <li key={review.id} className="">
                            <p>Rating: {review.rating}</p>
                            <p>Comment: {review.comment}</p>
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
"use client";
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import buttonstyles from "../components/Button.module.css";
import Image from "next/image";

// May need this later but doesn't do anything right now
type Review = {
    title: string;
    feedback: string;
    rating: number;
}

type DiningHallData = {
    bolton: string;
    villagesummit: string;
    oglethorpe: string;
    snelling: string;
    niche: string;
};

const diningHallImages: DiningHallData = {
    bolton: "/bolton.jpg",
    villagesummit: "/villagesummit.jpg",
    oglethorpe: "/ohouse.jpg",
    snelling: "/snelling.jpg",
    niche: "/niche.jpg",
};


export default function Page() {
    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0);
    const router = useRouter();
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";
    const imageSrc = diningHallImages[diningHall as keyof DiningHallData];

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const feedbackChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setFeedback(event.target.value)
    }

    const starChangeHandler = (value: number) => {
        setRating(value)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        console.log(JSON.stringify({
            title,
            feedback,
            rating,
        }));

        setTitle('');
        setFeedback('');
        setRating(0);

        router.push('/');
    };

    return (
        <div>
        <NavbarSignedIn />
        <div className="flex h-screen">
            <div className="flex-grow p-4 relative">
            
            <BackButton />
                <div className="absolute top-0 right-0">
                <Image className="ml-40 w-1/2 h-auto"
                    src="/diningdawgslogo.png"
                    alt="The logo for Dining Dawgs"
                    width={400}
                    height={400}
                />
                </div>
      
            <form className="ml-1 py-4 w-3/4 mt-64" onSubmit={handleSubmit}>
                <label className="text-white text-xl" htmlFor="title">Title</label>
                    <input className="w-3/4 h-10 p-2 block border-4 border-red-700 rounded-md text-base mb-4"
                        id="title"
                        type="text"
                        placeholder="Enter the title of your review"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                <label className="text-white text-xl" htmlFor="feedback">Feedback</label>
                    <textarea className="w-full h-24 p-2 block border-4 border-red-700 rounded-md text-base"
                        id="feedback"
                        placeholder="Leave your comments here"
                        value={feedback}
                        onChange={feedbackChangeHandler}
                    />
                <label className="text-white mt-4 block">Rating</label>
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => starChangeHandler(star)}
                                className={`cursor-pointer text-5xl ${
                                    rating >= star ? "text-yellow-500" : "text-gray-400"
                                }`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <button type="button" className={buttonstyles.button} onClick={handleSubmit}>Submit Review</button>
            </form>
            </div>
            <div className="relative w-1/4 max-h-screen m-6">
            <Image
                src={imageSrc}
                alt={`${diningHall} image`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
            />
            </div>
            
        </div>
        </div>
    );
}
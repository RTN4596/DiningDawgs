"use client";
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/SubmitButton";
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
            <BackButton />
            <div className="relative w-full h-64 mb-4">
            <Image
                src={imageSrc}
                alt={`${diningHall} image`}
                layout="fill"
                objectFit="cover"
            />
            </div>
            <Image className="ml-40"
                src="/diningdawgslogo.png"
                alt="The logo for Dining Dawgs"
                 width={300}
                height={300}
            />
            <div className="left-0 bottom-10 flex flex-col py-4 ml-4 h-10">
            <form className="ml-1 py-4 w-1/2" onSubmit={handleSubmit}>
                <label className="text-white" htmlFor="title">Title</label>
                    <input className="w-full h-10 p-2 block border-4 border-red-700 rounded-md text-base mb-4"
                        id="title"
                        type="text"
                        placeholder="Enter the title of your review"
                        value={title}
                        onChange={titleChangeHandler}
                    />
                <label className="text-white" htmlFor="feedback">Feedback</label>
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
            
        </div>
    );
}
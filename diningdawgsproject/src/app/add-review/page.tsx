"use client";
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import buttonstyles from "../components/Button.module.css";
import Image from "next/image";
import axios from "axios";

// May need this later but doesn't do anything right now
type Review = {
    title: string;
    description: string;
    rating: number;
    image: string;
    diningHall: string;
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
    const [description, setdescription] = useState('');
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";
    const food_name = searchParams.get("menuItemId");
    const imageSrc = diningHallImages[diningHall as keyof DiningHallData];

    console.log(food_name); 

    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const descriptionChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setdescription(event.target.value)
    }

    const starChangeHandler = (value: number) => {
        setRating(value)
    }

    const imageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        console.log(JSON.stringify({
            title,
            description,
            rating,
            image,
            diningHall
        }));

        try {
            const response = await fetch(`/api/${diningHall}/${food_name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, food_name, diningHall, rating }),
            });

            if (response.ok) {
                console.log('Review submitted successfully!');
            } else {
                const data = await response.json();
                console.log(data.message || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            console.log('Failed to connect to the server. Please try again later.');
        }

        setTitle('');
        setdescription('');
        setRating(0);

        router.push('/authorized');
    };

    return (
        <div>
        <NavbarSignedIn />
        <BackButton />
        <div className="flex h-screen">
            <div className="flex-grow p-4 relative pt-6">
            
            
                <div className="absolute top-0 right-0">
                <Image className="ml-40 w-1/2 h-auto drop-shadow-[0_4px_6px_rgba(255,255,255,0.6)]"
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
                <label className="text-white text-xl" htmlFor="description">Description</label>
                    <textarea className="w-full h-24 p-2 block border-4 border-red-700 rounded-md text-base"
                        id="description"
                        placeholder="Leave your comments here"
                        value={description}
                        onChange={descriptionChangeHandler}
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
                    <label className="text-white mt-4 block" htmlFor="image">Upload Image</label>
                    <input
                        className="w-full p-2 block border-4 border-red-700 rounded-md text-base mb-4 bg-white"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(event) => {
                            const file = event.target.files?.[0];
                            if (file) {
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setImage(reader.result as string);
                                    imageChangeHandler(event);
                                };
                                reader.readAsDataURL(file);
                            }
                        }}
                    />
                    <button type="button" className={buttonstyles.button} onClick={handleSubmit}>Submit Review</button>
            </form>
            </div>
            <div className="relative w-1/4 max-h-screen m-6">
            <div className="absolute inset-0 -z-10 bg-white rounded-xl shadow-lg scale-105 translate-y-2"></div>
            <Image
                src={imageSrc}
                alt={`${diningHall} image`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg translate-y-2"
            />
            </div>

        </div>
        </div>
    );
}
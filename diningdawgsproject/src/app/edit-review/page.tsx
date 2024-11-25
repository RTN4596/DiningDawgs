"use client";
import { useState, ChangeEvent, FormEvent } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useSession } from "next-auth/react"
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import buttonstyles from "../components/Button.module.css";
import Image from "next/image";
import axios from "axios";


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
   
    const { data: session } = useSession();
    const [title, setTitle] = useState('');
    const [description, setdescription] = useState('');
    const [rating, setRating] = useState(0);
    const [image, setImage] = useState('');
    const router = useRouter();
    const username = session?.user?.name;
    const searchParams = useSearchParams();
    const diningHall = searchParams.get("diningHall") || "default";
    const food_name = searchParams.get("menuItemId");
    const updated_date = searchParams.get("updated_date");
    const imageSrc = diningHallImages[diningHall as keyof DiningHallData];

    const fetchData = async () => {
        const response = await fetch(`/api/${diningHall}/${food_name}/${updated_date}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({food_name, diningHall, username, updated_date }),
        });
    }
    
    console.log(fetchData());


    const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const descriptionChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setdescription(event.target.value)
    }

    const starChangeHandler = (value: number) => {
        setRating(value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        console.log(JSON.stringify({
            title,
            description,
            rating,
            image,
            diningHall,
            username
        }));

        try {

            const response = await fetch(`/api/${diningHall}/${food_name}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description, food_name, diningHall, rating, username }),
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
}
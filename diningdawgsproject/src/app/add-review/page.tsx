"use client";
import { useState } from "react"
import { useRouter } from "next/navigation"
import NavbarSignedIn from "../components/NavbarSignedIn";
import BackButton from "../components/BackButton";
import SubmitButton from "../components/SubmitButton";

export default function Page() {

    return (
        <div>
            <NavbarSignedIn />
            <BackButton />
            <div className="left-0 bottom-10 flex flex-col py-4 ml-4 h-10">
            <form className="ml-1 py-4 w-1/2">
                <label htmlFor="title">Title</label>
                    <input className="w-full h-10 p-2 block border-4 border-red-700 rounded-md text-base mb-4"
                        id="title"
                        type="text"
                        placeholder="Enter the title of your review"
                    />
                <label htmlFor="feedback">Feedback</label>
                    <textarea className="w-full h-24 p-2 block border-4 border-red-700 rounded-md text-base"
                        id="feedback"
                        placeholder="Leave your comments here"
                    />
            </form>
            <SubmitButton />
            </div>
            
        </div>
    );
}
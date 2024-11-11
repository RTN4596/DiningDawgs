"use client";

import Image from "next/image";
import NavbarSignedIn from "../components/NavbarSignedIn";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    return (
        <div>
            <NavbarSignedIn />
        </div>
    )

}
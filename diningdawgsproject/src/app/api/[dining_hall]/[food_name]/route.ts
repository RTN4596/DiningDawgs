import connectMongoDB from "@/app/libs/mongodb";
import Food from "@/app/models/food";
import Review from "@/app/models/review";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";    

interface RouteParams {
    dining_hall: string;
    food_name: string;
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
    const { food_name, dining_hall } = await params;
    await connectMongoDB();
    const items = await Review.find({food_name , dining_hall });
    return NextResponse.json(items);
}

export async function POST(request: NextRequest, context: {params: RouteParams}) {
    const { params } = context;
    const { dining_hall, food_name } = await params;
    console.log(dining_hall, food_name);
    const { title, rating, description, image,  username} = await request.json();
    await connectMongoDB();
    const review = await Review.create({title, image, username, rating, description, dining_hall, food_name });
    return NextResponse.json(review);
}

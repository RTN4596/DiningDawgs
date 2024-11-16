import connectMongoDB from "../../../libs/mongodb";
import Food from "../../../models/food";
import Review from "../../../models/review";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";    

interface RouteParams {
    params: {
        dining_hall: string,
        food_name: string};
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const { food_name, dining_hall } = params;
    await connectMongoDB();
    const items = await Review.find({food_name , dining_hall });
    return NextResponse.json(items);
}

export async function POST(request: NextRequest, {params}: RouteParams) {
    const { dining_hall, food_name } = params;
    const { title, rating, description, image,  user_id} = await request.json();
    await connectMongoDB();
    const review = await Review.create({title, image, user_id, rating, description, dining_hall, food_name });
    return NextResponse.json(review);
}

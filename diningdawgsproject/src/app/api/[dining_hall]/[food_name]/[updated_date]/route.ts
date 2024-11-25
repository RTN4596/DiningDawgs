import connectMongoDB from "@/app/libs/mongodb";
import Review from "@/app/models/review";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";    

interface RouteParams {
    dining_hall: string;
    food: string;
    updated_date: string;
    username: string;
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
    console.log(params)
    const { dining_hall, food, updated_date, username } = await params;
    await connectMongoDB();
    console.log(dining_hall, food, updated_date, username);
    const items = await Review.findOne({food , dining_hall, updated_date, username});
    console.log(items);
    return NextResponse.json(items);
}
export async function PUT(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const { dining_hall, food, updated_date, username } =  await params;

    if (!request.body) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }

    const { title, rating, description } = await request.json();

    try {
        await connectMongoDB();
        await Review.updateOne({ dining_hall, food, username, updated_date }, { title, rating, description });
        return NextResponse.json({ message: 'Updated review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}
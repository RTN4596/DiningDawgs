import connectMongoDB from "@/app/libs/mongodb";
import Review from "@/app/models/review";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";    

interface RouteParams {
    dining_hall: string;
    food_name: string;
    review_id: string;
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
   const username = 'carter';
    console.log(params)
    const { dining_hall, food_name, review_id, } = await params;
    await connectMongoDB();
    
    console.log(dining_hall, food_name, review_id, username);
    const items = await Review.findOne({food_name , dining_hall, review_id, username});
    console.log(items);
    return NextResponse.json(items);
}
export async function PUT(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const { dining_hall, food_name, review_id } =  await params;
    const username = 'carter';
    if (!request.body) {
        return NextResponse.json({ error: 'Missing food_name in body' }, { status: 400 });
    }

    const { title, rating, description } = await request.json();

    try {
        await connectMongoDB();
        await Review.updateOne({ dining_hall, food_name, username, review_id }, { title, rating, description });
        return NextResponse.json({ message: 'Updated review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}
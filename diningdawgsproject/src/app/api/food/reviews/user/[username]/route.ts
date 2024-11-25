import connectMongoDB from "../../../../../libs/mongodb";
import Review from "@/app/models/review";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";   

interface RouteParams {
    username: string;
    date: Date;
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
    const { username } = await params;

    try {
        await connectMongoDB();
        const items = await Review.find({username});
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch user reviews' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const { username } =  await params;
    const { date } = await request.json();

    if (!request.body) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }

    

    try {
        await connectMongoDB();
        await Review.deleteOne({ username, date });
        return NextResponse.json({ message: 'Deleted review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}

export async function PUT(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const { username } =  await params;

    if (!request.body) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }

    const { food, title, rating, description } = await request.json();

    try {
        await connectMongoDB();
        await Review.updateOne({ username, food }, { title, rating, description });
        return NextResponse.json({ message: 'Updated review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}
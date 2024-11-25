import connectMongoDB from "../../../../../libs/mongodb";
import Review from "@/app/models/review";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";   

interface RouteParams {
    username: string;
    review_id: string;
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
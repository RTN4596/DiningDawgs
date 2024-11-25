import connectMongoDB from "@/app/libs/mongodb";
import Review from "@/app/models/review";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


interface RouteParams {
    review_id: string;
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');
    console.log(params)
    const {review_id} = await params;
    await connectMongoDB();
    
    console.log(review_id, username);
    const items = await Review.findOne({ review_id, username });
    console.log(items);
    return NextResponse.json(items);
}
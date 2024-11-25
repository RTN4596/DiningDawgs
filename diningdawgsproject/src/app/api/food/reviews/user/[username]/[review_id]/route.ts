import { NextResponse } from "next/server";
import { NextRequest } from "next/server";   
import connectMongoDB from "../../../../../../libs/mongodb";
import Review from "@/app/models/review";


interface RouteParams {
    username: string;
    review_id: string;
}

export async function DELETE(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const { username, review_id } =  await params;

    if (!request.body) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }

    

    try {
        await connectMongoDB();
        await Review.deleteOne({ username, review_id });
        return NextResponse.json({ message: 'Deleted review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}

export async function GET(request: NextRequest, context: { params : RouteParams}) {
    const { params } = context;
    const { username, review_id } = await params;

    await connectMongoDB();
    const items = await Review.findOne({ username, review_id });
    return NextResponse.json(items);
};

export async function PUT(request: NextRequest, context: {params : RouteParams}) {
    const { params } = context;
    const {review_id , username} =  await params;
    if (!request.body) {
        return NextResponse.json({ error: 'Missing food_name in body' }, { status: 400 });
    }

    const { title, rating, description } = await request.json();

    try {
        await connectMongoDB();
        await Review.updateOne({ username, review_id }, { title, rating, description });
        return NextResponse.json({ message: 'Updated review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
    }
}
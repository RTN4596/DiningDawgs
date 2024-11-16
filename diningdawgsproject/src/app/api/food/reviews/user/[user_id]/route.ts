import connectMongoDB from "../../../../../libs/mongodb";
import Review from "@/app/models/review";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";   

interface RouteParams {
    params: {user_id: string};
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const { user_id } = params;
    try {
        await connectMongoDB();
        const items = await Review.find({user_id});
        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch user reviews' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { user_id } = params;

    if (!request.body) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }

    const { food } = await request.json();

    try {
        await connectMongoDB();
        await Review.deleteOne({ user_id, food });
        return NextResponse.json({ message: 'Deleted review' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
    }
}
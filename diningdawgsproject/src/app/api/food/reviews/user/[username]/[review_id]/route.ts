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
    const { } = await request.json();

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

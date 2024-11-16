import connectMongoDB from "../../libs/mongodb";
import Food from "../../models/food";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";   

interface RouteParams {
    dining_hall: string;
}

export async function GET(request: NextRequest, context: { params: RouteParams}) {
    const { params } = context;
    const { dining_hall } = await params;

    try {
        await connectMongoDB();
        const reviews = await Food.find({ dining_hall });
        return NextResponse.json(reviews);
    }
    catch (error) {
        return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
    }
}

export async function POST(request: NextRequest, context: { params: RouteParams }) {
    const { params } = context;
    const { dining_hall } = await params;

    const body = await request.json();
    if (!body.food_name) {
        return NextResponse.json({ error: 'Missing food in body' }, { status: 400 });
    }
    const { food_name } = body;
    console.log(food_name)
    try {
        await connectMongoDB();
        console.log(food_name)
        console.log("passed here")
        const item = await Food.create({ food_name, dining_hall });
        console.log("passed create")
        return NextResponse.json(item);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create item' }, { status: 500 });
    }
}

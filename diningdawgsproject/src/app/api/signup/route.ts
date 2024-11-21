import connectMongoDB from "../../libs/mongodb";
import User from "@/app/models/user";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { username, email, password} = await request.json();
    await connectMongoDB();
    const user = await User.create({ username, email, password });
    return NextResponse.json(user);
}
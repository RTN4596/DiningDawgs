import connectMongoDB from "../../libs/mongodb";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { username, email, password} = await request.json();
    await connectMongoDB();
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        username,
        password: hashedPassword,
        email
    }
    await User.create(newUser);
    return NextResponse.json(newUser);
}
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt";

const { auth } = NextAuth(authConfig);

export async function middleware(request: any) {
    const { pathname } = request.nextUrl;
    console.log('Middleware triggered for:', pathname);  // Log every request path

    // Check for session token
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log('Token:', token);  // Log the token

    // Handle authentication logic
    if (!token && pathname.startsWith("/add-review")) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/add-review/:path*",
        "/my-reviews/",
    ]
};
import { NextResponse } from "next/server";

const middleware = (request) => {

    // if (request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
    // }
};

export const config = {
    // Without login you cannot access these pages
    matcher: ['/about/:path*', '/study/:path*']
}

export default middleware;


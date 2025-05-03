import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies';


export function middleware(request: NextRequest) {
    const response = NextResponse.next();

    const sessionCookie = getSessionCookie(request)
  
    const main_app_path = request.nextUrl.pathname.startsWith('/dashboard');

    if (!sessionCookie && main_app_path){
        return NextResponse.rewrite(new URL('/auth/sign-in', request.url))
    }

    return response;
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard/:path*'],
}
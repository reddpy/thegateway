import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSessionCookie } from 'better-auth/cookies';


export function middleware(request: NextRequest) {
    const sessionCookie = getSessionCookie(request);

    const isHomePage = request.nextUrl.pathname === '/';
    const isDashboardPath = request.nextUrl.pathname.startsWith('/dashboard');
    
    // If logged in and trying to access home, redirect to dashboard
    if (sessionCookie && isHomePage) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    // If not logged in and trying to access dashboard, redirect to sign in
    if (!sessionCookie && isDashboardPath) {
      return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }
    
    // Otherwise, continue with the request
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/','/dashboard/:path*'],
}
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const authPage = new Set(['/auth/login','/auth/register','/auth/reset-password','/auth/forget-password'])
const privatePages = new Set(['/dashboard/confirm','/dashboard/home','/dashboard/books','/dashboard/cart','/dashboard/about-us','/dashboard/terms','/dashboard/comming-soon'])

export async function middleware(req:NextRequest){

    const token = await getToken({req})

    if (privatePages.has(req.nextUrl.pathname)) {
        if (!token){
             const redirectUrl = new URL('/auth/login',req.nextUrl.origin)
             return NextResponse.redirect(redirectUrl)
        }
        return NextResponse.next()
    }

     if (authPage.has(req.nextUrl.pathname)) {
        if (token){
             const redirectUrl = new URL('/dashboard/home',req.nextUrl.origin)
             return NextResponse.redirect(redirectUrl)
        }
        return NextResponse.next()
    }
   return NextResponse.next()
}
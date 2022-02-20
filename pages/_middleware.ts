import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req: { nextUrl: { pathname: any } }, ev: any) {
    return NextResponse.next()
}
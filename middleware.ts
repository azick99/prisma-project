import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  // Check if the request URL matches the dynamic route pattern

  if (req.nextUrl.pathname.startsWith('/board/')) {
    // Check if it's a reload (F5 or Ctrl+R)
    if (req.nextUrl.searchParams.get('_next') === 'reload') {
      // Redirect to '/board'
      return NextResponse.redirect('/board')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/board/:id', // Match dynamic route
}

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Middleware logic will be implemented here
  return NextResponse.next()
}

export const config = {
  // Matcher configuration will be added here
  matcher: []
}
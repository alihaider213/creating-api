// Agr apko API wali file bnani ha tu "route.ts" he file ka naam rkhna ho ga

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {  // is say ham yah dekh sktay han k kia hmare url main ko "name" parameter ha?
    const name = url.searchParams.get("name"); // yaha ham get ke madad say us "name" parameter ke value of access kr rhay.

   // return new NextResponse('Hello, from: '+name); // yah hmesha "Text" formate main he response show krway ga
 
    return NextResponse.json({ message: 'Hello, from: '+name}); // ab hmara response JSON formate main aay ga.

  }
  else{
    return new NextResponse("Please send your name in search parameter 'name'")
  }

  // return new Response('Hello, Next.js!')
}

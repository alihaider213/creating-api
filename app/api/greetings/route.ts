import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {   // http://localhost:3000/api/greetings   use this in postman  https://web.postman.co/workspace/Contentful~4d93fad9-e2bf-4b30-b26b-f76280969729/request/create?requestId=60dbf5ad-f028-414a-94c5-b5a74dff9378
    return NextResponse.json({
      From: "Zia",
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}

export async function POST(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: req.name, //for dynamic name
      Message: "All well here",
      RequestType: "POST"
    });
  }
  else {
    return new NextResponse('Please include your name in the POST request');
  }
}

export async function PUT(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Zia",
      Message: "This is a updated greeting",
      RequestType: "PUT"
    });
  }
  else {
    return new NextResponse('Please include your name in the PUT request');
  }
}

export async function DELETE(request: NextRequest) {
  const req = await request.json();
  if(req.name){
    return NextResponse.json({
      To: "Zia",
      Message: "I have deleted the greetings",
      RequestType: "DELETE"
    });
  }
  else {
    return new NextResponse('Please include your name in the DELETE request');
  }
}


// as we know that it is a dynamic section so the name of the folder will be written in square brackets []

// https://github.com/panaverse/learn-nextjs/blob/main/step11_route_handler/step02_dynamic_segments/src/app/api/%5Bname%5D/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}:{params:{name:string}}) {
    return NextResponse.json({
      From: params.name,
      Message: "Greetings from Pakistan",
      RequestType: "GET"
    });
}

import dishes from "@/data/dishes.json";
import { NextResponse } from "next/server";
export async function GET(request: Request){
    return NextResponse.json(dishes);
}
import { data } from "@/server/data";
import { NextResponse } from "next/server";

export async function GET() {
  // Fake timeout
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return NextResponse.json(data);
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const favoriteColor = formData.get("favoriteColor");
    const preferredSeason = formData.get("preferredSeason");

    const responseData = {
      message: "Form received successfully!",
      timestamp: new Date().toISOString(),
      data: {
        name,
        favoriteColor,
        preferredSeason,
      },
    };

    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { error: "Failed to process form data" },
      { status: 500 }
    );
  }
}

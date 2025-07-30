import { NextResponse } from 'next/server';

export async function GET() {
  const todos = [
    { id: 1, text: "Complete project documentation" },
    { id: 2, text: "Review pull requests" },
    { id: 3, text: "Update dependencies" }
  ];

  return NextResponse.json(todos);
}
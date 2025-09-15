import { NextRequest, NextResponse } from 'next/server';
import todoService from '@/services/todoService';

type TodoCreateRequest = {
  text: string
} 

export async function GET() {
  try {
    const todos = await todoService.getAllTodos()
    return NextResponse.json(todos);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch todos' },
      { status: 500 }
    );
  }
}

export async function POST( 
  request: NextRequest
) {
  try {
    const todoRequest = await request.json() as TodoCreateRequest;
    const createdTodo = await todoService.createTodo(todoRequest.text)
    return NextResponse.json({ createdTodo });
  } catch {
    return NextResponse.json(
      { error: 'Failed to create todo' },
      { status: 500 }
    );
  }
}
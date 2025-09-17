"use server";

import todoService from "@/services/todoService";
import { revalidatePath } from "next/cache";
import { Todo } from "../../generated/prisma";

const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL;
  }

  return "http://localhost:3000";
};

// Only using a single server action
export async function getTodos(): Promise<Todo[]> {
  // Simulate long loading task
  await new Promise(resolve => setTimeout(resolve, 1000));
  return todoService.getAllTodos();
}

// Only using a single server action
export async function addTodoAction(formData: FormData) {
  const text = formData.get("text") as string;
  await todoService.createTodo(text);

  revalidatePath("/todos");
}

// Using an API route
export async function deleteTodoAction(id: number) {
  const baseUrl = getBaseUrl();
  const response = await fetch(`${baseUrl}/api/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/todos");
}

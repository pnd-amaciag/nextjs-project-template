import { Suspense } from "react";
import { TodoList } from "../components/TodoList";
import { Todo } from "../../generated/prisma";
import { getTodos } from "../actions";

export default function Home() {
  const fetchTodos = async (): Promise<Todo[]> => {
    return getTodos();
  };

  return (
    <div className="min-h-screen p-8">
      <main className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Todo List</h1>
          <a
            href="/version"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
          >
            Version
          </a>
        </div>
        <Suspense fallback={<div>Data loading...</div>}>
          <TodoList todoPromise={fetchTodos()}></TodoList>
        </Suspense>
      </main>
    </div>
  );
}

"use client";

import { startTransition, use, useOptimistic } from "react";
import { Todo } from "../../generated/prisma";
import { addTodoAction, deleteTodoAction } from "../app/actions";

type TodoAction = { type: "add" | "remove"; todo: Todo };

export function TodoList({ todoPromise }: { todoPromise: Promise<Todo[]> }) {
  const todos = use(todoPromise);
  const [optimisticTodos, changeOptimisticTodo] = useOptimistic<
    Todo[],
    TodoAction
  >(todos, (state, action) => {
    switch (action.type) {
      case "add":
        return [...state, action.todo];
      case "remove":
        return state.filter((t) => t.id !== action.todo.id);
      default:
        return state;
    }
  });

  const deleteTodo = (todo: Todo) => {
    startTransition(async () => {
      changeOptimisticTodo({
        todo,
        type: "remove",
      });
      await deleteTodoAction(todo.id);
    });
  };

  return (
    <>
      <div className="flex gap-2 mb-6">
        <form
          action={async (formData) => {
            const text = formData.get("text") as string;
            const newTodo = {
              id: Date.now(),
              text,
              createdAt: new Date(),
            };

            changeOptimisticTodo({
              todo: newTodo,
              type: "add",
            });
            await addTodoAction(formData);
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </form>
      </div>
      <ul className="space-y-2">
        {optimisticTodos.map((todo: Todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

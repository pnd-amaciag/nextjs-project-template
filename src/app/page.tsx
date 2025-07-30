"use client";

import { useState, useEffect } from "react";

type Todo = {
  id: number;
  text: string;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.error('Failed to fetch todos:', err));
  }, []);

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue("");
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
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

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new todo..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addTodo}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo: Todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between p-3 bg-gray-100 rounded-lg"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

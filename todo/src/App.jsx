import { useState } from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Lära mig React",
      done: false,
    },
    {
      id: 2,
      text: "Göra Todo-appen",
      done: false,
    },
  ]);

  function addTodo(text) {
    if (text.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: text,
      done: false,
    };

    setTodos([...todos, newTodo]);
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  return (
    <main className="app">
      <h1>Min Todo-lista</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
      />
    </main>
  );
}

export default App;
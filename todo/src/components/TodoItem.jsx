function TodoItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li
      className={todo.done ? "todo done" : "todo"}
    >
      <label className="todo-text">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggleTodo(todo.id)}
        />

        <span>{todo.text}</span>
      </label>

      <button
        className="delete-button"
        onClick={() => onDeleteTodo(todo.id)}
      >
        Ta bort
      </button>
    </li>
  );
}

export default TodoItem;
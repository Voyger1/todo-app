import { useState } from "react";

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
  event.preventDefault();

  const trimmedText = text.trim();

  if (trimmedText === "") {
    return;
  }

  onAddTodo(trimmedText);
  setText("");
}

return (
  
    <form className="input-area" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Skriv en uppgift..."
      />

      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoForm;
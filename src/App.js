import { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target.querySelector("input").value;
    const newTodo = {
      id: Date.now(),
      value: inputValue,
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button>Create Todo</button>
      </form>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;

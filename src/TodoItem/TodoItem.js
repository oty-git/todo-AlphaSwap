import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todos, removeTodo }) => {
  const todo = todos.map((item) => (
    <li className="todoItem" key={item.id}>
      <span>{item.value}</span>
      <button onClick={() => removeTodo(item.id)}>delete todo</button>
    </li>
  ));
  return <ul>{todo}</ul>;
};

export default TodoItem;

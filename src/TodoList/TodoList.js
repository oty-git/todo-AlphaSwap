import React from "react";
import TodoItem from "../TodoItem";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      <TodoItem todos={todos} removeTodo={removeTodo} />
    </ul>
  );
};

export default TodoList;

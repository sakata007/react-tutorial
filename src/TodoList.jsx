import React from "react";
import Todo from "./Todo";

// props
const TodoList = ({ todos, toggleTodo }) => {
  // jsx記法↓
  // map関数　一つづつ取り出す
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList;

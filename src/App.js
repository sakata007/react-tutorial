import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  // 変数を管理するため
  // 初期値は１つ目の引数に入る
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo1",
      completed: false,
    },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加
    // 打ち込んだ文字列を取得
    // console.log(todoNameRef.current.value);
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <>
      {/* 一つ目がprops */}
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク：{todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;

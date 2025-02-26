import React, { useState } from "react";
import TodoList from "./components/TodoList";
import UseMemo from "./components/UseMemo";
import ReactMemo from "./components/ReactMemo";

const App = () => {
  const [todos, setTodos] = useState(["New todo"]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  return (
    <div>
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <button onClick={addTodo}>Add Todo</button>
      <p>Count: {count} <button onClick={() => setCount(count + 1)}>+</button></p>

      <h2>Expensive Calculation</h2>
      <UseMemo count={count} />

      <h2>React.memo</h2>
      <ReactMemo />
      
      <h3>Todo List</h3>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;

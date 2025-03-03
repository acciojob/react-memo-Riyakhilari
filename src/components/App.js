import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const onAdd = () => {
    setTasks((prev) => [...prev, "New Todo"]);
  };

  return (
    <div id="main">
      <h1>React.useMemo</h1>
      <h2>My todos</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <button id="add-todo" onClick={onAdd}>Add Todo</button>

      <hr />
      <UseMemo />
      <hr />
      <ReactMemo />
    </div>
  );
};

export default App;

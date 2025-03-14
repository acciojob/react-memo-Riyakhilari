import React, { useState } from "react";

const ReactMemo = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const onAddSkill = () => {
    if (input.trim().length > 5) {
      setList((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  return (
    <div>
      <h1>React.memo</h1>
      <div>
        <input
          id="memo-input"
          value={input}
          onChange={onInput}
          placeholder="Enter a custom task"
        />
        <button id="add-skill" onClick={onAddSkill}>Add Skill</button>
      </div>
      <ul id="skill-list">
        {list.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(ReactMemo);

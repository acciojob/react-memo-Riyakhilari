import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => count * 2, [count]);

  const onIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <span>Count: {count}</span>
        <button id="increment-btn" onClick={onIncrease}>+</button>
      </div>
      <h2>Expensive Calculation</h2>
      <p>{result}</p>
    </div>
  );
};

export default UseMemo;

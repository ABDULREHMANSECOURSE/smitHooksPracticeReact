import React, { createContext, useState } from "react";

// 1️⃣ Context create
const CounterContext = createContext();

const UseContext = () => {
  const [count, setCount] = useState(0);

  return (
    // 2️⃣ Provider SAME PAGE
    <CounterContext.Provider value={{ count, setCount }}>
      <CounterUI />
    </CounterContext.Provider>
  );
};

// 3️⃣ useContext Provider ke ANDAR
const CounterUI = () => {
  const { count, setCount } = React.useContext(CounterContext);

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default UseContext;

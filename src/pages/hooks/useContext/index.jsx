import React from "react";
import { CounterContext } from "../../../components/context/CounterContext";

const UseContext = () => {
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
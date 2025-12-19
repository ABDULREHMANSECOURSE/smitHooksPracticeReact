import React, { useContext } from "react";
import { counterContext } from "../../../components/context";

const UseContextFunc = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default UseContextFunc;
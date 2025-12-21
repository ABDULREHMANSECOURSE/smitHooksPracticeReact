import React from "react";
import { CounterContext } from "../../../components/context/CounterContext";
import BackToHomeBtn from "../../../components/backToHomeBtn";

const UseContext = () => {
  const { count, setCount } = React.useContext(CounterContext);
  return (
    <>
      <BackToHomeBtn />
      <h2>This is the useEffect Page</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
};

export default UseContext;
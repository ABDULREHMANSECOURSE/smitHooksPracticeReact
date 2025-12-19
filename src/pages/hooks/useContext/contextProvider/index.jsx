import React, { useState } from "react";
import { counterContext } from "../../../../components/context";
import { Routes } from "react-router-dom";

const CounterProvider = () => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <Routes />
    </counterContext.Provider>
  );
};

export default CounterProvider;

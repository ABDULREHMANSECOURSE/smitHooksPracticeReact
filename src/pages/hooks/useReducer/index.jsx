import React from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

const UseReducer = () => {
  function UseReducer(count, setCount) {
    switch (setCount.type) {
      case "increment":
        return count + 1
      case "decrement":
        return count - 1
      default:
        return count
    }
  }
  const [count, setCount] = React.useReducer(UseReducer, 0)
  return (
    <>
      <BackToHomeBtn />
      <h2>This is the useReducer Page</h2>
      <button onClick={() => setCount({type: "increment"})}>+</button>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount({type:"decrement"})}>-</button>
    </>
  )
}

export default UseReducer
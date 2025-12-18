import React from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

const UseReducer = () => {
  document.title = "useReducer"
  function setCountFunc(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        return state
    }
  }
  const [count, setCount] = React.useReducer(setCountFunc, 0)
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
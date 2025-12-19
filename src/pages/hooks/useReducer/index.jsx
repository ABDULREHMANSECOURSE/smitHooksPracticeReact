import React from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

const UseReducer = () => {
  document.title = "useReducer"
  function setCount(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1
      case "decrement":
        return state - 1
      default:
        return state
    }
  }
  const [count, dispatch] = React.useReducer(setCount, 0)
  return (
    <>
      <BackToHomeBtn />
      <h2>This is the useReducer Page</h2>
      <button onClick={() => dispatch({type: "increment"})}>Increment</button>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
    </>
  )
}

export default UseReducer
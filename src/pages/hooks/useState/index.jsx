import React from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

const UseState = () => {
  document.title = "useState";
  const [count, setCount] = React.useState(0);
  return (
    <>
        <BackToHomeBtn />
        <h2>This is the useState Page</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )
}

export default UseState
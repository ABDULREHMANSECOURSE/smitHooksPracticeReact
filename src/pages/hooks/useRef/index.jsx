import React, { useRef, useState } from 'react'
import BackToHomeBtn from '../../../components/backToHomeBtn'

function UseRef() {
  const inputRef = useRef(null)
  const [count, setCount] = useState(0)


  return (
    <>
        <BackToHomeBtn/>
        <h2>This is the useRef Page</h2>
        <h3>Count: {count}</h3>
        <input type="number" ref={inputRef} />
        <button onClick={() => setCount(inputRef.current.value)}>Set Count</button>
    </>
  )
}

export default UseRef
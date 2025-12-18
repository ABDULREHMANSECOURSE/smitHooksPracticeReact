import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
        <h2>Welcome to the Home Page</h2>
        <button onClick={() => Navigate('/useState')}>useState</button>
        <button onClick={() => Navigate('/useEffect')}>useEffect</button>
        <button onClick={() => Navigate('/useRef')}>useRef</button>
    </>
  )
}

export default Home